import React, { useState, useEffect } from "react";
import "./Login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if both email and password are valid to enable login button
    if (email && password && password.length >= 6) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    if (email === "example@example.com" && password === "password123") {
      // Successful login logic
      alert("Login successful!");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
        
        <button type="submit" disabled={!isFormValid}>
          Login
        </button>

        <button type="btn" >
          SignUp
        </button>
    
        {errorMessage && <p>{errorMessage}</p>}

      </form>
      
    </div>
  );
};

export default LoginPage;
