import { create } from "zustand";
import axios from "axios";
import path from "../../utils/path.js";

const useTasksStore = create((set) => ({
  tasks: [],

  fetchTasks: async () => {
    try {
      const response = await axios.get(path);
      set({ tasks: response.data });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },

  addTask: async (task) => {
    try {
      const response = await axios.post(path, task);
      set((state) => ({ tasks: [...state.tasks, response.data] }));
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },

  updateTask: async (id, updatedTask) => {
    try {
      const response = await axios.put(`${path}/${id}`, updatedTask);
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? response.data : task
        ),
      }));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  },

  deleteTask: async (id) => {
    try {
      await axios.delete(`${path}/${id}`);
      set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  },
}));

export default useTasksStore;
