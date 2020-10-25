import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Must include name'),
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters long.")
    .required("Password is required"),
})

export default formSchema