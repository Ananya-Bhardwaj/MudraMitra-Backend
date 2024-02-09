const router = express.Router(); 
router.route("/").get((req, res)=>{
  res.status(200).send("wwelcome to registration page");
});