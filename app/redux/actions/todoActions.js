import * as types from './actionTypes';

// action creators
export function loadTodosSuccess(todo) {
  return { type: types.LOAD_TODOS_SUCCESS, todo };
}
