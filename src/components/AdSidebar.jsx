import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaHome,
    FaUserMd,
    FaUsers,
    FaCalendarAlt,
    FaDollarSign,
    FaKey,
    FaBars,
} from "react-icons/fa";
import { Collapse } from "react-bootstrap";
import procliniclogo from "../assets/images/proclinic_logo.png";
import "./AdSidebar.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [openMenu, setOpenMenu] = useState("");
    const [activeItem, setActiveItem] = useState(""); // <-- track active item

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? "" : menu);
        setActiveItem(menu); // highlight parent menu when opened
    };

    const handleSubmenuClick = (submenu) => {
        setActiveItem(submenu); // highlight submenu item
    };

    return (
        <>
            {/* Sidebar */}
            <div
                id="sidebar"
                className={`sidebar ${collapsed ? "collapsed" : ""}`}
            >
                {/* Logo + collapse button */}
                <div className="d-flex justify-content-between align-items-center sidebar-header my-3">
                    {!collapsed && (
                        <img
                            src={procliniclogo}
                            className="img-fluid procliniclogo-img"
                            alt="ProClinic Logo"
                        />
                    )}
                    <button
                        className="btn btn-sm btn-light collapsed-btn"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <FaBars />
                    </button>
                </div>

                {/* Sidebar menu */}
                <ul className="list-unstyled mx-3">
                    {/* Dashboard */}
                    <li className={`mb-3 ${activeItem === "dashboard" ? "active-menu" : ""}`}>
                        <div
                            role="button"
                            onClick={() => toggleMenu("dashboard")}
                            className="d-flex align-items-center sidebar-link"
                        >
                            <FaHome /> {!collapsed && <span className="ms-2">Dashboard</span>}
                        </div>
                        <Collapse in={openMenu === "dashboard"}>
                            <ul className="list-unstyled mt-2">
                                <li>
                                <Link
                                to ="/admindashboard"
                                
                                    className={`submenu ${activeItem === "Admin Dashboard" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Admin Dashboard")}
                                >
                                    Admin Dashboard
                                </Link>
                                </li>
                                {/* <li>
                                <Link
                                to ="/doctordashboard"
                                
                                    className={`submenu ${activeItem === "Doctor Dashboard" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Doctor Dashboard")}
                                >
                                    Doctor Dashboard
                                </Link>
                                </li>
                                <li>
                               <Link
                               to="/patientdashboard"
                                    className={`submenu ${activeItem === "Ptient Dashboard" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Ptient Dashboard")}
                                >
                                    Patient Dashboard
                               </Link>
                               </li> */}
                              
                            </ul>
                        </Collapse>
                    </li>

                    {/* Patients */}
                    <li className={`mb-3 ${activeItem === "patients" ? "active-menu" : ""}`}>
                        <div
                            role="button"
                            onClick={() => toggleMenu("patients")}
                            className="d-flex align-items-center sidebar-link"
                        >
                            <FaUsers /> {!collapsed && <span className="ms-2">Patients</span>}
                        </div>
                        <Collapse in={openMenu === "patients"}>
                            <ul className="list-unstyled mt-2">
                               
                                <li>
                                    <Link
                                    to="/addpatient"
                                    className={`submenu ${activeItem === "Add Patient" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Add Patient")}
                                >
                                    Add Patient
                                    </Link>
                                </li>
                                 <li>
                                    <Link
                                    to="/allpatient"
                                    className={`submenu ${activeItem === "All Patient" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("All Patient")}
                                    >
                                    All Patient
                                    </Link>
                                </li>
                                  <li>
                                    <Link
                                    to="/patientdetails"
                                    className={`submenu ${activeItem === "Patient Details" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Patient Details")}
                                >
                                    Patient Details
                                    </Link>
                                </li>
                                  <li>
                                    <Link
                                    to="/editpatient"
                                    className={`submenu ${activeItem === "Edit Patient" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Edit Patient")}
                                >
                                    Edit Patient
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    {/* Doctors */}
                    <li className={`mb-3 ${activeItem === "doctors" ? "active-menu" : ""}`}>
                        <div
                            role="button"
                            onClick={() => toggleMenu("doctors")}
                            className="d-flex align-items-center sidebar-link"
                        >
                            <FaUserMd /> {!collapsed && <span className="ms-2">Doctors</span>}
                        </div>
                        <Collapse in={openMenu === "doctors"}>
                           <ul className="list-unstyled mt-2">
                               
                                <li>
                                    <Link
                                    to="/adddoctor"
                                    className={`submenu ${activeItem === "Add Doctor" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Add Doctor")}
                                >
                                    Add Doctor
                                    </Link>
                                </li>
                                 <li>
                                    <Link
                                    to="/alldoctor"
                                    className={`submenu ${activeItem === "All Doctor" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("All Doctor")}
                                    >
                                    All Doctor
                                    </Link>
                                </li>
                                  <li>
                                    <Link
                                    to="/doctordetail"
                                    className={`submenu ${activeItem === "Doctor Detail" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Doctor Detail")}
                                >
                                    Doctor Details
                                    </Link>
                                </li>
                                  <li>
                                    <Link
                                    to="/editdoctor"
                                    className={`submenu ${activeItem === "Edit Doctor" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Edit Doctor")}
                                >
                                    Edit Doctor
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    {/* Appointments */}
                    <li className={`mb-3 ${activeItem === "appointments" ? "active-menu" : ""}`}>
                        <div
                            role="button"
                            onClick={() => toggleMenu("appointments")}
                            className="d-flex align-items-center sidebar-link"
                        >
                            <FaCalendarAlt /> {!collapsed && <span className="ms-2">Appointments</span>}
                        </div>
                        <Collapse in={openMenu === "appointments"}>
                            <ul className="list-unstyled mt-2">
                               
                                <li>
                                    <Link
                                    to="/addappointments"
                                    className={`submenu ${activeItem === "Add Appointments" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Add Appointments")}
                                >
                                    Add Appointments
                                    </Link>
                                </li>
                                 <li>
                                    <Link
                                    to="/allappointments"
                                    className={`submenu ${activeItem === "All Appointments" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("All Appointments")}
                                    >
                                    All Appointments
                                    </Link>
                                </li>
                                  <li>
                                    <Link
                                    to="/appointmentdetails"
                                    className={`submenu ${activeItem === "Appointment Details" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Appointment Details")}
                                >
                                    Appointment Details
                                    </Link>
                                </li>
                                  <li>
                                    <Link
                                    to="/editappointments"
                                    className={`submenu ${activeItem === "Edit Appointments" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Edit Appointments")}
                                >
                                    Edit Appointments
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    {/* Payments */}
                    <li className={`mb-3 ${activeItem === "payments" ? "active-menu" : ""}`}>
                        <div
                            role="button"
                            onClick={() => toggleMenu("payments")}
                            className="d-flex align-items-center sidebar-link"
                        >
                            <FaDollarSign /> {!collapsed && <span className="ms-2">Payments</span>}
                        </div>
                        <Collapse in={openMenu === "payments"}>
                           <ul className="list-unstyled mt-2">
                               
                                <li>
                                    <Link
                                    to="/addpayment"
                                    className={`submenu ${activeItem === "Add Payment" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Add Payment")}
                                >
                                    Add Payment
                                    </Link>
                                </li>
                                 <li>
                                    <Link
                                    to="/allpayment"
                                    className={`submenu ${activeItem === "All Payment" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("All Payment")}
                                    >
                                    All Payment
                                    </Link>
                                </li>
                                  <li>
                                    <Link
                                    to="/paymentinvoice"
                                    className={`submenu ${activeItem === "Payment Invoice" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Payment Invoice")}
                                >
                                    Payment Invoice
                                    </Link>
                                </li>
                                 
                            </ul>
                        </Collapse>
                    </li>

                    {/* Rooms */}
                    <li className={`mb-3 ${activeItem === "rooms" ? "active-menu" : ""}`}>
                        <div
                            role="button"
                            onClick={() => toggleMenu("rooms")}
                            className="d-flex align-items-center sidebar-link"
                        >
                            <FaKey /> {!collapsed && <span className="ms-2">Room Allotments</span>}
                        </div>
                        <Collapse in={openMenu === "rooms"}>
                             <ul className="list-unstyled mt-2">
                               
                                <li>
                                    <Link
                                    to="/addroomallotment"
                                    className={`submenu ${activeItem === "Add Room Allotment" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Add Room Allotment")}
                                >
                                    Add Room Allotment
                                    </Link>
                                </li>
                                 <li>
                                    <Link
                                    to="/allrooms"
                                    className={`submenu ${activeItem === "All Rooms" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("All Rooms")}
                                    >
                                    All Rooms
                                    </Link>
                                </li>
                                  <li>
                                    <Link
                                    to="/editroomallotment"
                                    className={`submenu ${activeItem === "Edit Room Allotment" ? "active-submenu" : ""}`}
                                    onClick={() => handleSubmenuClick("Edit Room Allotment")}
                                >
                                   Edit Room Allotment
                                    </Link>
                                </li>
                                 
                            </ul>
                        </Collapse>
                    </li>
                </ul>
                
                <Footer/>
            </div>

                   
       
        </>
    );
};

export default Sidebar;
