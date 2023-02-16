/* eslint-disable no-undef */
import React from 'react';
import { Formik } from 'formik';
import axios from 'axios'

const Basic = () => {
  async function  postData(data)
  {
    console.log(typeof data)
    await axios.post("http://127.0.0.1:3001",
    data,
    {headers: { 'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    }
  },
  )
}
return (
  <div className='mt-10'>
    <h1>Fill the form to register</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting ,resetForm}) => {
        // console.log(JSON.stringify(values))
          postData(values)
          setSubmitting(false);
          resetForm({values:""})
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
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="border-2 border-slate-500 w-[30%]"
            
          />
          {errors.email && touched.email && errors.email}
          <br/>
          <p>Password</p>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className="border-2 border-slate-500 w-[30%]"
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting} className="bg-blue-600 w-[100px] mt-5 text-white p-2">
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);
      }

export default Basic;