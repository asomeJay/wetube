//const express = require("express")
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookie_parser from "cookie-parser";
import body_parser from "body-parser";

const app = express()
//Node Module을 다른 곳에서 들고온다. require가 하는 일은
// Node Module을 들고오는 것. express라는 이름의 폴더를
// 내 파일들 속에서 찾으려함 
const PORT = 4000;

const handleListening = () => 
console.log(`Listening on : http://localhost:${PORT}`); 
const handleHome = (req, res) => res.send("Hello from Home!");
const handleProfile = (req, res) => res.send("You are on my Profile");

app.use(cookie_parser());
app.use(body_parser.urlencoded({extended : true}));
app.use(body_parser.json());
app.use(helmet());
app.use(morgan("dev"));


const shutdown = (req,res,next) => {
    res.send("not happening\n"); // 이거 발동하면
    //연결 끊을 수 있다.
};

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);