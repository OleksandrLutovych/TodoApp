import React from "react";
import Button from "./UI/Button";
import classes from "./Todo.module.css";

export interface IProps {
  children: React.ReactNode;
  checked: any
}

const TodoTask = (props: IProps ) => {
  return (
    <div className={classes.task}>
      <div>
        <input type="radio" checked={props.checked} />
        <span>{props.children}</span>
      </div>

      <div>
        <Button>Edit</Button>
        <button style={{}}>🗑</button> 
      </div>
    </div>
  );
};

export default TodoTask;
