import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "./Button";
import classes from "./Form.module.scss";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

const TodoForm = (props: any) => {
  const {
    formTitle,
    handleSubmit,
    register,
    errors,
    submitForm,
    modalState,
    modalOpen,
    modalClose,
  } = props;

  const [checkboxState, setCheckboxState] = useState(false);
  const invalidAreaBorderColor = {
    border: "1px solid red",
  };

  return (
    <div>
      <Button onClick={modalOpen}>{props.btnText}</Button>
      <Modal
        open={modalState}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(submitForm)} className={classes.formBox}>
            <span className={classes.formTitle}>{formTitle}</span>
            {/* <label className={classes.dateInput}>
              <input
                type="checkbox"
                style={{ marginRight: "10px" }}
                checked={checkboxState}
                onChange={() => setCheckboxState((prev) => !prev)}
              />
              Add date
            </label> */}
            <label htmlFor="">
              Task name
              <input
                placeholder="e.g. Sunt aut facere repellat"
                {...register("todo", {
                //   required: true,
                })}
                style={errors.title && invalidAreaBorderColor}
              />
              {errors.title && (
                <p className={classes.validateMsg}>{errors.title.message}</p>
              )}
            </label>
            {/* {checkboxState && (
              <label>
                Add post date
                <input type="date" {...register("date")} />
              </label>
            )} */}
            <input
              type="submit"
              value={"Create Todo"}
              className={classes.submitBtn}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default TodoForm;
