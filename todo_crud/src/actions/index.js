export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  text: todo,
  id: Date.now()
})

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
})

export const editTodo = (todoId) => ({
  type: 'EDIT_TODO',
})