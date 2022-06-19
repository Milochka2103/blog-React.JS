import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../server/slices/auth";
import { clearMessage } from "../server/slices/message";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: '',
    password: '',
    fullname: '',
    phone: '',
    adress: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),

    password: Yup.string().test(
      "len",
      "The password must be between 6 and 20 characters.",
      (val) => val && val.toString().length >= 6 && val.toString().length <= 20
    )
    .required("This field is required!"),

    fullname: Yup.string().test(
      "len",
      "The fullname must be between 3 and 40 characters.",
      (val) => val && val.toString().length >= 3 && val.toString().length <= 40
    )
    .required("This field is required!"),

    phone: Yup.string().test(
      "len",
      "The fullname must be between 10 and 13 characters.",
      (val) => val && val.toString().length >= 10 && val.toString().length <= 13
    )
    .required("This field is required!"),

    adress: Yup.string().test(
      "len",
      "The fullname must be between 6 and 50 characters.",
      (val) => val && val.toString().length >= 6 && val.toString().length <= 50
    )
  });
};

const handleRegister = (formValue) => {
  const { email, password, fullname, phone, adress } = formValue;
  setSuccessful(false);
  dispatch(register({ email, password, fullname, phone, adress }))
    .unwrap()
    .then(() => {
      setSuccessful(true);
    })
    .catch(() => {
      setSuccessful(false);
    });

return (
  <div className="col-md-12 signup-form">
    <div className="card card-container">
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="profile-img"
        className="profile-img-card"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        <Form>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="fullname">Full name</label>
                <Field name="fullname" type="fullname" className="form-control" />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <Field name="phone" type="phone" className="form-control" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="adress">Adress</label>
                <Field name="adress" type="adress" className="form-control" />
                <ErrorMessage
                  name="adress"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}
        </Form>
      </Formik>
    </div>
    {message && (
      <div className="form-group">
        <div
          className={successful ? "alert alert-success" : "alert alert-danger"}
          role="alert"
        >
          {message}
        </div>
      </div>
    )}
  </div>
);
};
export default Register;
