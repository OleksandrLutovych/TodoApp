import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

export interface IForm {
  title: string;
  body: string;
  date?: string
}
export interface IModalFormProps {
  btnText: string;
  formTitle: string;
  handleSubmit: UseFormHandleSubmit<IForm>;
  register: UseFormRegister<IForm>;
  submitForm: (data: IForm) => void;
  errors: Partial<FieldErrorsImpl<IForm>>;
  modalState: boolean;
  modalOpen: () => void;
  modalClose: () => void;
}
