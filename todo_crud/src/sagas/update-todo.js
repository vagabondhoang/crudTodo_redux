import { put, takeLatest, call } from 'redux-saga/effects';
import api from './api';
import { updateTodoSuccessed, updateTodoFailed } from '../actions';

function* updateTodo(action) {
  try {
    const { _id, text } = action;
    if (!_id) return;
    yield call(
      api,
      `http://localhost:8080/todo/${_id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          title: text,
        }),
      },
    );
    yield put(updateTodoSuccessed(_id, text));
  } catch (err) {
    yield put(updateTodoFailed);
  }
}
export default function* watchFetchTodos() {
  yield takeLatest('UPDATE_TODO_REQUEST', updateTodo);
}
