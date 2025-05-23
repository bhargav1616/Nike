// pages/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import loginImg from '../assets/AirMaxBn8/1.jpeg';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src={loginImg} alt="Signup Visual" />
      </div>
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
