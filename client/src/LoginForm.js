import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function LoginForm({ values, handleChange, isSubmitting, touched, errors, handleSubmit }) {
    return (
      <div className="loginForm">
        <Form>
          <Field 
            type = "text" 
            name = "username" 
            placeholder = "username"
            autoComplete = "off"
          />
          <Field 
            type="password" 
            name="password" 
            placeholder = "password"
            autoComplete = "off"
          />
          <p>{touched.password && errors.password}</p>
          <button className="submit-button" disabled={isSubmitting}>
            Submit &rarr;
          </button>
          {isSubmitting && <p>loading</p>}
        </Form>
      </div>
    );
  }

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(1)
      .required(),
    password: Yup.string()
      .min(1, "Password must be minimum of one characters long")
      .required("Password required"),
  }),

  handleSubmit(values, formikBag) {
    formikBag.resetForm();
    formikBag.setSubmitting(true);
    console.log(values)
    axios.post("http://localhost:5000/api/register", values).then(res => {
      console.log(res);
      window.alert(`Welcome`);
      formikBag.setSubmitting(false);
    });
  }
})(LoginForm);

export default FormikLoginForm;