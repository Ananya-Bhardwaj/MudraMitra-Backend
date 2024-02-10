import connectDb from "./utils/db.js";
import express from "express";
import cors from "cors";

const app = express();

//routes
app.use(express.json());

app.use(
  cors({
    origin:
      "http://localhost:5173",
    credential: true,
  }),
);

import quizRouter from "./routes/quiz.js";
import userRouter from "./routes/user.js";
import modulesRouter from "./routes/modules.js";
import mentorRouter from "./routes/mentor.js";
import registrationRouter from "./routes/registration.js";

app.use("/api/quiz", quizRouter);
app.use("/api/user", userRouter);
app.use("/api/modules", modulesRouter);
app.use("/api/mentor", mentorRouter);
app.use("/api/registration",registrationRouter);

connectDb().then(() => {
  app.listen(5500, () => {
    console.log("Connected to backend, listening on port 5500");
  });
});
