import { put, takeLatest } from 'redux-saga/effects';
import { updateTodoSuccessed, updateTodoFailed } from '../actions';

function* updateTodo(action) {
  try {
    const { _id, text } = action;
    if (_id) {
      const url = `http://localhost:8080/todo/${_id}`;
      yield fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          title: text,
        }),
      });
      yield put(updateTodoSuccessed(_id, text));
    }
  } catch (err) {
    yield put(updateTodoFailed);
  }
}
export default function* watchFetchTodos() {
  yield takeLatest('UPDATE_TODO_REQUEST', updateTodo);
}
