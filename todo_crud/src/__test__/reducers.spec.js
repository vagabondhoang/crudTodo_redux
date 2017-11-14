import reducers from '../reducers';

test('fetch todos request', () => {
  const state = reducers({ todoReducer: [] }, { type: 'FETCH_TODOS_REQUEST' });
  expect(state).toEqual({ todoReducer: [] });
});

test('fetch todos success', () => {
  const state = reducers(
    { todoReducer: [] },
    {
      type: 'FETCH_TODOS_SUCCESSED',
      payload: [
        { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
        { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
      ],
      message: 'fetch todos success',
    },
  );
  expect(state).toEqual({
    todoReducer: [
      { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
      { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
    ],
  });
});

test('fetch todos fail', () => {
  const state = reducers(
    { todoReducer: [] },
    {
      type: 'FETCH_TODOS_FAILED',
      message: 'failed',
    },
  );
  expect(state).toEqual({ todoReducer: [{ message: 'failed' }] });
});

test('add todo request', () => {
  const state = reducers(
    {
      todoReducer: [
        { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
        { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
      ],
    },
    { type: 'ADD_TODO_REQUEST', text: 'todo1' },
  );
  expect(state).toEqual({
    todoReducer: [
      { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
      { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
    ],
  });
});

test('add todo success', () => {
  const state = reducers(
    {
      todoReducer: [
        { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
        { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
      ],
    },
    {
      type: 'ADD_TODO_SUCCEEDED',
      message: 'success',
      _id: '5a0a611a112c820b1cb9229e',
      text: 'todo1',
    },
  );
  expect(state).toEqual({
    todoReducer: [
      { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
      { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
      { _id: '5a0a611a112c820b1cb9229e', title: 'todo1', message: 'success' },
    ],
  });
});

test('add todo request', () => {
  const state = reducers(
    {
      todoReducer: [
        { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
        { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
      ],
    },
    { type: 'ADD_TODO_REQUEST', text: 'todo1' },
  );
  expect(state).toEqual({
    todoReducer: [
      { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
      { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
    ],
  });
});

test('add todo fail', () => {
  const state = reducers(
    {
      todoReducer: [],
    },
    {
      type: 'ADD_TODO_FAILED',
      message: 'failed',
    },
  );
  expect(state).toEqual({
    todoReducer: [{ message: 'failed' }],
  });
});

test('update todo request', () => {
  const state = reducers(
    {
      todoReducer: [
        { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
        { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
        { _id: '5a0a611a112c820b1cb9229e', title: 'todo1', message: 'success' },
      ],
    },
    {
      type: 'UPDATE_TODO_REQUEST',
      _id: '5a0a4ae199ede91d90508b8d',
      text: 'todo22',
    },
  );
  expect(state).toEqual({
    todoReducer: [
      { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
      { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
      { _id: '5a0a611a112c820b1cb9229e', title: 'todo1', message: 'success' },
    ],
  });
});

test('update todo success', () => {
  const state = reducers(
    {
      todoReducer: [
        { _id: '5a0a4ae199ede91d90508b8d', title: 'todo2', __v: 0 },
        { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
        { _id: '5a0a611a112c820b1cb9229e', title: 'todo1', message: 'success' },
      ],
    },
    {
      type: 'UPDATE_TODO_SUCCESSED',
      _id: '5a0a4ae199ede91d90508b8d',
      text: 'todo22',
    },
  );
  expect(state).toEqual({
    todoReducer: [
      { _id: '5a0a4ae199ede91d90508b8d', title: 'todo22' },
      { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
      { _id: '5a0a611a112c820b1cb9229e', title: 'todo1', message: 'success' },
    ],
  });
});

test('update todo fail', () => {
  const state = reducers(
    {
      todoReducer: [],
    },
    {
      type: 'UPDATE_TODO_FAILED',
      message: 'failed',
    },
  );
  expect(state).toEqual({
    todoReducer: [{ message: 'failed' }],
  });
});

test('delete todo request', () => {
  const state = reducers(
    {
      todoReducer: [
        { _id: '5a0a4ae199ede91d90508b8d', title: 'todo22' },
        { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
        { _id: '5a0a611a112c820b1cb9229e', title: 'todo1', message: 'success' },
      ],
    },
    { type: 'DELETE_TODO_REQUEST', _id: '5a0a611a112c820b1cb9229e' },
  );
  expect(state).toEqual({
    todoReducer: [
      { _id: '5a0a4ae199ede91d90508b8d', title: 'todo22' },
      { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
      { _id: '5a0a611a112c820b1cb9229e', title: 'todo1', message: 'success' },
    ],
  });
});

test('delete todo success', () => {
  const state = reducers(
    {
      todoReducer: [
        { _id: '5a0a4ae199ede91d90508b8d', title: 'todo22' },
        { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
        { _id: '5a0a611a112c820b1cb9229e', title: 'todo1', message: 'success' },
      ],
    },
    {
      type: 'DELETE_TODO_SUCCESSED',
      _id: '5a0a611a112c820b1cb9229e',
      message: 'sucess to delete todo',
    },
  );
  expect(state).toEqual({
    todoReducer: [
      { _id: '5a0a4ae199ede91d90508b8d', title: 'todo22' },
      { _id: '5a0a4ae299ede91d90508b8e', title: 'todo3', __v: 0 },
    ],
  });
});

test('delete todo fail', () => {
  const state = reducers(
    {
      todoReducer: [],
    },
    {
      type: 'DELETE_TODO_FAILED',
      message: 'failed',
    },
  );
  expect(state).toEqual({
    todoReducer: [{ message: 'failed' }],
  });
});
