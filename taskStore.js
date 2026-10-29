const tasks = [
  { id: 1, title: 'Set up repository', completed: true },
  { id: 2, title: 'Create project roadmap', completed: false }
];

let nextId = 3;

function listTasks() {
  return tasks;
}

function createTask(title) {
  const trimmed = String(title || '').trim();
  if (!trimmed) {
    throw new Error('Task title is required');
  }

  const task = {
    id: nextId++,
    title: trimmed,
    completed: false
  };

  tasks.push(task);
  return task;
}

function updateTask(id, updates = {}) {
  const task = tasks.find((item) => item.id === Number(id));
  if (!task) {
    return null;
  }

  if (updates.title !== undefined) {
    const trimmed = String(updates.title).trim();
    if (!trimmed) {
      throw new Error('Task title is required');
    }
    task.title = trimmed;
  }

  if (updates.completed !== undefined) {
    task.completed = Boolean(updates.completed);
  }

  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === Number(id));
  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}

module.exports = {
  listTasks,
  createTask,
  updateTask,
  deleteTask
};
