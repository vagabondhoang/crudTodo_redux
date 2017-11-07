import DBTodo from '../models/Todo';

export const getAll = (request, reply) => {

  DBTodo.find({}, (err, todo) => {
    if (err) {
      throw new Error(`Something wrong with ${err}`);
    }
    reply(todo);
  });
};

export const createTodo = (request, reply) => {
  const { title } = request.payload;
  DBTodo.create({ title }, (err, todo) => {
    if (err) {
      throw new Error(`Something wrong with ${err}`);
    }

    reply(todo);
  });
};

export const deleteTodo = (request, reply) => {
  DBTodo.findById({ _id: request.params.id }, (err, todo) => {
    if (err) {
      throw new Error(`Something wrong with ${err}`);
    }
    todo.remove();
    reply('Todo has deleted');
  });
};

export const getTodo = (request, reply) => {
  DBTodo.findById({ _id: request.params.id }, (err, todo) => {
    if (err) {
      throw new Error(`Something wrong with ${err}`);
    }

    reply(todo);
  });
};

export const updateTodo = (request, reply) => {
  const { title } = request.payload;
  DBTodo.findOneAndUpdate({ _id: request.params.id }, { title }, (err) => {
    if (err) {
      throw new Error(`Something wrong with ${err}`);
    }
    reply('todo is updated');
  });
};
