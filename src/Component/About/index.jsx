// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useQuery } from "react-query";
import { fetchData } from "../../services/user";
import { useSelector } from "react-redux";

const About = () => {
//   useQuery("fetchData", fetchData, {
//     refetchOnWindowFocus: false,
//     retry:3,
//     onSuccess: (res) => {
//       console.log(res);
//     },
//   });
const data=useSelector((state)=>{return state})
console.log(data,data.name)
  return (
    <div className="h-[100vh] flex justify-center flex-col">
      <h1 className="text-3xl">Your Account Details</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col w-[50%] p-2 leading-5">
            <label>Name</label>
            <Field
              type="name"
              name="name"
              className="border-gray-500 outline-none border-2 mt-2 p-2"
              value={data.UserData.name}
            />
            <label>Email</label>
            <Field
              type="email"
              name="email"
              className="border-gray-500 outline-none border-2 mt-2 p-2"
              value={data.UserData.email}
            />
            <label>Password</label>
            <Field
              type="password"
              name="password"
              className="border-gray-500 outline-none border-2 mt-2 p-2"
            />
            <label>Gender</label>
            <Field
              type="gender"
              name="gender"
              className="border-gray-500 outline-none border-2 mt-2 p-2"
            />
            <label>Phone Number</label>
            <Field
              type="phoneNumber"
              name="phoneNumber"
              className="border-gray-500 outline-none border-2 mt-2 p-2"
            />
            {/* <ErrorMessage name="email" component="div" /> */}
            {/* <ErrorMessage name="password" component="div" /> */}
            <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default About;
