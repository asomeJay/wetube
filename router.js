import express from "express";

export const user_router = express.Router();

user_router.get("/", (req, res)=> res.send('user index'));
user_router.get("/edit", (req, res)=> res.send('user edit'));
user_router.get("/password", (req, res)=> res.send('user password'));


