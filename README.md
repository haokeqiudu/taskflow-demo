# Taskflow Demo

A simple task management API used to demonstrate the full GitHub workflow:
- Issue creation
- Branching
- Commit
- Pull Request
- Code review
- GitHub Actions CI
- Merge
- Release
- Hotfix

## Features
- Create task
- List tasks
- Update task status
- Delete task

## Tech stack
- Node.js
- Express
- Jest
- Supertest
- GitHub Actions

## Run locally

```bash
npm install
npm start
```

Then visit:
- http://localhost:3000/health
- http://localhost:3000/tasks

## API examples

### List tasks
```bash
curl http://localhost:3000/tasks
```

### Create task
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Write GitHub demo"}'
```

### Update task
```bash
curl -X PATCH http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

### Delete task
```bash
curl -X DELETE http://localhost:3000/tasks/1
```

## GitHub workflow demo

### Suggested issues
- #1 Build task CRUD API
- #2 Add task completion status
- #3 Add test cases
- #4 Fix CI pipeline

### Suggested branches
- feature/task-crud
- feature/task-status
- fix/ci-pipeline

### Suggested PR workflow
1. Create feature branch from main
2. Commit changes
3. Open PR
4. Request review
5. Fix review comments
6. Merge to main
7. Create release tag

## Release
```bash
git tag v0.1.0
git push origin v0.1.0
```

## CI
GitHub Actions runs automatically on:
- push to main
- pull requests targeting main
