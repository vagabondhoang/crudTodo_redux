import { takeLatest, put } from 'redux-saga/effects';
import { deleteTodoSuccessed, deleteTodoFailed } from '../actions';

function* deleteTodo(action) {
  try {
    const { _id } = action;
    const url = `http://localhost:8080/todo/${_id}`;
    yield fetch(url, {
      method: 'DELETE',
    });
    yield put(deleteTodoSuccessed(_id));
  } catch (err) {
    put(deleteTodoFailed());
  }
}
export default function* watchDeleteTodo() {
  yield takeLatest('DELETE_TODO_REQUEST', deleteTodo);
}
