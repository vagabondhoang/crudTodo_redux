export default function todoReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESSED':
      return [
        ...state,
        ...action.payload,
      ];
    case 'FETCH_TODOS_FAILED':
      return [
        ...state,
        {
          message: action.message,
        },
      ];
    case 'ADD_TODO_SUCCEEDED': {
      return [
        ...state,
        {
          _id: action._id, // eslint-disable-line no-underscore-dangle
          title: action.text,
          message: action.message,
        },
      ];
    }
    case 'ADD_TODO_FAILED': {
      return [
        ...state,
        {
          message: action.message,
        },
      ];
    }
    case 'DELETE_TODO_SUCCESSED': {
      return state.filter(todo => todo._id !== action._id);
    }
    case 'DELETE_TODO_FAILED': {
      return [
        ...state,
        {
          message: action.message,
        },
      ];
    }
    case 'UPDATE_TODO_SUCCESSED': {
      const newOne = {
        _id: action._id, // eslint-disable-line no-underscore-dangle
        title: action.text,
      };
      return [
        ...state.map(todo => (todo._id === action._id ? newOne : todo)),
      ];
    }
    case 'UPDATE_TODO_FAILED': {
      return [
        ...state,
        {
          message: action.message,
        },
      ];
    }
    default: return state;
  }
}

