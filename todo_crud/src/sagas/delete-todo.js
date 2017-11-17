import { takeLatest, put, call } from 'redux-saga/effects';
import api from './api';
import { deleteTodoSuccessed, deleteTodoFailed } from '../actions';

function* deleteTodo(action) {
  try {
    const { _id } = action;
    const url = `http://localhost:8080/todo/${_id}`;
    yield fetch(url, {
      method: 'DELETE',
    });
    // yield call(
    //   api,
    //   `http://localhost:8080/todo/${_id}`,
    //   {
    //     method: 'DELETE',
    //   },
    // );
    yield put(deleteTodoSuccessed(_id));
  } catch (err) {
    put(deleteTodoFailed());
  }
}
export default function* watchDeleteTodo() {
  yield takeLatest('DELETE_TODO_REQUEST', deleteTodo);
}
