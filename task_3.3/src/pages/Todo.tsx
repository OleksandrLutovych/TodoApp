import React, { useEffect } from "react";
import TodoTask from "../components/TodoTask";
import Button from "../components/UI/Button";
import classes from "../components/Todo.module.css";
import { useAppSelector, useAppDispatch } from "../reducers/hook";
import { addTodo, fetchTodos } from "../reducers/TodoReducer";

const Todo = () => {
  const todo = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();
  console.log(todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

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
        {todo.map((item) => (
          <TodoTask
            key={item.id}
            checked={item.completed && true}
          >
            {item.title}
          </TodoTask>
        ))}
      </div>
      <Button>Clear Items</Button>
    </div>
  );
};

export default Todo;
