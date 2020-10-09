import {createTodo, deleteTodo, updateTodo} from 'actions';
import {Todo} from 'models/todo';
import {Reducer} from 'redux';
import {isType} from 'typescript-fsa';

export type TodoState = Todo[];

const generateId = (state: any[]) => state.reduce((pre, cur) => cur.id > pre ? cur.id : pre, -1) + 1;

export const todoReducer: Reducer<TodoState> = (state = [], action) => {
  if (isType(action, createTodo))
    return [...state, {id: generateId(state), ...action.payload}];
  else if (isType(action, updateTodo))
    return [...state];
  else if (isType(action, deleteTodo))
    return [...state];
  return state;
};
