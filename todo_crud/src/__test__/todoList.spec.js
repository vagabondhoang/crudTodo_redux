import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon, { expectation } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../containers/TodoItem';
import { combineReducers } from 'redux';

// const dispatch = sinon.spy();
// const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

// test.only('TodoList renders correctly', () => {
//   const props = {
//     _id: '5a0d2c692124cf1aecf1aa53',
//     title: 'todo1',
//   };
//   const todos = [{
//     _id: '5a0d2c692124cf1aecf1aa53',
//     title: 'todo1',
//   }];
//   const component = shallow(<TodoList
//     dispatch={dispatch}
//     todos={props}
//     store={mockStore({ todoReducer: todos })} />);
//   console.log(component.find('div'));
//   expect(component.find('div').length).toEqual(1);
// });

test.only('shallow??????', () => {
  const fetchTodosRequest = sinon.spy();
  const todos = [{
    _id: '5a0d2c692124cf1aecf1aa53',
    title: 'todo1',
  }];
  const component = shallow(<TodoList
    todos={todos}
    fetchTodosRequest={fetchTodosRequest}
  />);
  // expect(component.find(<TodoList/>).length).toEqual(1);
});

// xtest('componentWillMount', () => {
//   const fetchTodosRequest = jest.fn();
//   const component = shallow(<TodoList fetchTodosRequest={fetchTodosRequest} />);
//   component.instance().componentWillMount();
//   expect(fetchTodosRequest).toBeCalled(1);
// });
