// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import PatientDashboard from './pages/Patient/PatientDashboard';
import NotFound from './pages/NotFound';
import AuthContext, { AuthProvider } from './AuthContext';
import SignIn from './pages/Signing';
import { AdminDashboard } from './pages/Admin/AdminDashboard';
import CreateAccount from './pages/Signup';
import { Breadcrumb } from 'react-bootstrap';
import { AllPatient } from './pages/Patient/AllPatient';
import { PatientDetails } from './pages/Patient/PatientDetails';
import { AddPatient } from './pages/Patient/AddPatient';
import { EditPatient } from './pages/Patient/EditPatient';
import Sidebar from './components/AdSidebar';
import { AllDoctor } from './pages/Doctor/AllDoctor';
import { AddDoctor } from './pages/Doctor/AddDoctor';
import { DoctorDetail } from './pages/Doctor/DoctorDetail';
import { EditDoctor } from './pages/Doctor/EditDoctor';
import { AllAppointments } from './pages/Appointments/AllAppointments';
import { AddAppointments } from './pages/Appointments/AddAppointments';
import { AppointmentDetails } from './pages/Appointments/AppointmentDetails';
import { EditAppointments } from './pages/Appointments/EditAppointments';
import { AddPayment } from './pages/Payements/AddPayment';
import { AllPayment } from './pages/Payements/AllPayment';
import { PaymentInvoice } from './pages/Payements/PaymentInvoice';
import { AddRoomAllotment } from './pages/Rooms/AddRoomAllotment';
import { AllRooms } from './pages/Rooms/AllRooms';
import { EditRoomAllotment } from './pages/Rooms/EditRoomAllotment';

function PrivateRoute({ children, roles }) {
  const { user } = React.useContext(AuthContext);
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <>
    <AuthProvider/>
      <Router>
        <Routes>
          {/* landing page sign in */}
          <Route path="/" element={< SignIn/>} />
          {/* admin dashboard page */}
        <Route path="/admindashboard" element={ 
            <div className="d-flex">

        <Sidebar />
          <AdminDashboard />
          </div>
          }/>

        {/* <Route path="/doctordashboard" element={
          <div className="d-flex">

        <Sidebar />
          <DoctorDashboard />
          </div>} />
        <Route path="/patientdashboard" element={
          <div className="d-flex">

        <Sidebar />
          <PatientDashboard />
          </div>} /> */}
          {/* patient page */}
        <Route path="/allpatient" element={
           <div className="d-flex">

        <Sidebar />
          <AllPatient/>
          </div>} />
        <Route path="/patientdetails" element={
           <div className="d-flex">

        <Sidebar />
          <PatientDetails />
          </div>} />
        <Route path="/addpatient" element={
           <div className="d-flex">

        <Sidebar />
          <AddPatient />
          </div>} />
        <Route path="/editpatient" element={
           <div className="d-flex">

        <Sidebar />
          <EditPatient />
          </div>} />
              {/* doctor page */}
        <Route path="/alldoctor" element={
          <div className="d-flex">

        <Sidebar />
          <AllDoctor />
          </div>} />
        <Route path="/adddoctor" element={
           <div className="d-flex">

        <Sidebar />
          <AddDoctor/>
          </div>} />
        <Route path="/doctordetail" element={
           <div className="d-flex">

        <Sidebar />
          <DoctorDetail />
          </div>} />
        <Route path="/editdoctor" element={
           <div className="d-flex">

        <Sidebar />
          <EditDoctor />
          </div>} />

          {/* Appointment page */}
          <Route path="/allappointments" element={
          <div className="d-flex">

        <Sidebar />
          < AllAppointments/>
          </div>} />
        <Route path="/addappointments" element={
           <div className="d-flex">

        <Sidebar />
          <AddAppointments/>
          </div>} />
        <Route path="/appointmentdetails" element={
           <div className="d-flex">

        <Sidebar />
          <AppointmentDetails />
          </div>} />
        <Route path="/editappointments" element={
           <div className="d-flex">

        <Sidebar />
          <EditAppointments />
          </div>} />

          {/* payment rout */}
           <Route path="/paymentinvoice" element={
           <div className="d-flex">

        <Sidebar />
          <PaymentInvoice />
          </div>} />
           <Route path="/addpayment" element={
           <div className="d-flex">

        <Sidebar />
          <AddPayment />
          </div>} />
           <Route path="/allpayment" element={
           <div className="d-flex">

        <Sidebar />
          <AllPayment />
          </div>} />

          {/* Rooms Allotment */}
           <Route path="/addroomallotment" element={
           <div className="d-flex">

        <Sidebar />
          <AddRoomAllotment />
          </div>} />
           <Route path="/allrooms" element={
           <div className="d-flex">

        <Sidebar />
          <AllRooms />
          </div>} />
          <Route path="/editroomallotment" element={
           <div className="d-flex">

        <Sidebar />
          <EditRoomAllotment />
          </div>} />
          {/* wrong path */}
          <Route path="*" element={<NotFound />} />
        </Routes>
       
      </Router>
       <AuthProvider/>
      </>
  );
}
