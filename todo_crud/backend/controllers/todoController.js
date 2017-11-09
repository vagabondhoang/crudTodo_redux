import Boom from 'boom';
import DBTodo from '../models/Todo';

export const getAll = async (request, reply) => {
  try {
    const allTodo = await DBTodo.find({});
    reply(allTodo);
  } catch (err) {
    reply(Boom.notFound(`No todo found ${err}`));
  }
};

export const createTodo = async (request, reply) => {
  try {
    const { title } = request.payload;
    const todoCreate = await DBTodo.create({ title });
    reply(todoCreate);
  } catch (err) {
    reply(Boom.badRequest(`Something is wrong with ${err}`));
  }
};

export const deleteTodo = async (request, reply) => {
  try {
    const todo = await DBTodo.findById({ _id: request.params.id });
    todo.remove();
    reply('Todo has deleted');
  } catch (err) {
    reply(Boom.badRequest(`Something is wrong with ${err}`));
  }
};

export const getTodo = async (request, reply) => {
  try {
    const todo = await DBTodo.findById({ _id: request.params.id });
    reply(todo);
  } catch (err) {
    reply(Boom.badRequest(`Something is wrong with ${err}`));
  }
};

export const updateTodo = async (request, reply) => {
  try {
    const { title } = request.payload;
    const todoUpdate = await DBTodo.findOneAndUpdate(
      { _id: request.params.id },
      { title },
      { new: true },
    );
    reply(todoUpdate);
  } catch (err) {
    reply(Boom.badRequest(`Something is wrong with ${err}`));
  }
};
