import Joi from 'joi';
import { getAll, createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todoController';

const routes = [
  {
    method: 'GET',
    path: '/getAll',
    handler: getAll,
  }, {
    method: 'POST',
    path: '/createTodo',
    handler: createTodo,
    config: {
      validate: {
        payload: {
          title: Joi.string().min(3).max(50).required(),
        },
      },
    },
  }, {
    method: 'DELETE',
    path: '/deleteTodo/id',
    handler: deleteTodo,
  }, {
    method: 'GET',
    path: '/getTodo/{id}',
    handler: getTodo,
  }, {
    method: 'PUT',
    path: '/updateTodo/{id}',
    handler: updateTodo,
    config: {
      validate: {
        payload: {
          title: Joi.string().min(3).max(50).required(),
        },
      },
    },
  },
];

export default routes;
