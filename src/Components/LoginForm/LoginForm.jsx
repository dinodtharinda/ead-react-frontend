import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { postData } from "../API/HttpService";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    postData("api/v1/users/login", { email: email, password: password }).then(
      (res) => {
        console.log(res);
        // if(res[""])
      }
    );
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forget">
          <label htmlFor="">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forget Password?</a>
        </div>
        <button type="submit" onClick={login}>
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};


export default LoginForm;