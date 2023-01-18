import Button from "./UI/Button";
import classes from "./Todo.module.scss";
import { ITodoApi } from "../types/redux.types";
import { useState } from "react";

export interface ITodoTaskProps extends ITodoApi {
  deleteTodo: (id: string) => void;
  inputValue: string;
}

const TodoTask: React.FC<ITodoTaskProps> = (props): JSX.Element => {
  const { deleteTodo, id, completed, title, inputValue } = props;

  const [isEdit, setIsEdit] = useState(false);

  const editToggle = (e: React.MouseEvent) => {
    setIsEdit((prev) => !prev);
  };

  return (
    <div className={classes.task}>
      <div className={classes.todoItem__elements}>
        <input type="checkbox" defaultChecked={completed} onChange={()=> console.log('change the complete')} />
        {isEdit ? (
          <textarea
            defaultValue={inputValue}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        ) : (
          <span>{title}</span>
        )}
      </div>

      <div className={classes.todoItem__elements}>
        {isEdit ? (
          <Button onClick={editToggle}>Enter</Button>
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
