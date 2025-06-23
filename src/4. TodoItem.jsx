import React from 'react';
import styles from '../styles/TodoList.module.css';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;