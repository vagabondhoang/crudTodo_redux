import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: String,
});

const DBTodo = mongoose.model('Todo', TodoSchema);
export default DBTodo;
