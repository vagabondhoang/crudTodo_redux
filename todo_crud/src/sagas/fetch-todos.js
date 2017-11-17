import { takeLatest, put, call } from 'redux-saga/effects';
import api from './api';
import { fetchTodosSuccessed, fetchTodosFailed } from '../actions';

function* fetchTodos() {
  try {
    const data = yield call(
      api,
      'http://localhost:8080/todos',
    );
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
