/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../../redux/actions";
import {  useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const isLogIn = useSelector((state) => { return state.UserData.isLogIn })
  useEffect(() => {
    if(isLogIn){
      navigate('/')
    }
},[isLogIn])
  const [userData, setUserData] = useState({ email: '', name: '', isLogIn: false })
  const [error, setError] = useState();
  async function postData(data) {
    await axios
      .post("http://127.0.0.1:3001/logIn", { data }, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
        }
      })
      .then((res) => {
        if(res.data.message==='user exist'){
          dispatch(LOG_IN({email:data.email, name:res.data.name,isLogIn:true}))
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setError('password is wrong')
        }
        else if (err.response.status === 404) {
          setError('user does not exist')
        }
      });
    setTimeout(() => {
      setError('')
    }, 1000);
  }
  useEffect(() => {
    // console.log('useffect called')
    if (userData.isLogIn) {
      // console.log(userData)
      postData(userData)
    }
  }, [userData])
  return (
    <div className="!mt-10 poppins bg-whiteGray p-4 m-auto w-[50%]">
      <h1 className="text-xl text-center">Log In</h1>
      <Formik
        initialValues={{ email: "", name: '', isLogIn: false }}
        validate={(values) => {
          values.isLogIn = true
          const errors = {};
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
          setUserData({ ...values, isLogIn: true })
          // postData(values);
          setSubmitting(false);
          // resetForm({ values: "" });
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
            className="flex flex-col items-center mt-10 "
          >
            <div className="w-[100%]">
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

export default LogIn;
