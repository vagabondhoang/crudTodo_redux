import { getAll, createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todoController';
import { queryValidator, payloadValidator } from '../validation/todoValidation';
import verifyUniqueTodo from '../queries/verifyTodo';

const routes = [
  {
    method: 'GET',
    path: '/todos',
    handler: getAll,
  }, {
    method: 'POST',
    path: '/todo',
    config: {
      validate: {
        payload: payloadValidator,
      },
      pre: [
        { method: verifyUniqueTodo },
      ],
      handler: createTodo,
    },
  }, {
    method: 'DELETE',
    path: '/todo/id',
    config: {
      validate: {
        query: queryValidator,
      },
      handler: deleteTodo,
    },
  }, {
    method: 'GET',
    path: '/todo/{id}',
    config: {
      validate: {
        query: queryValidator,
      },
      handler: getTodo,
    },
  }, {
    method: 'PUT',
    path: '/todo/{id}',
    config: {
      validate: {
        payload: payloadValidator,
        query: queryValidator,
      },
      handler: updateTodo,
    },
  },
];

export default routes;
