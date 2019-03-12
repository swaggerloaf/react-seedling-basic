import * as types from './actionTypes';

// action creators

export function addTodo(todo) {
  return { type: types.ADD_TODO, todo };
}