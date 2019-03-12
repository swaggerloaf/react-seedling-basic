import * as types from './actionTypes';
import todoApi from '../../api/todoApi';

// action creators

export function addTodo(todo) {
  return { type: types.ADD_TODO, todo };
}

export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos };
}

// thunks
export function loadTodos() {
  return function(dispatch) {
    var todos = todoApi.getAllTodos();
    dispatch(loadTodosSuccess(todos));
  };
}
