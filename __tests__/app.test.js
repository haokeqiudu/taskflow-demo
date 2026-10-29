const request = require('supertest');
const app = require('../app');

describe('Taskflow API', () => {
  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('GET /tasks returns all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('POST /tasks creates a task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Write GitHub demo docs' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Write GitHub demo docs');
    expect(res.body.completed).toBe(false);
  });

  test('PATCH /tasks/:id updates task', async () => {
    const createRes = await request(app)
      .post('/tasks')
      .send({ title: 'Review PR' });

    const res = await request(app)
      .patch(`/tasks/${createRes.body.id}`)
      .send({ completed: true });

    expect(res.statusCode).toBe(200);
    expect(res.body.completed).toBe(true);
  });

  test('DELETE /tasks/:id removes task', async () => {
    const createRes = await request(app)
      .post('/tasks')
      .send({ title: 'Delete me later' });

    const res = await request(app).delete(`/tasks/${createRes.body.id}`);
    expect(res.statusCode).toBe(204);
  });
});
