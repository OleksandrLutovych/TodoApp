import React, { useEffect, useState } from "react";
import TodoTask from "../components/TodoTask";
import Button from "../components/UI/Button";
import classes from "../components/Todo.module.scss";
import { useAppSelector, useAppDispatch } from "../reducers/hook";
import { addTodo, fetchTodos, removeTodo } from "../reducers/TodoReducer";
import { ITodoApi } from "../types/redux.types";

const Todo: React.FC = () => {
  const todo = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();

  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const deleteTodo = (id: string): void => {
    const [todoTarget] = todo.filter((item) => item.id === id);
    dispatch(removeTodo(todoTarget));
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <form className={classes.form}>
        <input
          type="text"
          placeholder="Create task"
          className={classes.input}
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <div>
          <Button
            onClick={(e: React.FormEvent) => {
              e.preventDefault();

              dispatch(addTodo(todoText));
              setTodoText("");
            }}
          >
            Create task
          </Button>
        </div>
      </form>
      <div className="todo-container">
        <h3>Tasks</h3>
        {todo.map((item: ITodoApi) => (
          <TodoTask
            key={item.id}
            completed={item.completed && true}
            title={item.title}
            deleteTodo={deleteTodo}
            id={item.id}
            inputValue={item.title}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid rgb(173, 173, 173)",
          alignItems: "center",
        }}
      >
        <p>{todo.length} items</p>
        <div>
          <button className={classes.btn}>All</button>
          <button className={classes.btn}>Completed</button>
          <button className={classes.btn}>Active</button>
        </div>

        <Button>Clear Items</Button>
      </div>
    </div>
  );
};

export default Todo;
