export const addTodo = (id, todo) => ({
  type: 'ADD_TODO',
  text: todo,
  _id: id,
});

export const deleteTodo = todoId => ({
  type: 'DELETE_TODO',
  _id: todoId,
});

export const updateTodo = (todoId, todo) => ({
  type: 'UPDATE_TODO',
  _id: todoId,
  text: todo,
});

export const fetchTodos = todos => ({
  type: 'FETCH_TODOS',
  payload: todos,
});
