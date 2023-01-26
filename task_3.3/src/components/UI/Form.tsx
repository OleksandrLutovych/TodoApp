import React from "react";
import { useForm } from "react-hook-form";
import classes from './Form.module.scss'

const Form = (props: any) => {
    const {handleClose } = props
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formOnSubmit = (data: any) => {
    console.log(data);
    handleClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formOnSubmit)} className={classes.formBox}>
        <span className={classes.formTitle}>Add New Post</span>
        <label htmlFor="">Title</label>
        <input placeholder="e.g. Sunt aut facere repellat" {...register("title")} />
        <label htmlFor="">Body</label>
        <input
          placeholder="e.g. Recusandae consequuntur expedita"
          {...register("body", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value={'Create Post'} className={classes.submitBtn}/>
      </form>
    </div>
  );
};

export default Form;
