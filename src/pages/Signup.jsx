import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faApple,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import signupImg from '../assets/images/signup_bg-02.png';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    let endpoint = '';
    switch (role) {
      case 'admin':
        endpoint = 'http://localhost:3000/admins';
        break;
      case 'doctor':
        endpoint = 'http://localhost:3000/doctors';
        break;
      case 'patient':
        endpoint = 'http://localhost:3000/patients';
        break;
      default:
        setError('Invalid role selected.');
        return;
    }

    try {
      const newUserData = {
        name,
        email,
        username: email,
        password,
        role,
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserData),
      });

      if (!response.ok) {
        throw new Error('Failed to create account.');
      }

      const createdUser = await response.json();
      setSuccess(`Account created successfully for ${createdUser.name} as a ${createdUser.role}.`);
      
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (err) {
      console.error('Account creation error:', err);
      setError(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f0f4f8', padding: '20px' }}>
      <div className="card shadow-lg" style={{ borderRadius: '15px', maxWidth: '900px', width: '100%', overflow: 'hidden' }}>
        <div className="row g-0">
          <div className="col-md-6 p-5">
            <h2 className="card-title fw-bold mb-2">Create account</h2>
            <p className="card-subtitle text-muted mb-4">Enter details to create your account</p>
            <form onSubmit={handleCreateAccount}>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Password*</label>
                <div className="input-group">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    className="form-control"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="roleSelect" className="form-label">Role*</label>
                <select
                  className="form-select"
                  id="roleSelect"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn text-white w-100 mb-4"
                style={{
                  background: 'linear-gradient(to right, #8A63A5, #6C428E)',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '8px',
                }}
              >
                Create account
              </button>
              <p className="text-center text-muted mb-4">
                Already have an account?{' '}
                <a href="#" className="text-decoration-none text-primary" onClick={() => navigate('/')}>
                  Login
                </a>
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light border me-3 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                  <FontAwesomeIcon icon={faGoogle} size="lg" />
                </button>
                <button className="btn btn-light border me-3 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                  <FontAwesomeIcon icon={faApple} size="lg" />
                </button>
                <button className="btn btn-light border rounded-circle d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center p-4" style={{ backgroundColor: '#fdeedc', borderRadius: '0 15px 15px 0' }}>
            <div className="text-center">
              <img src={signupImg} alt="Abstract flower illustration" className="img-fluid" style={{ maxWidth: '300px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;