export default function todoReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TODOS':
      return [
        ...state,
        action.payload,
      ];
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.text,
        },
      ];
    case 'DELETE_TODO':
      return [
        ...state.filter(todo => todo.id !== action.id),
      ];
    case 'UPDATE_TODO': {
      const newOne = {
        id: action.id,
        title: action.text,
      };
      return [
        ...state.map(todo => (todo.id === action.id ? newOne : todo)),
      ];
    }
    default: return state;
  }
}

