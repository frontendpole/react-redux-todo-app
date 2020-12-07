import React from "react";
import { useSelector } from 'react-redux';
import TodoItem from "./TodoItem";

const TodoList = () => {
  let todos = useSelector(state => state);

  const renderedListItems = todos.map(todo => {
    return <TodoItem key={todo.id} todo={todo} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList;