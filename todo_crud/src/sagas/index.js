import { fork } from 'redux-saga/effects';
import watchAddTodo from './add-todo';
import watchFetchTodos from './fetch-todos';
import watchUpdateTodo from './update-todo';
import watchDeleteTodo from './delete-todo';

export default function* rootSaga() {
  yield [
    fork(watchAddTodo),
    fork(watchFetchTodos),
    fork(watchUpdateTodo),
    fork(watchDeleteTodo),
  ];
}
