import Boom from 'boom';
import DBTodo from '../models/Todo';

const verifyUniqueTodo = async (request, reply) => {
  const { title } = request.payload;
  const existingTodo = await DBTodo.find({ title });
  if (existingTodo.length > 0) {
    return reply(Boom.badRequest('Todo exists'));
  }
  return reply();
};

export default verifyUniqueTodo;

