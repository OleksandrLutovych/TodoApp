import * as yup from "yup";

export const postFormValidationSchema = yup.object().shape({
  title: yup.string().trim().required("Title field is required").min(5, 'Min length of title is 5'),
  body: yup.string().trim().required("Body field is required"),
});

export const todoValidationSchema = yup.object().shape({
  todo: yup.string().trim().required('Title field is required')
})
