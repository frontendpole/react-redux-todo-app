import React from "react";
import { useDispatch } from 'react-redux';
import { deleteTodo } from './redux/actions';

const TodoItem = ({ todo }) => {
  let dispatch = useDispatch();

  return (

    <div className="TodoItem">
      <li>{todo.name}</li>
      <button className="delete" onClick={() => dispatch(deleteTodo(todo.id))}>DELETE</button>
      <button className="edit">EDIT</button>
    </div>)
}

export default TodoItem;