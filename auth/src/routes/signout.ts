import express from "express";

const router = express.Router();

router.route("/api/users/signout").post((req, res) => {
  res.send("signout");
});

export { router as signoutRouter };
