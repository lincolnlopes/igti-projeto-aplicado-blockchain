import cors from "cors";
import dotenv from "dotenv";
import express from "express";
//import * as logger from "morgan";
import winston from "winston";
import "./src/database";
import loginRequired from "./src/middlewares/loginRequired";
import homeRoutes from "./src/routes/homeRoutes";
import issueRoutes from "./src/routes/issueRoutes";
import meetingRoutes from "./src/routes/meetingRoutes";
import networkRoutes from "./src/routes/networkRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import userRoutes from "./src/routes/userRoutes";

dotenv.config();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

// // CONFIGURAÇÕES DE LOG
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  //prettier-ignore
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: './Logs/API.log'})
  ],
  format: combine(label({ label: "api" }), timestamp(), myFormat),
});
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    //this.app.use(logger.);
    this.app.use(cors(corsOptions));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/meetings", meetingRoutes);
    this.app.use("/network", networkRoutes);
    this.app.use("/users", loginRequired, userRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/issues", issueRoutes);
  }
}

export default new App().app;
