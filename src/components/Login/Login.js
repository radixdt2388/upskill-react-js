import React, { useState } from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:3002/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });
    if (response) {
      alert(response.message);
      setToken(response.token);
      return <Navigate to="/dashboard" />;
    }
  };

  return (
    <section className="vh-100 login-style">
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
