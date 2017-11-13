export const addTodoRequest = todo => ({
  type: 'ADD_TODO_REQUEST',
  text: todo,
});

export const addTodoSuccess = (id, text) => ({
  type: 'ADD_TODO_SUCCEEDED',
  message: 'success',
  _id: id,
  text,
});

export const addTodoFail = () => ({
  type: 'ADD_TODO_FAILED',
  message: 'error',
});

export const deleteTodoRequest = todoId => ({
  type: 'DELETE_TODO_REQUEST',
  _id: todoId,
});

export const deleteTodoSuccessed = todoId => ({
  type: 'DELETE_TODO_SUCCESSED',
  _id: todoId,
  message: 'sucess to delete todo',
});

export const deleteTodoFailed = () => ({
  type: 'DELETE_TODO_FAILED',
  message: 'fail to delete todo',
});

export const updateTodoRequest = (todoId, todo) => ({
  type: 'UPDATE_TODO_REQUEST',
  _id: todoId,
  text: todo,
});

export const updateTodoSuccessed = (todoId, todo) => ({
  type: 'UPDATE_TODO_SUCCESSED',
  _id: todoId,
  text: todo,
});

export const updateTodoFailed = () => ({
  type: 'UPDATE_TODO_FAILED',
  message: 'update todo fail',
});

export const fetchTodosRequest = () => ({
  type: 'FETCH_TODOS_REQUEST',
});

export const fetchTodosSuccessed = todos => ({
  type: 'FETCH_TODOS_SUCCESSED',
  payload: todos,
  message: 'fetch todos success',
});

export const fetchTodosFailed = () => ({
  type: 'FETCH_TODOS_FAILED',
  message: 'fetch todos fail',
});

