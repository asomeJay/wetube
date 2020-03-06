import "./db";
import dotenv from "dotenv";
import app from "./app";
dotenv.config();
import "./models/Video";
import "./models/User";
import "./models/Comment";
//import "./models/Comment";

const PORT = process.env.PORT || 4000;

const handle_listening = () =>
console.log(`Listening on :  http://localhost:${PORT}`);

app.listen(PORT, handle_listening);