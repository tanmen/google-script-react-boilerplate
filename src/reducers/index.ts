import {todoReducer, TodoState} from 'reducers/todoReducer';
import {combineReducers} from 'redux';

export type State = {
  todos: TodoState
};

export const reducers = combineReducers<State>({
  todos: todoReducer
});
