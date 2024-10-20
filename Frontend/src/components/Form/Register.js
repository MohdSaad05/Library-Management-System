import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "yup-phone";
import "./Register.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/user_action";

const signInSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name is too short - should be 3 chars minimum")
    .max(15, "Name is too long - should be 15 chars maximum"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
  branch: Yup.string().required("Branch is required"),
  roll_no: Yup.string().required("Roll No is required"),
  year: Yup.number().required("Admission Year is required").positive().integer(),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  branch: "",
  roll_no: "",
  year: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-12 register-container">
      <div className="col-md-5 m-auto">
        <div className="heading-container">
         
         <h1>Start Your Journey with Us</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(registerUser(values));
            resetForm();
          }}
        >
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            return (
              <div className="container">
                <Form>
                  <div className="form-row">
                    <label htmlFor="name">Your Name Here</label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className={
                        errors.name && touched.name ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="email">Your Email Here</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="password">Your Password Here</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={
                        errors.password && touched.password
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="branch">Your Branch</label>
                    <Field
                      type="text"
                      name="branch"
                      id="branch"
                      className={
                        errors.branch && touched.branch ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="branch"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="roll_no">Your Roll Number</label>
                    <Field
                      type="text"
                      name="roll_no"
                      id="roll_no"
                      className={
                        errors.roll_no && touched.roll_no ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="roll_no"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="year">Admission Year</label>
                    <Field
                      type="number"
                      name="year"
                      id="year"
                      className={
                        errors.year && touched.year ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="year"
                      component="span"
                      className="error"
                    />
                  </div>

                  <button
                    type="submit"
                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                    disabled={!(dirty && isValid)}
                  >
                    Sign Up
                  </button>
                </Form>
                <div style={{ marginTop: "10px", marginLeft: "68px"}}>
                  <Link
                    to="/login"
                    style={{
                      fontFamily: "sans-serif",
                      color: "black",
                      textDecoration: "none",
                      fontSize: "20px",
                    }}
                  >
                    Already have an account?{" "}
                    <span style={{ color: "blue", cursor: "pointer" }}>
                      Log in here.
                    </span>
                  </Link>
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;
