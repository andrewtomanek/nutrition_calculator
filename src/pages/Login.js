import React, { useState, useCallback, useContext, useEffect } from "react";
import { withRouter } from "react-router";
import app from "../auth/base.js";
import { AuthContext } from "../auth/Auth.js";
import validateAuth from "../auth/validateAuth";
import Navigation from "../components/Navigation";

const Login = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const logIn = async event => {
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("authenticated!", values.email, values.password);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [history, currentUser]);

  const handleLogin = event => {
    event.preventDefault();
    setSubmitting(true);
    logIn(event);
  };

  const handleChange = useCallback(
    event => {
      const validationErrors = validateAuth(values);
      setErrors(validationErrors);
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    },
    [errors, isSubmitting]
  );

  const handleBlur = () => {
    const validationErrors = validateAuth(values);
    setErrors(validationErrors);
  };

  return (
    <div className="app">
      <Navigation />
      <form className="login__form" onSubmit={handleLogin}>
        <h1 className="login__title">Log in</h1>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
          className={(errors.email && "error__input") || "login__input"}
          autoComplete="off"
          placeholder="E-mail"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className={(errors.password && "error__input") || "login__input"}
          name="password"
          type="password"
          placeholder="Heslo"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <button
          className="login__button"
          disabled={
            !(
              Object.keys(errors).length === 0 &&
              !(values.email === "" && values.password === "")
            )
          }
          type="submit"
        >
          Přihlásit
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
