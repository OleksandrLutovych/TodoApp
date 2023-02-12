import React, { useEffect, useState } from "react";
import TodoTask from "../components/TodoTask";
import classes from "../styles/Todo.module.scss";
import { useAppSelector, useAppDispatch } from "../reducers/hook";
import { addTodo, editTodoState, fetchTodos } from "../reducers/TodoReducer";
import { ITodoApi } from "../types/redux.types";
import TodoForm from "../components/UI/TodoForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ITodoForm } from "../types/UITypes";
import { todoValidationSchema } from "../validation/formValidationSchema";

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
      todo: "",
    },
    resolver: yupResolver(todoValidationSchema),
  });

  const submitForm = (data: ITodoForm) => {
    console.log(data);
    dispatch(addTodo(data.todo));
    reset();
    modalClose();
  };

  return (
    <>
      <div className={classes.pageHeader}>
        <h2>Todo List</h2>
        <TodoForm
          modalOpen={modalOpen}
          modalClose={modalClose}
          modalState={modalState}
          btnText="+ Add New Todo"
          formTitle="Add New Task"
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          register={register}
          errors={errors}
        />
      </div>
      <div className={classes.todoPage}>
        <div className={classes.todoContainer}>
          <h3>Active</h3>
          {todo.map(
            (item: ITodoApi) =>
              !item.completed && (
                <TodoTask
                  key={item.id}
                  completed={item.completed && true}
                  title={item.title}
                  id={item.id}
                  setEditState={setEditState}
                />
              )
          )}
        </div>
        <div className={classes.todoContainer}>
          <h3>Done</h3>
          {todo.map(
            (item: ITodoApi) =>
              item.completed && (
                <TodoTask
                  key={item.id}
                  completed={item.completed}
                  title={item.title}
                  id={item.id}
                  setEditState={setEditState}
                />
              )
          )}
        </div>
      </div>
      <div className={classes.todoFooter}>
        <p>{todo.length} items</p>
      </div>
    </>
  );
};

export default Todo;
