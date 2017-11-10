export default function todoReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TODOS':
      return [
        ...state,
        ...action.payload,
      ];
    case 'ADD_TODO': {
      return [
        ...state,
        {
          _id: action._id,
          title: action.text,
        },
      ];
    }
    case 'DELETE_TODO':
      return [
        ...state.filter(todo => todo._id !== action._id),
      ];
    case 'UPDATE_TODO': {
      const newOne = {
        _id: action._id,
        title: action.text,
      };
      return [
        ...state.map(todo => (todo._id === action._id ? newOne : todo)),
      ];
    }
    default: return state;
  }
}

