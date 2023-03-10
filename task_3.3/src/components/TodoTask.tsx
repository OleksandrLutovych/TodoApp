import Button from "./UI/Button";
import classes from "../styles/Todo.module.scss";
import { ITodoApi } from "../types/redux.types";
import React, { useState } from "react";
import { useAppDispatch } from "../reducers/hook";
import { removeTodo, completedTodo } from "../reducers/TodoReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export interface ITodoTaskProps extends ITodoApi {
  setEditState: (id: string, todoText: string) => void;
}

const TodoTask: React.FC<ITodoTaskProps> = (props): JSX.Element => {
  const { setEditState, id, completed, title } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [todoEditText, setTodoEditText] = useState(title);
  const dispatch = useAppDispatch();

  const editToggle = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEdit((prev) => !prev);
  };

  const handleBtnClick = (e: React.FormEvent) => {
    isEdit && setEditState(id, todoEditText);
    editToggle(e);
  };

  return (
    <div className={classes.task}>
      <div className={classes.todoItem__elements}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(completedTodo({ id }))}
        />
        {isEdit ? (
          <form onSubmit={handleBtnClick}>
            <input
              type="text"
              size={todoEditText.length}
              defaultValue={todoEditText}
              onChange={(e: React.ChangeEvent) => {
                const target = e.target as HTMLInputElement;
                setTodoEditText(target.value);
              }}
            />
          </form>
        ) : (
          <span className={classes.todoText}>{todoEditText}</span>
        )}
      </div>

      <div className={classes.todoItem__elements}>
        {isEdit ? (
          <Button onClick={handleBtnClick}>Enter</Button>
        ) : (
          // <Button onClick={editToggle}>Edit</Button>
          <FontAwesomeIcon icon={faPen} onClick={editToggle} className={classes.editBtn}/>
        )}

        <button
          className={classes.deleteBtn}
          onClick={() => dispatch(removeTodo({ id }))}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
