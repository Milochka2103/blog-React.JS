import { useRef} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "../../store/slices/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

import "./LoginPage.css";

export const LoginPage = () => {
  /* const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState(''); */

  /* var bcrypt = require('bcryptjs');

  const salt = bcrypt.genSaltSync(10);

  const passwordToSave = bcrypt.hashSync(userPassword, salt)

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value)
  }

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value)
  }

  const error = () => {
    message.error('Email or password is incorrect. Check, please, and try again');
  };
 */
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    /* const getUser = {
      email: userEmail,
      password: passwordToSave
    }
    if (validUser == 'true') { */
      dispatch(logIn())
    history.push("/");
   /*  }
    {error} */
  };

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <h1>Authorization</h1>
      
      <div>
        <input
          ref={loginRef}
          type="text"
          placeholder="Enter your email"
          name="login"
/*           value={userEmail}
          onChange={handleUserEmailChange} */
          required
        />
      </div>
      <div>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          name="password"
/*           value={userPassword}
          onChange={handleUserPasswordChange} */
          required
        />
      </div>
      <div>
        <button type="submit">Sign in</button>
      </div>
      <p>Don't have an account? {/* <Link to='/registration'>Registration</Link> */}</p>
    </form>
  );
};
