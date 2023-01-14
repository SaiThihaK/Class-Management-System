import express from "express";
import cors from "cors";
import classRoute from "./router/classRoute.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", classRoute);

app.listen("8000", () => console.log("Server is running at PORT:8000"));
