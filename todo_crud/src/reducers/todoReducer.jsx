const initialState = {
  todoLists: []
};

export default function todoReducer(state = initialState, action) {
  switch(action.type) {
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
      }

    default: return state;
  }
}