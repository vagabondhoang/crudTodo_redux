import { put, takeLatest } from 'redux-saga/effects';
import { addTodoSuccess, addTodoFail } from '../actions';

function* addTodo(action) {
  try {
    const { text } = action;
    const url = 'http://localhost:8080/todo';
    const response = yield fetch(url, {
      method: 'POST',
      body: JSON.stringify({ title: text }),
    });
    const data = yield response.json();
    if (data) {
      yield put(addTodoSuccess(data._id, data.title)); // eslint-disable-line
    } else {
      yield put(addTodoFail());
    }
  } catch (e) {
    yield put(addTodoFail());
  }
}

export default function* watchAddTodo() {
  yield takeLatest('ADD_TODO_REQUEST', addTodo);
}
