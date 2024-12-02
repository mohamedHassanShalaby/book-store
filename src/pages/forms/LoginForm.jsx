import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  //Form Submit Handler
  function formSubmitHandler(e) {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");
    console.log({ email, password });
  }
  //Show Pass
  function showPassword() {
    setShowPass((prev) => !prev);
  }
  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <h1 className="form-title">Login to your account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPass ? "text" : "password"}
          placeholder="Password"
        />
        {showPass ? (
          <i
            onClick={showPassword}
            className="bi bi-eye-slash-fill show-password-icon"
          ></i>
        ) : (
          <i
            onClick={showPassword}
            className="bi bi-eye-fill show-password-icon"
          ></i>
        )}
        <button className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        Don,t have an account?{" "}
        <Link to={"/register"} className="form-link">
          Register
        </Link>
      </div>
    </div>
  );
};
