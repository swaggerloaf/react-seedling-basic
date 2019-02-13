import { connect } from 'react-redux';
import { decrement, increment } from '../redux/actions/actions';
import Todo from './Todo.jsx';

const mapStateToProps = state => {
  return {
    value: state
  };
};

//const mapDispatchToProps = {};

const TodoContainer = connect(
  mapStateToProps
  // mapDispatchToProps
)(Todo);

export default TodoContainer;
