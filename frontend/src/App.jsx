import { useEffect } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import useTasksStore from "./state/useTasksStore.js";

const App = () => {
  const fetchTasks = useTasksStore((state) => state.fetchTasks);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="container font-roboto p-4 flex gap-[50px] bg-gradient-to-r from-rose-100 to-teal-100">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
