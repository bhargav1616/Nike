// pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // We'll create this CSS file
import loginImg from '../assets/AirMaxBn8/1.jpeg';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src={loginImg} alt="Login Visual" />
      </div>
      <div className="auth-form">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
