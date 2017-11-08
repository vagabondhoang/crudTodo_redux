const initialState = {
  todoLists: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todoLists: [
          ...state.todoLists,
          action.todos,
        ]
      };
    case 'ADD_TODO': {
      const newTodo = {
        id: action.id,
        todo: action.text,
      };

      return {
        ...state,
        todoLists: [
          ...state.todoLists,
          newTodo,
        ],
      };
    }
    case 'DELETE_TODO':
      return {
        ...state,
        todoLists: [
          ...state.todoLists.filter(todo => todo.id !== action.id),
        ],
      };
    case 'UPDATE_TODO': {
      const newOne = {
        id: action.id,
        todo: action.text,
      };
      return {
        ...state,
        todoLists: [
          ...state.todoLists.map(todo => (todo.id === action.id ? newOne : todo)),
        ],
      };
    }
    default: return state;
  }
}

