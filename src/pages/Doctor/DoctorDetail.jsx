import React from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./DoctorDetail.css"
import { Card, Button, Table } from "react-bootstrap";
import doctorImg from "../../assets/images/doctor1.jpeg"
export const DoctorDetail = () => {
    const activity = [
    { patient: "Manoj Kumar", condition: "Viral fever", date: "12-03-2018", status: "Condition is good" },
    { patient: "Riya", condition: "Hand Fracture", date: "12-10-2018", status: "Small Operation" },
    { patient: "Paul", condition: "Dengue", date: "15-10-2018", status: "Admitted in Generalward" },
    { patient: "Manoj Kumar", condition: "Malariya", date: "12-03-2018", status: "Condition is good" },
    { patient: "Riya", condition: "Hand Fracture", date: "12-10-2018", status: "Small Operation" },
    { patient: "Paul", condition: "Dengue", date: "15-10-2018", status: "Admitted in Generalward" },
  ];
  return (
    <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>Doctor Details</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">All Doctor</button>&nbsp;
            </div>
          </div>
     
         <div className="dashboard-bg container-fluid py-4">
                <div className="doctor-details-container container mt-4">
      {/* Doctor Details */}
      <h5 className="section-title">Doctor Details</h5>

      <div className="d-flex flex-wrap">
        {/* Left: Doctor Image & Info */}
        <div className="doctor-left me-3 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src={doctorImg} // replace with doctor image
              alt="Doctor"
            />
            <Card.Body>
              <Card.Title>Dr Daniel Smith</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="success" className="me-2">
                Edit Doctor
              </Button>
              <Button variant="danger">Delete Doctor</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Right: Doctor Info */}
        <div className="doctor-right flex-grow-1">
          <Table bordered hover className="doctor-info-table">
            <tbody>
              <tr>
                <td>Specialization</td>
                <td>General Physician</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>14 Years</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>Koramangala, Bangalore, India</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+91 1111111111</td>
              </tr>
              <tr>
                <td>Date Of Birth</td>
                <td>26-10-1989</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>your@email.com</td>
              </tr>
            </tbody>
          </Table>
          <div className="export-options mt-2">
            <span>📥 csv</span> &nbsp;
            <span>🖨 print</span> &nbsp;
            <span>📄 PDF</span> &nbsp;
            <span>📊 Excel</span>
          </div>
        </div>
      </div>

      {/* Doctor Activity */}
      <h5 className="section-title mt-4">Doctor Activity</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Injury/Condition</th>
            <th>Visit Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {activity.map((item, index) => (
            <tr key={index}>
              <td>{item.patient}</td>
              <td>{item.condition}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="export-options mt-2">
        <span>📥 csv</span> &nbsp;
        <span>🖨 print</span> &nbsp;
        <span>📄 PDF</span> &nbsp;
        <span>📊 Excel</span>
      </div>
    </div>

         </div>
         </div>
    </>
  )
}
