import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function LoginForm({ values, handleChange, isSubmitting, touched, errors, handleSubmit }) {
    // values: comes from mapPropsToValues
    // handleChange: pre-packaged changeHandler, functionality built into Field
    // isSubmitting: state of API call, needs to be coded. Good for loading spinners
    // touched: was element "touched"?
    // errors: When schema / Yup not followed
    // handleSubmit: pre-packaged submitHandler, functionality built into Form
    return (
      <div className="loginForm">
        <Form>
          <Field 
            type = "text" 
            name = "username" 
            placeholder = "username"
            autoComplete = "off"
            // Field has following functs built in 
            // value = {values.name}
            // onChange = {handleChange}
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
      //these end up as "values" up top
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(1)
      .required(),
    password: Yup.string()
      .min(6, "Password must be minimum of six characters long")
      .required("Password required"),
  }),

  handleSubmit(values, formikBag) {
    
  }
})(LoginForm);

export default FormikLoginForm;