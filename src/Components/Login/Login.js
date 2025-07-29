import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    // Extract username from email (before '@')
    const username = email.split('@')[0];

    // Store in sessionStorage
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('username', username);

    setError('');
    alert('Login successful!');
    navigate('/');
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>

        <div className="login-text">
          Are you a new member?{' '}
          <span>
            <a href="/signup" style={{ color: '#2190FF' }}>Sign Up Here</a>
          </span>
        </div>

        <br />

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div style={{ color: 'red', fontSize: '0.9rem' }}>{error}</div>}

            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                Login
              </button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light"
                onClick={() => {
                  setEmail('');
                  setPassword('');
                  setError('');
                }}
              >
                Reset
              </button>
            </div>

            <br />

            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
