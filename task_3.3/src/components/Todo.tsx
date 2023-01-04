import React from "react";
import TodoTask from "./TodoTask";
import Button from "./UI/Button";
import classes from "./Todo.module.css";
import { useAppSelector, useAppDispatch } from "../reducers/hook";
import { addTodo } from "../reducers/TodoReducer";

const Todo = () => {
  const todo = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();
  console.log(todo);

  return (
    <div className="container">
      <h2>Todo List</h2>
      <form name="form" className={classes.form} id="form">
        <input
          type="text"
          placeholder="Create task"
          id="input"
          name="todoText"
          className={classes.input}
        />
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              dispatch(addTodo([]));
            }}
          >
            test
          </button>
          <Button disabled>Create task</Button>
          <Button>Edit</Button>
        </div>
      </form>
      <div className="todo-container" id="todo-container">
        <TodoTask />
        <TodoTask />
        <TodoTask />
      </div>
      <Button>Clear Items</Button>
    </div>
  );
};

export default Todo;
