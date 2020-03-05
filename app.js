//const express = require("express")
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookie_parser from "cookie-parser";
import body_parser from "body-parser";
import userRouter from "./Router/userRouter";
import { localsMiddleware } from "./middlewares";
import videoRouter from "./Router/videoRouter";
import globalRouter from "./Router/globalRouter";
import routes from "./routes";


const app = express()
//Node Module을 다른 곳에서 들고온다. require가 하는 일은
// Node Module을 들고오는 것. express라는 이름의 폴더를
// 내 파일들 속에서 찾으려함 

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookie_parser());
app.use(body_parser.urlencoded({extended : true}));
app.use(body_parser.json());
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
