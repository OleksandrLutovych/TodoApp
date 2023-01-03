import React from "react";
import Button from "./UI/Button";
import classes from "./Todo.module.css";

const TodoTask = () => {
  return (
    <div className={classes.task}>
      <div>
        <input type="radio" />
        <span>s</span>
      </div>
      
      <div>
        <Button>Edit</Button>
        <Button>✕</Button>
      </div>
    </div>
  );
};

export default TodoTask;
