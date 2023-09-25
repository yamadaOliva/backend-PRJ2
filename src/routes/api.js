import express from "express";
import authController from "../controller/authController.js";
import filmController from "../controller/filmController.js";
const router = express.Router();

const initAPI = (app) => {
  router.get("/", (req, res) => {
    console.log(req.body);
    return res.status(200).json(req.body);
  });
  router.post("/register", authController.registerController);
  router.post("/login", authController.loginController);
  //fimlcontroller
  router.get("/showing", filmController.getListShowingController);
  router.get("/upcoming", filmController.getListUpcomingController);
  return app.use("/api/v1", router);
};

export default initAPI;
