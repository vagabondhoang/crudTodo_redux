const initialState = {
  todoLists: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      let newTodo = {
        id: action.id,
        todo: action.text
      }

      return {
        ...state,
        todoLists: [
          ...state.todoLists,
          newTodo
        ]
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todoLists: [
          ...state.todoLists.filter(todo => todo.id !== action.id)
        ]
      };
    case 'UPDATE_TODO':
      let id, todo;
      return {
        ...state,
        todoLists: [
          ...state.todoLists.map(todo => todo.id === action.id ? {id, todo: action.text} : todo)
        ]
      }

    default: return state;
  }
}