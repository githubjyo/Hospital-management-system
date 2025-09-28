import React from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./AllDoctor.css"
import { Table, Button, Badge, Form } from "react-bootstrap";


export const AllDoctor = () => {

    const doctors = [
        { id: 1, name: "Manoj Kumar", exp: 10, phone: "333-444-7777", specialization: "Dental", availability: "Available" },
        { id: 2, name: "Riya", exp: 6, phone: "3423-232-987", specialization: "Ortho", availability: "On Leave" },
        { id: 3, name: "Paul", exp: 15, phone: "3423-132-987", specialization: "General Physician", availability: "Not Available" },
        { id: 4, name: "Manoj Kumar", exp: 20, phone: "333-444-7777", specialization: "ENT", availability: "Available" },
        { id: 5, name: "Riya", exp: 16, phone: "3423-232-987", specialization: "General Physician", availability: "On Leave" },
        { id: 6, name: "Paul", exp: 12, phone: "3423-132-987", specialization: "Ortho", availability: "Not Available" },
        { id: 7, name: "Manoj Kumar", exp: 19, phone: "333-444-7777", specialization: "Nuero Surgen", availability: "Available" },
    ];

    const getBadge = (status) => {
        switch (status) {
            case "Available":
                return <Badge bg="success">Available</Badge>;
            case "On Leave":
                return <Badge bg="warning" text="dark">On Leave</Badge>;
            default:
                return <Badge bg="danger">Not Available</Badge>;
        }
    };
    return (
        <>
            <div className="flex-grow-1">
                <Navbar />
                <div className='row main-heading'>
                    <div className='col-md-6'><h3 className='block-title'>All Doctor</h3></div>
                    <div className='col-md-6 text-end px-0'>
                        <button type="button" className="round-btn">Add Doctor</button>&nbsp;
                    </div>
                </div>

                <div className="dashboard-bg container-fluid py-4">
                    <div className="doctors-list-container container mt-2">
                        <h4 className="table-title">Doctors List</h4>

                        {/* Search and Show entries row */}
                        <div className="d-flex justify-content-between mb-3">
                            <div>
                                Show{" "}
                                <Form.Select size="sm" style={{ display: "inline-block", width: "70px" }}>
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                </Form.Select>{" "}
                                entries
                            </div>
                            <div>
                                Search: <Form.Control type="text" size="sm" style={{ display: "inline-block", width: "200px" }} />
                            </div>
                        </div>

                        {/* Doctors Table */}
                        <Table striped bordered hover responsive className="doctor-table">
                            <thead>
                                <tr>
                                    <th><Form.Check type="checkbox" /></th>
                                    <th>Doctor ID</th>
                                    <th>Doctor Name</th>
                                    <th>Experience <small>(in Years)</small></th>
                                    <th>Phone</th>
                                    <th>Specialization</th>
                                    <th>Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctors.map((doc) => (
                                    <tr key={doc.id}>
                                        <td><Form.Check type="checkbox" /></td>
                                        <td>{doc.id}</td>
                                        <td>{doc.name}</td>
                                        <td>{doc.exp}</td>
                                        <td>{doc.phone}</td>
                                        <td>{doc.specialization}</td>
                                        <td>{getBadge(doc.availability)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        {/* Pagination */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>Showing 1 to 10 of 14 entries</div>
                            <div>
                                <Button variant="light" size="sm" className="me-1">Previous</Button>
                                <Button variant="danger" size="sm" className="me-1">1</Button>
                                <Button variant="light" size="sm" className="me-1">2</Button>
                                <Button variant="light" size="sm">Next</Button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-3">
                            <Button variant="danger" className="me-2">DELETE</Button>
                            <Button variant="info">EDIT</Button>
                        </div>

                        {/* Export Options */}
                        <div className="export-options mt-3">
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
