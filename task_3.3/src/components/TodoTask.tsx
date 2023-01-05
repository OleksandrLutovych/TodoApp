import React from "react";
import Button from "./UI/Button";
import classes from "./Todo.module.css";

export interface IProps {
  children: React.ReactNode
}

const TodoTask = ({children}: IProps) => {
  return (
    <div className={classes.task}>
      <div>
        <input type="radio" />
        <span>{children}</span>
      </div>
      
      <div>
        <Button>Edit</Button>
        <Button>✕</Button>
      </div>
    </div>
  );
};

export default TodoTask;
