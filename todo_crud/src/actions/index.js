export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  text: todo,
  id: Date.now()
})

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  id: todoId
})

export const updateTodo = (todoId, todo) => ({
  type: 'UPDATE_TODO',
  id: todoId,
  text: todo
})