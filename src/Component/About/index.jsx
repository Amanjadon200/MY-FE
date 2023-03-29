// Render Prop
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useQuery } from "react-query";
import { fetchData } from "../../services/user";
import { useSelector } from "react-redux";
import Dropdown from "../shared/Dropdown";
import axios from "axios";

const About = () => {
  //   useQuery("fetchData", fetchData, {
  //     refetchOnWindowFocus: false,
  //     retry:3,
  //     onSuccess: (res) => {
  //       console.log(res);
  //     },
  //   });
  const data = useSelector((state) => {
    return state;
  });
  const arr = ["Male", "Female", "not prefer to say"];
  const [aboutData, setAboutData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    phoneNumber: "",
  });
  const email = useSelector((state) => {
    return state.UserData.email;
  });

  const editHandler = async () => {
    await axios.post(
      "http://127.0.0.1:3001/updateUser",
      { aboutData },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
  };
  const getData = async () => {
    const data = await axios.get(
      "http://127.0.0.1:3001/fetchUser?_id=" + email
    );
    setAboutData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(aboutData, "((");
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="h-[100vh] flex justify-center flex-col">
      <h1 className="text-3xl">Your Account Details</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: "",
          phoneNumber: "",
        }}
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
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="flex flex-col w-[50%] p-2 leading-5">
            <label>Name</label>
            <Field
              disabled={!isEdit }
              type="name"
              name="name"
              className={`border-gray-500 outline-none border-2 mt-2 p-2 ${
                !isEdit ? "!bg-Gainsboro  " : ""}`}
              value={aboutData.name}
              onChange={(e) => {
                setAboutData({ ...aboutData, name: e.target.value });
              }}
            />
            <label>Email</label>
            <Field
              disabled
              type="email"
              name="email"
              className="border-gray-500 outline-none border-2 mt-2 p-2 !bg-Gainsboro"
              value={aboutData.email}
            />
            <label>Password</label>
            <Field
              disabled={!isEdit}
              type="password"
              name="password"
              className={`border-gray-500 outline-none border-2 mt-2 p-2 ${
                !isEdit ? "!bg-Gainsboro  " : ""
              }`}
              value={aboutData.password}
              onChange={(e) => {
                setAboutData({ ...aboutData, password: e.target.value });
              }}
            />
            <label>Gender</label>
            <Dropdown
              arr={arr}
              formData={aboutData}
              setFormData={setAboutData}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
            />
            <label>Phone Number</label>
            <Field
              disabled={!isEdit}
              type="phoneNumber"
              name="phoneNumber"
              className={`border-gray-500 outline-none border-2 mt-2 p-2 ${
                !isEdit ? "!bg-Gainsboro  " : ""
              }`}
              value={aboutData.phoneNumber}
              onChange={(e) => {
                setAboutData({ ...aboutData, phoneNumber: e.target.value });
              }}
            />
            {/* <ErrorMessage name="email" component="div" /> */}
            {/* <ErrorMessage name="password" component="div" /> */}
            <div className="flex justify-between mt-2">
            <button
              className="p-2 bg-darkGray w-[25%] text-white"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </button>
            <button
              type="submit"
              className="p-2 bg-darkGray w-[25%] text-white"
              onClick={() => {
                editHandler();
                setIsEdit(false);
              }}
            >
              Submit
            </button>


            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default About;
