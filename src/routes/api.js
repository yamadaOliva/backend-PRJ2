import express from "express";
import authController from "../controller/authController.js";
import filmController from "../controller/filmController.js";
import commentController from "../controller/commentController.js";
import saleController from "../controller/saleController.js";
import adminController from "../controller/adminController.js";
import giftController from "../controller/giftController.js";
import transactionController from "../controller/transactionController.js";
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
  //commentcontroller
  router.post("/comment", commentController.addCommentController);
  router.get("/comment", commentController.getListCommentController);
  //salecontroller
  router.get("/ticket", saleController.getAllTicket);
  //admin 
  router.get("/user", adminController.getUserListController);
  router.get("/user/:id", adminController.findUserByIdController);
  router.put("/user/:id", adminController.blockUserController);
  router.post("/user/:id", adminController.deleteUserController);
  //gift
  router.get("/gift", giftController.getAllGiftController);
  //transaction
  router.post("/transaction", transactionController.createTransactionController);
  router.get("/transaction", transactionController.getAllTransactionController);
  return app.use("/api/v1", router);
};

export default initAPI;
