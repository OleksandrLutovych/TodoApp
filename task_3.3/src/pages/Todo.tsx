import React, { useEffect, useState } from "react";
import TodoTask from "../components/TodoTask";
import Button from "../components/UI/Button";
import classes from "../styles/Todo.module.scss";
import { useAppSelector, useAppDispatch } from "../reducers/hook";
import { addTodo, editTodoState, fetchTodos } from "../reducers/TodoReducer";
import { ITodoApi } from "../types/redux.types";
import ModalForm from "../components/UI/ModalForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoValidationSchema } from "../validation/formValidationSchema";

type ITodoForm = {
  title: string
}

const Todo: React.FC = () => {
  const todo = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();

  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const createTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
    }
    setTodoText("");
  };

  const setEditState = (id: string, text: string): void => {
    const [todoEditItem] = todo.filter((item) => item.id === id);
    const editTodo = [text, todoEditItem];
    dispatch(editTodoState(editTodo));
  };

  const [modalState, setModalState] = useState(false);
  const modalOpen = () => setModalState(true);
  const modalClose = () => {
    setModalState(false);
    reset();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ITodoForm>({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(todoValidationSchema),
  });

  const submitForm = (data: ITodoForm) => {
    console.log(data);
    // dispatch(addfetchPosts(data));
    reset();
    modalClose();
  };

  return (
    <>
      <div className={classes.pageHeader}>
        <h2>Todo List</h2>
        <Button>+ Add New Todo</Button>
      </div>
      <form className={classes.form}>
        <input
          type="text"
          placeholder="Create task"
          className={classes.input}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <div>
          <Button onClick={createTodo}>Create task</Button>
        </div>
      </form>
      <div className={classes.todoContainer}>
        <h3>Tasks</h3>
        {todo.map((item: ITodoApi) => (
          <TodoTask
            key={item.id}
            completed={item.completed && true}
            title={item.title}
            id={item.id}
            setEditState={setEditState}
          />
        ))}
      </div>
      <div className={classes.todoFooter}>
        <p>{todo.length} items</p>
        {/* <ModalForm
          modalOpen={modalOpen}
          modalClose={modalClose}
          modalState={modalState}
          btnText="+ Add New Todo"
          formTitle="Add New Todo"
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          register={register}
          errors={errors}
        /> */}
      </div>
    </>
  );
};

export default Todo;
