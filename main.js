import express from "express";
import path from "path";
const app = express();

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(path.join(__dirname,"public")));

import {PORT} from "./config.js";

app.listen(PORT,()=>console.log("Server on port",PORT));