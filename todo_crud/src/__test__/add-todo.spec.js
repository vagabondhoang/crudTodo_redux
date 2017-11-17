import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  addTodoFail,
  addTodoSuccess,
} from '../actions';
import {
  addTodo,
  watchAddTodo,
} from '../sagas/add-todo';

describe('addTodo Saga', () => {
  let addTodoGenerator;
  beforeEach(() => {
    addTodoGenerator = addTodo({});
    const saveResponse = addTodoGenerator.next().value;
    expect(saveResponse).toMatchSnapshot();
  });
  it('should dispatch the addTodoSuccess action if it requests the data successfully', () => {
    const responseMock = {
      _id: 'id',
      title: 'hahahah',
    };
    const putDescriptor = addTodoGenerator.next(responseMock).value;
    expect(putDescriptor).toEqual(put(addTodoSuccess(responseMock._id, responseMock.title)));// eslint-disable-line
  });

  it('should dispatch the addTodoFail action if it requests the data failure', () => {
    const putDescriptor = addTodoGenerator.next(undefined).value;
    expect(putDescriptor).toEqual(put(addTodoFail()));
  });

  it('should dispatch the addTodoFail action if it requests the data failure', () => {
    const error = new Error('ADD_TODO_FAILED');
    const putDescriptor = addTodoGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(addTodoFail()));
  });
});

describe('addTodoHandlerSaga Saga', () => {
  // const addTodoHandlerSaga = watchAddTodo();

  it('should start task to watch for SAVE_PROFILE.REQUEST action', () => {
    const takeLatestDescriptor = watchAddTodo().next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest('ADD_TODO_REQUEST', addTodo));
  });
});
