import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from "../models/taskModels.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Failed to fetch tasks." });
  }
};

export const addTask = async (req, res) => {
  const task = req.body;
  console.log(task);

  try {
    const newTask = await createTask(task);
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ error: "Failed to add task." });
  }
};

export const updateTaskHandler = async (req, res) => {
  const { id } = req.params;
  const task = req.body;
  try {
    const updatedTask = await updateTask(id, task);
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Failed to update task." });
  }
};

export const deleteTaskHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTask(id);
    res.status(204).json({ message: "Task deleted successfully." });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Failed to delete task." });
  }
};
