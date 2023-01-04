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
          className={classes.input}
        />
        <div>
          <Button
            onClick={(e: React.FormEvent) => {
              e.preventDefault();
              dispatch(addTodo([]));
            }}
          >
            Create task
          </Button>
        </div>
      </form>
      <div className="todo-container" id="todo-container">
        {todo.map((item, index) => (
          <TodoTask key={index}>{item}</TodoTask>
        ))}
      </div>
      <Button>Clear Items</Button>
    </div>
  );
};

export default Todo;
