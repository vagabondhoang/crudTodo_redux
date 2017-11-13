import { takeLatest, put } from 'redux-saga/effects';
import { fetchTodosSuccessed, fetchTodosFailed } from '../actions';

function* fetchTodos() {
  try {
    const url = 'http://localhost:8080/todos';
    const response = yield fetch(url);
    const data = yield response.json();
    if (data) {
      yield put(fetchTodosSuccessed(data));
    }
  } catch (err) {
    yield put(fetchTodosFailed());
  }
}

export default function* watchFetchTodos() {
  yield takeLatest('FETCH_TODOS_REQUEST', fetchTodos);
}
