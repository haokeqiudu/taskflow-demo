const express = require('express');
const {
  listTasks,
  createTask,
  updateTask,
  deleteTask
} = require('./taskStore');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/tasks', (req, res) => {
  res.json(listTasks());
});

app.post('/tasks', (req, res) => {
  try {
    const task = createTask(req.body.title);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.patch('/tasks/:id', (req, res) => {
  try {
    const task = updateTask(req.params.id, req.body);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    return res.json(task);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.delete('/tasks/:id', (req, res) => {
  const deleted = deleteTask(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'Task not found' });
  }
  return res.status(204).send();
});

module.exports = app;
