import express from "express";
import { currentuserRouter } from "./routes/currentUser";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();

app.use(express.json());

app.use(currentuserRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.use(signinRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

