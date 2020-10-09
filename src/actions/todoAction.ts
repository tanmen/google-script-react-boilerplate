import {Todo} from 'models/todo';
import actionCreatorFactory from 'typescript-fsa';

const creatorFactory = actionCreatorFactory('TODO');

export const createTodo = creatorFactory<Omit<Todo, 'id'>>('CREATE');
export const deleteTodo = creatorFactory<Todo>('DELETE');
export const updateTodo = creatorFactory<Todo>('UPDATE');
