import {
  addTodoRequest,
  addTodoSuccess,
  addTodoFail,
  deleteTodoRequest,
  deleteTodoSuccessed,
  deleteTodoFailed,
  updateTodoRequest,
  updateTodoSuccessed,
  updateTodoFailed,
  fetchTodosRequest,
  fetchTodosSuccessed,
  fetchTodosFailed,
} from '../actions';

test('ADD_TODO_REQUEST', () => {
  expect(addTodoRequest('todo1')).toEqual({
    type: 'ADD_TODO_REQUEST',
    text: 'todo1',
  });
});

test('ADD_TODO_SUCCEEDED', () => {
  expect(addTodoSuccess(12345, 'todo1')).toEqual({
    type: 'ADD_TODO_SUCCEEDED',
    message: 'success',
    _id: 12345,
    text: 'todo1',
  });
});

test('ADD_TODO_FAILED', () => {
  expect(addTodoFail()).toEqual({
    type: 'ADD_TODO_FAILED',
    message: 'error',
  });
});

test('DELETE_TODO_REQUEST', () => {
  expect(deleteTodoRequest(12345)).toEqual({
    type: 'DELETE_TODO_REQUEST',
    _id: 12345,
  });
});

test('DELETE_TODO_SUCCESSED', () => {
  expect(deleteTodoSuccessed(12345)).toEqual({
    type: 'DELETE_TODO_SUCCESSED',
    _id: 12345,
    message: 'sucess to delete todo',
  });
});

test('DELETE_TODO_FAILED', () => {
  expect(deleteTodoFailed()).toEqual({
    type: 'DELETE_TODO_FAILED',
    message: 'fail to delete todo',
  });
});

test('UPDATE_TODO_REQUEST', () => {
  expect(updateTodoRequest(12345, 'todo111')).toEqual({
    type: 'UPDATE_TODO_REQUEST',
    _id: 12345,
    text: 'todo111',
  });
});

test('UPDATE_TODO_SUCCESSED', () => {
  expect(updateTodoSuccessed(12345, 'todo111')).toEqual({
    type: 'UPDATE_TODO_SUCCESSED',
    _id: 12345,
    text: 'todo111',
  });
});

test('UPDATE_TODO_FAILED', () => {
  expect(updateTodoFailed()).toEqual({
    type: 'UPDATE_TODO_FAILED',
    message: 'update todo fail',
  });
});

test('FETCH_TODOS_REQUEST', () => {
  expect(fetchTodosRequest()).toEqual({
    type: 'FETCH_TODOS_REQUEST',
  });
});

test('FETCH_TODOS_SUCCESSED', () => {
  expect(fetchTodosSuccessed([{ _id: 12345, todo: 'abc' }])).toEqual({
    type: 'FETCH_TODOS_SUCCESSED',
    payload: [{ _id: 12345, todo: 'abc' }],
    message: 'fetch todos success',
  });
});

test('FETCH_TODOS_FAILED', () => {
  expect(fetchTodosFailed()).toEqual({
    type: 'FETCH_TODOS_FAILED',
    message: 'fetch todos fail',
  });
});

