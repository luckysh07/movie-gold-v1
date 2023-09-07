import React, { useEffect, useState } from 'react';
import './Login.css'; // Import the CSS file for custom styles
import { generateStars } from '../stars/twinklingStars';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Call the generateStars function when the component mounts
    generateStars('.twinkling-stars', 500); // Adjust the number of stars as needed
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container-wrapper">
      <div className="twinkling-stars"></div>
      <div className="login-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
