import connectDb from "./utils/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import stripePackage from "stripe";
import { v4 as uuidv4 } from "uuid";

dotenv.config(); 

const app = express();

const stripe = stripePackage(process.env.STRIPE_KEY);

//routes
app.use(express.json());

app.use(
  cors({
    origin:
      "https://mudra-mitra.netlify.app",
    credential: true,
  }),
);

import quizRouter from "./routes/quiz.js";
import userRouter from "./routes/user.js";
import modulesRouter from "./routes/modules.js";
import mentorRouter from "./routes/mentor.js";
import registrationRouter from "./routes/registration.js";
import postsRouter from "./routes/posts.js"; 

app.use("/api/quiz", quizRouter);
app.use("/api/user", userRouter);
app.use("/api/modules", modulesRouter);
app.use("/api/mentor", mentorRouter);
app.use("/api/registration",registrationRouter);
app.use("/api/posts", postsRouter); 


app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("Product", product);
  console.log("Price", product.price);

  const idempotencyKey = uuidv4();

  stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      return stripe.charges.create(
        {
          amount: product.price * 100, // assuming price is in cents
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempotencyKey },
      );
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while processing the payment" });
    });
});

connectDb().then(() => {
  app.listen(5500, () => {
    console.log("Connected to backend, listening on port 5500");
  });
});

