import express from "express";
import {
  createClasses,
  deleteClass,
  getClassDetail,
  getClasses,
  upDateClass,
} from "../controller/classController.js";

const router = express.Router();

router.get("/classes", getClasses);
router.get("/classes/:id", getClassDetail);
router.post("/classes", createClasses);
router.post("/classes/update/:id", upDateClass);
router.delete("/classes/delete/:id", deleteClass);

export default router;
