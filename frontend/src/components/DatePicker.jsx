import React from "react";

const DatePicker = ({ customRecurrence, setCustomRecurrence }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2 text-center text-indigo-950">
        Recurrence Options
      </h3>

      <label className="block text-md mb-1 font-medium text-center text-sky-900">
        Recurrence Interval
      </label>
      <select
        value={customRecurrence.interval}
        onChange={(e) =>
          setCustomRecurrence({ ...customRecurrence, interval: e.target.value })
        }
        className="border rounded p-2 mb-2 text-center w-72 text-sky-900 flex place-content-center justify-self-center outline-none focus:ring-4 focus:ring-cyan-300 focus:outline-2 focus:outline-cyan-300"
      >
        <option value="">Select</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
        <option value="custom">Custom</option>
      </select>

      <label className="block text-md mb-1 font-medium text-center text-sky-900">
        Specific Days (if applicable)
      </label>
      <input
        type="text"
        placeholder="e.g., Monday, Wednesday"
        className="border text-sky-700 rounded p-2 w-72 flex justify-self-center outline-none focus:ring-4 focus:ring-cyan-300 focus:outline-2 focus:outline-cyan-300"
        value={customRecurrence.specificDays.join(", ")}
        onChange={(e) =>
          setCustomRecurrence({
            ...customRecurrence,
            specificDays: e.target.value.split(",").map((day) => day.trim()),
          })
        }
      />

      <label className="block text-md mb-1 font-medium text-center text-sky-900">
        Nth Day of the Month
      </label>
      <input
        type="text"
        placeholder="e.g., 2 for the second Tuesday"
        className="border text-sky-700 rounded p-2 w-72 flex justify-self-center outline-none focus:ring-4 focus:ring-cyan-300 focus:outline-2 focus:outline-cyan-300"
        value={customRecurrence.nthDay}
        onChange={(e) =>
          setCustomRecurrence({ ...customRecurrence, nthDay: e.target.value })
        }
      />

      <label className="block text-md mb-1 font-medium text-center text-sky-900">
        Start Date
      </label>
      <input
        type="date"
        className="border rounded p-2 mb-2 w-72 text-sky-900 flex place-content-center justify-self-center outline-none focus:ring-4 focus:ring-cyan-300 focus:outline-2 focus:outline-cyan-300"
        value={customRecurrence.startDate}
        onChange={(e) =>
          setCustomRecurrence({
            ...customRecurrence,
            startDate: e.target.value,
          })
        }
      />

      <label className="block text-md mb-1 font-medium text-center text-sky-900 ">
        End Date
      </label>
      <input
        type="date"
        className="border rounded p-2 mb-2 w-72 text-sky-900 flex place-content-center justify-self-center outline-none focus:ring-4 focus:ring-cyan-300 focus:outline-2 focus:outline-cyan-300"
        value={customRecurrence.endDate}
        onChange={(e) =>
          setCustomRecurrence({ ...customRecurrence, endDate: e.target.value })
        }
      />
    </div>
  );
};

export default DatePicker;
