import TaskItem from "./TaskItem.jsx";
import useTasksStore from "../state/useTasksStore.js";

const TaskList = () => {
  const tasks = useTasksStore((state) => state.tasks);
  const deleteTask = useTasksStore((state) => state.deleteTask);

  return (
    <div className="flex-col h-full">
      <h2 className="text-5xl font-bold mt-3 pb-1 text-center text-zinc-700">
        Tasks
      </h2>
      <ul className="mt-4 flex flex-wrap justify-start gap-20">
        {tasks?.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
