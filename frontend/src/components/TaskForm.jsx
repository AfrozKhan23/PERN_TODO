import { useState } from "react";
import DatePicker from "./DatePicker.jsx";
import useTasksStore from "../state/useTasksStore.js";

const TaskForm = () => {
  const addTask = useTasksStore((state) => state.addTask);
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
  });
  const [customRecurrence, setCustomRecurrence] = useState({
    interval: "",
    specificDays: [],
    nthDay: "",
    startDate: "",
    endDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...task,
      recurrence: customRecurrence.interval ? "custom" : "none",
      custom_recurrence: customRecurrence,
    };
    await addTask(taskData);
    setTask({ title: "", description: "", due_date: "" });
    setCustomRecurrence({
      interval: "",
      specificDays: [],
      nthDay: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow-cyan-800 bg-gradient-to-r from-indigo-400 to-cyan-400 border rounded shadow-md w-[350px]"
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-stone-700">
          Create New Task
        </h2>
        <div className="mb-4">
          <label className="block text-md font-medium mb-1 text-center text-sky-900">
            Title
          </label>
          <input
            type="text"
            className="border text-sky-700 rounded p-2 w-72 flex justify-self-center outline-none focus:ring-4 focus:ring-cyan-300 focus:outline-2 focus:outline-cyan-300"
            placeholder="Enter title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium mb-1 text-center text-sky-900">
            Description
          </label>
          <textarea
            className="border text-sky-700 rounded p-2 w-72 flex justify-self-center outline-none focus:ring-4 focus:ring-cyan-300 focus:outline-2 focus:outline-cyan-300"
            placeholder="Enter description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium mb-1 text-center text-sky-900">
            Due Date
          </label>
          <input
            type="date"
            className="border rounded p-2 w-72 text-sky-900 flex place-content-center justify-self-center outline-none focus:ring-4 focus:ring-cyan-300 focus:outline-2 focus:outline-cyan-300"
            value={task.due_date}
            onChange={(e) => setTask({ ...task, due_date: e.target.value })}
            required
          />
        </div>
        <DatePicker
          customRecurrence={customRecurrence}
          setCustomRecurrence={setCustomRecurrence}
        />
        <button
          type="submit"
          className="mt-4 w-48 shadow-lg shadow-blue-700 bg-purple-500 hover:bg-purple-500 hover:text-gray-800 hover:-translate-y-1 text-white p-2 rounded ms-14 hover:ring-1 hover:ring-purple-400 "
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
