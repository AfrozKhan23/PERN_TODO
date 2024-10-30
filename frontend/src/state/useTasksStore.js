import { create } from "zustand";
import axios from "axios";

const useTasksStore = create((set) => ({
  tasks: [],
  fetchTasks: async () => {
    const response = await axios.get("http://localhost:5000/api/tasks");
    set({ tasks: response.data });
  },
  addTask: async (task) => {
    const response = await axios.post("http://localhost:5000/api/tasks", task);
    set((state) => ({ tasks: [...state.tasks, response.data] }));
  },
  updateTask: async (id, updatedTask) => {
    const response = await axios.put(
      `http://localhost:5000/api/tasks/${id}`,
      updatedTask
    );
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? response.data : task)),
    }));
  },
  deleteTask: async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
  },
}));

export default useTasksStore;
