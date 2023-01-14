import express from "express";
import {
  createClasses,
  getClasses,
  upDateClass,
} from "../controller/classController.js";

const router = express.Router();

router.get("/classes", getClasses);

router.post("/classes", createClasses);

router.post("classes/update/:id", upDateClass);

export default router;
