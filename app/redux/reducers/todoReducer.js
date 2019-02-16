import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todos;
    default:
      return state;
  }
};
