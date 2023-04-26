/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LOG_OUT } from "../redux/actions";
import { useDispatch,useSelector } from "react-redux";

const Register = () => {
  const isLogIn = useSelector((state) => { return state.UserData.isLogIn })
  const navigate = useNavigate();
  const [error, setError] = useState();
  const dispatch=useDispatch()
  async function postData(data) {
    await axios
      .post("http://127.0.0.1:3001/register", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        if (res.data.error === "user already exists") {
          setTimeout(() => {
            navigate("/logIn");
          }, 1000);
        }
        if(res.data.acknowledged){
          navigate("/logIn");
        }
        setError(res.data.error);
      })
      .catch((err) => {});
  }

useEffect(()=>{
  if(isLogIn)
    dispatch(LOG_OUT())
},[isLogIn])
  return (
    <div className="!mt-[2.5vh] poppins bg-whiteGray p-4 m-auto w-[50%] h-[87.5vh]">
      <h1 className="text-xl text-center">Fill the form to register</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "please enter your name";
          }
          else if (values.name.length>26) {
            errors.name = "name should be less than or equal to 26";
          }
          if (values.name)
            if (!values.email) {
              errors.email = "Please enter your email";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
          if (!values.password) {
            errors.password = "Please provide your password ";
          } else if (!(values.password.length >= 8)) {
            errors.password = "Password must be greater or equal to 8";
          }
          return errors;
        }}
        
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // console.log(JSON.stringify(values))
          postData(values);
          setSubmitting(false);
          resetForm({ values: "" });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mt-[2.5vh] "
          >
            <div className="w-[100%]">
              <div className="h-20 w-full flex flex-col items-center justify-center">
                <p className="">Name</p>
                <input
                  type="name"
                  name="name"
                  onChange={(e) => {
                    // console.log(e.target.value)
                    if (
                      !(
                        e.target.value.charCodeAt(e.target.value.length - 1) >=
                          48 &&
                        e.target.value.charCodeAt(e.target.value.length - 1) <=
                          57
                      )
                    ) {
                      handleChange(e);
                    }
                  }}
                  onBlur={handleBlur}
                  value={values.name}
                  className="border-2 border-slate-500 w-[40%] p-1 outline-none"
                />
                <p className="text-red-600 min-h-[30px]">
                  {errors.name && touched.name && errors.name}
                </p>
              </div>
              <br />
              <div className="h-20 w-full flex flex-col items-center justify-center">
                <p className="">Email Address</p>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="border-2 border-slate-500 w-[40%] p-1 outline-none"
                />
                <p className="text-red-600 min-h-[30px]">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <br />
              <div className="h-20 w-full flex flex-col items-center justify-center">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="border-2 border-slate-500 w-[40%] p-1 outline-none"
                />
                <p className="text-red-600 min-h-[30px]">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <p className="text-red-600 min-h-[30px] text-center">
                {error !== "" && error}
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 w-[100px] mt-2 text-white p-2"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
