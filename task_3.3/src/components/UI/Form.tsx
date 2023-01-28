import React from "react";
import { useForm } from "react-hook-form";
import classes from "./styles/Form.module.scss";

interface IFormProps {
  handleClose: () => void
}
interface IForm {
  title: string,
  body: string
}

const Form = (props: IFormProps) => {
  const { handleClose } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();
  const formOnSubmit = (data: IForm) => {
    console.log(data);
    handleClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formOnSubmit)} className={classes.formBox}>
        <span className={classes.formTitle}>Add New Post</span>
        <label htmlFor="">Title</label>
        <input
          placeholder="e.g. Sunt aut facere repellat"
          {...register("title", { required: true })}
        />
        {errors.title && <span className={classes.validateMsg}>This field is required</span>}
        <label htmlFor="">Body</label>
        <input
          placeholder="e.g. Recusandae consequuntur expedita"
          {...register("body", { required: true })}
        />
        {errors.body && <span className={classes.validateMsg}>This field is required</span>}
        <input
          type="submit"
          value={"Create Post"}
          className={classes.submitBtn}
        />
      </form>
    </div>
  );
};

export default Form;
