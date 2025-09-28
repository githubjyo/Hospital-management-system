import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faFacebookF,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import signinImg from "../assets/images/signin_bg-01.png";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`http://localhost:3000/${userType}s`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data.');
      }
      const users = await response.json();
      
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Successful login, navigate based on userType
        if (userType === 'admin') {
          navigate('/admindashboard');
        } else if (userType === 'doctor') {
           navigate('/doctordashboard'); // Placeholder for future logic
        } else if (userType === 'patient') {
           navigate('/patientdashboard'); // Placeholder for future logic
        }
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again later.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

   const handleSignupClick = (e) => {
    e.preventDefault();
    navigate('/create-account');
  };

  return (
    <div className="signin-container">
      <div className="card signin-card">
        <div className="row g-0">
          <div className="col-md-6 p-5 signin-form-section">
            <h2 className="card-title fw-bold mb-2">Sign in</h2>
            <p className="card-subtitle text-muted mb-4">
              Enter your credentials to log in
            </p>
            <div className="d-flex mb-4">
              <button 
                className={`btn me-2 ${userType === 'admin' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setUserType('admin')}
              >
                Admin
              </button>
              <button 
                className={`btn me-2 ${userType === 'doctor' ? 'btn-warning' : 'btn-outline-warning'}`}
                onClick={() => setUserType('doctor')}
              >
                Doctor
              </button>
              <button 
                className={`btn me-2 ${userType === 'patient' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setUserType('patient')}
              >
                Patient
              </button>
            </div>
            <form onSubmit={handleLogin}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="emailInput"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Password *
                </label>
                <div className="input-group">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    className="form-control"
                    id="passwordInput"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                    />
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMeCheck"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="rememberMeCheck"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-decoration-none text-primary">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" className="btn btn-login w-100 mb-4">
                Login
              </button>
              <p className="text-center text-muted mb-4">
                Don't have an account?{' '}
                <a href="#" className="text-decoration-none text-primary" onClick={handleSignupClick}>
                  Sign up
                </a>
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-social me-3">
                  <FontAwesomeIcon icon={faGoogle} size="lg" />
                </button>
                <button className="btn btn-social me-3">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </button>
                <button className="btn btn-social">
                  <FontAwesomeIcon icon={faApple} size="lg" />
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center p-4 signin-image-section">
            <div className="text-center">
              <img
                src={signinImg}
                alt="Sailboat Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;