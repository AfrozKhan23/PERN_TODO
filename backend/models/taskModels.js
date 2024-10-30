import pool from "../db/db.js";

export const createTask = async (task) => {
  const { title, description, due_date, recurrence, custom_recurrence } = task;
  const result = await pool.query(
    "INSERT INTO tasks (title, description, due_date, recurrence, custom_recurrence) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [
      title,
      description,
      due_date,
      recurrence,
      JSON.stringify(custom_recurrence),
    ]
  );
  return result.rows[0];
};

export const getAllTasks = async () => {
  const result = await pool.query("SELECT * FROM tasks");
  return result.rows;
};

export const updateTask = async (id, task) => {
  const { title, description, due_date, recurrence, custom_recurrence } = task;
  const result = await pool.query(
    "UPDATE tasks SET title = $1, description = $2, due_date = $3, recurrence = $4, custom_recurrence = $5 WHERE id = $6 RETURNING *",
    [title, description, due_date, recurrence, custom_recurrence, id]
  );
  return result.rows[0];
};

export const deleteTask = async (id) => {
  await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
};
