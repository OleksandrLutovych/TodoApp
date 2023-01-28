import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "./Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./Form.module.scss";
import { useAppDispatch } from "../../reducers/hook";
import { addPosts } from "../../reducers/PostsReducer";

interface IModalProps {
  btnText: string;
  formTitle: string;
}
interface IForm {
  title: string;
  body: string;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};
const ModalForm = (props: IModalProps) => {
  const dispatch = useAppDispatch();
  const { formTitle } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const formOnSubmit = (data: IForm) => {
    dispatch(addPosts(data));
    reset();
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>{props.btnText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit(formOnSubmit)}
            className={classes.formBox}
          >
            <span className={classes.formTitle}>{formTitle}</span>
            <label htmlFor="">Title</label>
            <input
              placeholder="e.g. Sunt aut facere repellat"
              {...register("title", {
                required: true,
                validate: (value) => value.trim().length > 0,
                setValueAs: (v) => v.trim(),
              })}
            />

            {errors.title && (
              <span className={classes.validateMsg}>
                This field is required
              </span>
            )}
            <label htmlFor="">Body</label>
            <input
              placeholder="e.g. Recusandae consequuntur expedita"
              {...register("body", {
                required: true,
                validate: (value) => value.trim().length > 0,
                setValueAs: (v) => v.trim(),
              })}
            />
            {errors.body && (
              <span className={classes.validateMsg}>
                This field is required
              </span>
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
