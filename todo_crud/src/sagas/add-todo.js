import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import api from './api';
import {
  addTodoSuccess,
  addTodoFail,
} from '../actions';

export function* addTodo(action) {
  try {
    const { text } = action;
    const data = yield call(
      api,
      'http://localhost:8080/todo', {
        method: 'POST',
        body: JSON.stringify({
          title: text,
        }),
      },
    );
    if (data) {
      yield put(addTodoSuccess(data._id, data.title)); // eslint-disable-line
    } else {
      yield put(addTodoFail());
    }
  } catch (e) {
    yield put(addTodoFail());
  }
}

export function* watchAddTodo() {
  yield takeLatest('ADD_TODO_REQUEST', addTodo);
}

export default [
  watchAddTodo,
];
