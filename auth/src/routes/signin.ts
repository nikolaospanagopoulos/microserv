import express from "express";

const router = express.Router();

router.route("/api/users/signin").post((req, res) => {
  res.send("signin");
});

export { router as signinRouter };
