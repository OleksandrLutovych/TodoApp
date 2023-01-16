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
          onChange={(e) => {console.log(e.target.value)}}
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
        <h3>Tasks</h3>
        {todo.map((item) => (
          <TodoTask key={item.id} checked={item.completed && true}>
            {item.title}
          </TodoTask>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid rgb(173, 173, 173)",
          alignItems: 'center'
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
