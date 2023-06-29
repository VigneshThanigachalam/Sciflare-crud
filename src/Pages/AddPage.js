import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { MetaData } from "../Components/MetaData";
import { CustomInput } from "../Components/CustomInput";

export const AddPage = () => {
  const base_url = "http://localhost:4000/api";
  const navigate = useNavigate();
  const [user, setuser] = useState();
  let [loading, setLoading] = useState(true);

  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Please fill the name"),
    age: Yup.number()
      .positive()
      .typeError("Please enter a valid number")
      .required("Please fill the Age"),
  });
  return (
    <>
      <MetaData title="Add-User" />
      <div className="row justify-content-center">
        <div className="col-6">
          <Formik
            initialValues={{
              name: "",
              age: "",
            }}
            validationSchema={signupSchema}
            onSubmit={(values, { resetForm }) => {
              toast.loading("Please wait", {
                progressClassName: "success-progress-bar",
                toastId: 2,
              });
              const postURL = `${base_url}/users/add`;
              fetch(postURL, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  // We should keep the fields consistent for managing this data later
                  name: values.name,
                  age: values.age,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.message === "Created") {
                    resetForm();
                    toast.update(2, {
                      render: "successfully Added",
                      type: "success",
                      hideProgressBar: false,
                      autoClose: 1000,
                      isLoading: false,
                    });
                    navigate("/");
                  } else {
                    toast.update(2, {
                      render: data.message,
                      type: "warning",
                      hideProgressBar: false,
                      autoClose: 5000,
                      isLoading: false,
                    });
                  }
                })
                .catch((err) => {
                  toast.update(2, {
                    render: "Failed to fetch",
                    type: "error",
                    hideProgressBar: false,
                    autoClose: 5000,
                    isLoading: false,
                  });
                });
            }}
          >
            {({ errors, touched }) => (
              <Form className="d-flex flex-column gap-15 py-3">
                <div className="auth-card w-75 mx-auto">
                  <h3 className="text-center">Add User</h3>
                  <CustomInput
                    name="name"
                    placeholder="user name"
                    touchedName={touched.name}
                    errorName={errors.name}
                  />
                  <CustomInput
                    name="age"
                    placeholder="user age"
                    touchedName={touched.age}
                    errorName={errors.age}
                  />
                  <button
                    type="submit"
                    className="btn btn-light w-100 mb-2"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn btn-light w-100"
                    data-bs-dismiss="modal"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
