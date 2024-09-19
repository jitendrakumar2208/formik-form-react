import React from "react";
import user from "./assets/user.jpg";
import { useFormik } from "formik";
import * as Yup from "yup"; // Make sure you import Yup for the validation schema

// Define the validation schema
const signupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be at most 25 characters")
    .required("Enter your name"),
  email: Yup.string().email("Enter a valid email").required("Enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Enter your password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const App = () => {
  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className=" flex items-center justify-center">
      <div className="flex w-[60%] py-20  gap-2">
        {/* Left Side */}
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-1/2 flex flex-col justify-between gap-2 shadow-md"
        >
          <div className="mx-3">
            <div className="text-2xl font-medium text-gray-950 text-center mt-3">
              <p>Welcome</p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Name"
                className="w-full border border-gray-700 px-3 py-1 outline-none rounded-md bg-gray-100 text-base font-mono mt-2"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-red-700 text-xs">{errors.name}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4 my-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className="w-full border border-gray-700 px-3 py-1 outline-none rounded-md bg-gray-100 text-base font-mono"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-700 text-xs">{errors.email}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                className="w-full border border-gray-700 px-3 py-1 outline-none rounded-md bg-gray-100 text-base font-mono"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="text-red-700 text-xs">{errors.password}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
                autoComplete="off"
                className="w-full border border-gray-700 px-3 py-1 outline-none rounded-md bg-gray-100 text-base font-mono"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-red-700 text-xs">
                  {errors.confirm_password}
                </p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md text-white font-mono bg-green-950 py-2 text-center"
          >
            Signup
          </button>
        </form>
        {/* Right Side */}
        <div className=" hidden w-1/2 sm:flex items-center justify-center">
          <img className="" src={user} alt="user-img" />
        </div>
      </div>
    </div>
  );
};

export default App;
