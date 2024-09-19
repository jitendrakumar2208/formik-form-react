import * as Yup from "yup";

const signupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("enter your name"),
  email: Yup.string().email().required("enter your email"),
  password: Yup.string()
    .min(8)
    .max(20)
    .required("enter your password")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default signupSchema;
