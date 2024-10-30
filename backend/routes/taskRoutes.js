import express from "express";
import pool from "../db/db.js";
import {
  getTasks,
  addTask,
  updateTaskHandler,
  deleteTaskHandler,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/health", async (req, res) => {
  try {
    const client = await pool.connect();
    client.release();
    res.status(200).json({ status: "Database is connected" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "Database connection failed", error: error.message });
  }
});

router.get("/tasks", getTasks);
router.post("/tasks", addTask);
router.put("/tasks/:id", updateTaskHandler);
router.delete("/tasks/:id", deleteTaskHandler);

export default router;
