import { combineReducers } from 'redux';
import todoReducer from './todoReducer.jsx';

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
