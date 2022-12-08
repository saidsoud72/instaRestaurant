import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap'


function LoginForm({ onLogin, setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
    <div className="hoe">
      <div className='w-100' style={{ maxWidth: "370px" }}>
        <h2 className="header">Welcome back, Log in to get started</h2>
        <Form onSubmit={handleSubmit}>
        {errors.map((err) => (
          <Alert variant="danger">{err}</Alert>
        ))}
        <Form.Group id="username">
        <Form.Label>Enter Username*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        </Form.Group>

      <Form.Group id="password">
        <Form.Label>Enter Password*</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </Form.Group>
      <br />
      <Button className='w-100' id="primary-btn" type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
        </Form>
      </div>

      <div className="divider">
        <hr />
      </div>

      <div className="twinsies">
          <h2>Sign Up</h2>
          <p>Join our fun community we share and network</p>

          <Button id="transparentbtn" onClick={() => setShowLogin(false)}>Signup</Button>

      </div>
      </div>


      </>
  );
}

export default LoginForm;
