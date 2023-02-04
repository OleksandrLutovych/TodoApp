import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "./Button";
import classes from "./Form.module.scss";
import { IModalFormProps } from "../../types/UITypes";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

const ModalForm = (props: IModalFormProps) => {
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
            <label className={classes.dateInput}>
              <input
                type="checkbox"
                style={{ marginRight: "10px" }}
                checked={checkboxState}
                onChange={() => setCheckboxState((prev) => !prev)}
              />
              Add date
            </label>
            <label htmlFor="">
              Title
              <input
                placeholder="e.g. Sunt aut facere repellat"
                {...register("title", {
                  required: true,
                })}
                style={errors.title && invalidAreaBorderColor}
              />
              {errors.title && (
                <p className={classes.validateMsg}>{errors.title.message}</p>
              )}
            </label>
            <label htmlFor="">Body</label>
            <input
              placeholder="e.g. Recusandae consequuntur expedita"
              {...register("body", {
                required: true,
              })}
              style={errors.body && invalidAreaBorderColor}
            />
            {errors.body && (
              <p className={classes.validateMsg}>{errors.body.message}</p>
            )}
            {checkboxState && (
              <label>
                Add post date
                <input type="date" {...register("date")} />
              </label>
            )}
            <input
              type="submit"
              value={"Create Post"}
              className={classes.submitBtn}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalForm;
