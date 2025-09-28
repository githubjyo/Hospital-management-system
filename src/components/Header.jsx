import React, { useState } from "react";
import { FaBell, FaCog } from "react-icons/fa";
import userImg from "../assets/images/user-01.jpg"; // <-- your user image path
import "./Header.css"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
   const navigate = useNavigate();
  // Mock User Data
const MOCK_USER = {
    name: "John Doe",
    imageUrl: {userImg} // Placeholder Image
};
    // State to toggle the dropdown
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        // Implement your actual logout logic here (e.g., clearing tokens, redirecting)
        
        navigate('/'); // Navigate to the '/about' path
        setIsOpen(false); // Close dropdown after action
    };
  return (
    <>
    <nav className="navbar navbar-light bg-light px-3">
      <div className="d-flex align-items-center ms-auto gap-3">
        {/* Notification */}
        <button className="btn btn-light position-relative">
          <FaBell size={20} />
          {/* Notification Badge */}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
          </span>
        </button>

        {/* Settings */}
        <button className="btn btn-light">
          <FaCog size={20} />
        </button>

        {/* User Profile */}
       <div className="user-dropdown dropdown">
            {/* 1. Toggle Button (User Image) */}
            <button
                className="btn user-image-btn"
                type="button"
                id="userDropdownMenu"
                data-bs-toggle="dropdown"
                aria-expanded={isOpen}
                onClick={toggleDropdown}
            >
                <img
                    src={userImg}
                    alt="Amol Avhad"
                    className="user-avatar"
                />
            </button>

            {/* 2. Dropdown Menu */}
            <ul 
                className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`}
                aria-labelledby="userDropdownMenu"
            >
                {/* User Name (Header) */}
                <li className="dropdown-header">
                    <strong className="text-primary">Amol Avhad</strong>
                </li>
                <li><hr className="dropdown-divider" /></li>
                
                {/* Logout Button */}
                <li>
                    <button 
                        className="dropdown-item logout-btn" 
                        onClick={handleLogout}
                    >
                        <i className="fas fa-sign-out-alt me-2"></i> Logout
                    </button>
                </li>
            </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
