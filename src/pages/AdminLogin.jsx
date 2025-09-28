// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import {
//   faGoogle,
//   faFacebookF,
//   faApple,
// } from '@fortawesome/free-brands-svg-icons';

// const AdminLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear any previous errors

//     try {
//       // Fetch admin data from the json-server API
//       const response = await fetch('http://localhost:3000/admins');
//       if (!response.ok) {
//         throw new Error('Failed to fetch admin data.');
//       }
//       const admins = await response.json();
      
//       // Find the admin user with the matching username
//       const adminUser = admins.find(
//         (admin) => admin.username === username
//       );

//       // Check if user exists and the password matches
//       if (adminUser && adminUser.password === password) {
//         // Successful login, navigate to the dashboard
//         navigate('/admindashboard');
//       } else {
//         // Failed login, show an error message
//         setError('Invalid username or password.');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className="signin-container">
//       <div className="card signin-card">
//         <div className="row g-0">
//           <div className="col-md-6 p-5 signin-form-section">
//             <h2 className="card-title fw-bold mb-2">Sign in</h2>
//             <p className="card-subtitle text-muted mb-4">
//               Enter your credentials to log in
//             </p>
//             <div className="d-flex mb-4">
//               <button className="btn btn-success me-2">Admin</button>
//             </div>
//             <form onSubmit={handleLogin}>
//               {error && <div className="alert alert-danger">{error}</div>}
//               <div className="mb-3">
//                 <label htmlFor="usernameInput" className="form-label">
//                   Username *
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="usernameInput"
//                   placeholder="admin"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="passwordInput" className="form-label">
//                   Password *
//                 </label>
//                 <div className="input-group">
//                   <input
//                     type={passwordVisible ? 'text' : 'password'}
//                     className="form-control"
//                     id="passwordInput"
//                     placeholder="••••••••"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <button
//                     className="btn btn-outline-secondary"
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                   >
//                     <FontAwesomeIcon
//                       icon={passwordVisible ? faEyeSlash : faEye}
//                     />
//                   </button>
//                 </div>
//               </div>
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="rememberMeCheck"
//                   />
//                   <label
//                     className="form-check-label text-muted"
//                     htmlFor="rememberMeCheck"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//                 <a href="#" className="text-decoration-none text-primary">
//                   Forgot Password?
//                 </a>
//               </div>
//               <button type="submit" className="btn btn-login w-100 mb-4">
//                 Login
//               </button>
//               <p className="text-center text-muted mb-4">
//                 Don't have an account?{' '}
//                 <a href="#" className="text-decoration-none text-primary">
//                   Sign up
//                 </a>
//               </p>
//               <div className="d-flex justify-content-center">
//                 <button className="btn btn-social me-3">
//                   <FontAwesomeIcon icon={faGoogle} size="lg" />
//                 </button>
//                 <button className="btn btn-social me-3">
//                   <FontAwesomeIcon icon={faFacebookF} size="lg" />
//                 </button>
//                 <button className="btn btn-social">
//                   <FontAwesomeIcon icon={faApple} size="lg" />
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center p-4 signin-image-section">
//             <div className="text-center">
//               <img
//                 src="https://via.placeholder.com/300x200/fdeedc/fdeedc?text=Sailboat+Illustration"
//                 alt="Sailboat Illustration"
//                 className="img-fluid"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;