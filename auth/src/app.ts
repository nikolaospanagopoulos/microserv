import express from "express";
import { errorHandler } from "./middlewares/error-handling";
import { currentuserRouter } from "./routes/currentUser";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import "express-async-errors";
const app = express();

app.use(express.json());

app.use(currentuserRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.use(signinRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
