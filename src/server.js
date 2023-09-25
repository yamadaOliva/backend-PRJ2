import express from "express";
import cookieParser from "cookie-parser";
import initAPI from "./routes/api.js";
import configCors from "./config/cors.js";
import connectDB from "./config/connectDB.js";
import bodyParser from "body-parser";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

configCors(app);
connectDB();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
initAPI(app);
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
}
);



