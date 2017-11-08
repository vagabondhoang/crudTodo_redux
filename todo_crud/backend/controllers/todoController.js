import Boom from 'boom';
import DBTodo from '../models/Todo';

export const getAll = async (request, reply) => {
  console.log("getAll >> ");
  try {
    const allTodo = await DBTodo.find({});
    console.log("hihi >> ", allTodo);
    reply(allTodo);
  } catch (err) {
    console.log("err >> ", err);
    reply(Boom.notFound(`No todo found ${err}`));
  }
};

export const createTodo = async (request, reply) => {
  try {
    const { title } = request.payload;
    const createTodo = await DBTodo.create({ title });
    reply(createTodo);
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
    const updateTodo = await DBTodo.findOneAndUpdate({ _id: request.params.id });
    reply(updateTodo);
  } catch (err) {
    reply(Boom.badRequest(`Something is wrong with ${err}`));
  }
};
