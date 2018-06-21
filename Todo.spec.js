const mongoose = require('mongoose');

const Todo = require('./Todo');

describe('Todo model', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost/todoTest');
  });

  afterEach(() => {
    return Todo.remove();
  });

  afterAll(() => {
    return mongoose.disconnect();
  });

  it('should create a todo and return a completed task with false value ', async () => {
    const todo = {task: 'Testing my todo app'};

    const savedTodo = await Todo.create(todo);

    expect(savedTodo.task).toEqual(todo.task);
    expect(savedTodo.completed).toEqual(false);

  })
})