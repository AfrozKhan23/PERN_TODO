import React from "react";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="rounded p-4 mb-5 w-[300px] text-cyan-600 bg-gradient-to-r from-cyan-200 to-cyan-400 shadow-lg shadow-cyan-700 flex flex-col justify-between max-h-full">
      <div className="flex-1 overflow-hidden">
        <h3 className="font-bold text-2xl pb-2 text-cyan-900">{task.title}</h3>

        {/* Scrollable Description */}
        <div className="overflow-y-auto max-h-[200px] w-full overflow-x-hidden">
          <p className="font-semibold text-base pb-4 text-cyan-600">
            {task.description}
          </p>
        </div>

        <p className="pb-5">
          Due Date: {new Date(task.due_date).toLocaleDateString()}
        </p>

        {task.custom_recurrence && (
          <div className="overflow-y-auto max-h-[200px]">
            <p className="font-semibold text-base pb-1 text-cyan-600">
              Custom Recurrence Details:
            </p>
            <p>Interval: {task.custom_recurrence.interval}</p>
            <p>
              Custom Interval: {task.custom_recurrence.customInterval}{" "}
              {task.custom_recurrence.customIntervalUnit}
            </p>
            <p>
              Specific Days: {task.custom_recurrence.specificDays.join(", ")}
            </p>
            <p>Nth Day: {task.custom_recurrence.nthDay}</p>
            <p>
              Start Date:{" "}
              {new Date(task.custom_recurrence.startDate).toLocaleDateString()}
            </p>
            <p>
              End Date:{" "}
              {new Date(task.custom_recurrence.endDate).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="mt-4 w-full shadow-lg shadow-blue-700 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded hover:ring-1 hover:ring-purple-400"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
