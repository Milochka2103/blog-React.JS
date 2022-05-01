import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "../../store/slices/auth";
import "./LoginPage.css";

export const LoginPage = () => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn())
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <h1>Authorization</h1>
      <div>
        <input
          ref={loginRef}
          type="text"
          placeholder="Enter your login"
          name="login"
          required
        />
      </div>
      <div>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </div>
      <div>
        <button type="submit">Sign in</button>
      </div>
    </form>
  );
};
