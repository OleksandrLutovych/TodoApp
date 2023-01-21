import Button from "./UI/Button";
import classes from "./Todo.module.scss";
import { ITodoApi } from "../types/redux.types";
import React, { useState } from "react";

export interface ITodoTaskProps extends ITodoApi {
  deleteTodo: (id: string) => void;
  setEditState: (id: string, todoText: string) => void;
}

const TodoTask: React.FC<ITodoTaskProps> = (props): JSX.Element => {
  const { deleteTodo, setEditState, id, completed, title } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [todoText, setTodoText] = useState(title);
  // const [complete, setComplete] = useState(false);

  const editToggle = (e: React.FormEvent) => {
    e.preventDefault();

    setIsEdit((prev) => !prev);
  };

  const handleBtnClick = (e: React.FormEvent) => {
    isEdit && setEditState(id, todoText);
    editToggle(e);
  };

  return (
    <div className={classes.task}>
      <div className={classes.todoItem__elements}>
        <input
          type="checkbox"
          defaultChecked={completed}
          // onChange={() => setComplete((prev) => !prev)}
        />
        {isEdit ? (
          <form onSubmit={handleBtnClick}>
            <input
              type="text"
              size={todoText.length}
              defaultValue={todoText}
              onChange={(e: React.ChangeEvent) => {
                const target = e.target as HTMLInputElement;
                setTodoText(target.value);
              }}
            />
          </form>
        ) : (
          <span>{todoText}</span>
        )}
      </div>

      <div className={classes.todoItem__elements}>
        {isEdit ? (
          <Button onClick={handleBtnClick}>Enter</Button>
        ) : (
          <Button onClick={editToggle}>Edit</Button>
        )}

        <button className={classes.deleteBtn} onClick={() => deleteTodo(id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
