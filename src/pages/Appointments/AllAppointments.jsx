import React, { useState } from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./AllAppointments.css"
const appointmentData = [
    { id: 'AP87Z', patientId: 'P12Y', token: 58, doctor: 'Dr Manoj', problem: 'Small knee fracture', status: 'Active' },
    { id: 'AP8W72', patientId: 'P42Y', token: 5, doctor: 'Dr Daniel', problem: 'Viral Fever', status: 'Active' },
    { id: 'AP873', patientId: 'P12G', token: 8, doctor: 'Dr Manoj', problem: '-', status: 'Pending' },
    { id: 'AP1Y2', patientId: 'P1DY', token: 18, doctor: 'Dr Susan', problem: 'Chest pain', status: 'Active' },
    { id: 'AP87Z', patientId: 'P12Y', token: 58, doctor: 'Dr Manoj', problem: 'Small knee fracture', status: 'Active' },
    { id: 'AP8W72', patientId: 'P42Y', token: 5, doctor: 'Dr Daniel', problem: 'Viral Fever', status: 'Active' },
    { id: 'AP873', patientId: 'P12G', token: 8, doctor: 'Dr Manoj', problem: '-', status: 'Pending' },
    { id: 'AP1Y2', patientId: 'P1DY', token: 18, doctor: 'Dr Susan', problem: 'Chest pain', status: 'Active' },
    { id: 'AP87Z', patientId: 'P12Y', token: 58, doctor: 'Dr Manoj', problem: 'Small knee fracture', status: 'Active' },
    { id: 'AP8W72', patientId: 'P42Y', token: 5, doctor: 'Dr Daniel', problem: 'Viral Fever', status: 'Active' },
];

// Helper function to get status badge class
const getStatusClass = (status) => {
    switch (status) {
        case 'Active':
            return 'status-active'; // Green
        case 'Pending':
            return 'status-pending'; // Orange/Yellow
        // Add more statuses as needed based on your application
        default:
            return '';
    }
};
export const AllAppointments = () => {
     // State to track selected rows (for Delete/Edit functionality)
    const [selectedRows, setSelectedRows] = useState({});

    const handleCheckboxChange = (id) => {
        setSelectedRows(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
  return (
    <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>All Appointment</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">Add Appointment</button>&nbsp;
            </div>
          </div>
     
         <div className="dashboard-bg container-fluid py-4">
             <div className="container-fluid mt-2 appointments-list-container">
            <h4 className="list-title">Appointments List</h4>

            {/* Top Controls: Show entries and Search */}
            <div className="d-flex justify-content-between align-items-center mb-3 table-controls">
                <div className="d-flex align-items-center">
                    <label htmlFor="showEntries" className="me-2">Show</label>
                    <select id="showEntries" className="form-select form-select-sm entries-select">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                    <span className="ms-2">entries</span>
                </div>
                <div className="d-flex align-items-center">
                    <label htmlFor="search" className="me-2">Search:</label>
                    <input type="search" id="search" className="form-control form-control-sm search-input" />
                </div>
            </div>

            {/* Appointments Table */}
            <div className="table-responsive table-wrapper">
                <table className="table table-hover align-middle appointments-table">
                    <thead>
                        <tr>
                            <th className="checkbox-col"></th>
                            <th className="sortable">Appointment ID</th>
                            <th className="sortable">Patient ID</th>
                            <th className="sortable">Token Number</th>
                            <th className="sortable">Doctor Name</th>
                            <th className="sortable">Problem</th>
                            <th className="sortable">Status</th>
                            <th className="sortable"></th> {/* Empty column for sorting icon */}
                        </tr>
                    </thead>
                    <tbody>
                        {appointmentData.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={!!selectedRows[appointment.id]}
                                        onChange={() => handleCheckboxChange(appointment.id)}
                                    />
                                </td>
                                <td>{appointment.id}</td>
                                <td>{appointment.patientId}</td>
                                <td>{appointment.token}</td>
                                <td>{appointment.doctor}</td>
                                <td>{appointment.problem}</td>
                                <td>
                                    <span className={`status-badge ${getStatusClass(appointment.status)}`}>
                                        {appointment.status}
                                    </span>
                                </td>
                                <td></td> {/* Empty cell for consistent column count */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bottom Controls: Info, Export, Pagination, Actions */}
            <div className="d-flex justify-content-between align-items-center table-footer">
                {/* Left side: Showing entries info and Action Buttons */}
                <div className="d-flex flex-column align-items-start">
                    <div className="info-text mb-2">
                        Showing 1 to 10 of 12 entries
                    </div>
                    {/* Action Buttons (DELETE and EDIT) */}
                    <div className="d-flex actions-row">
                         <button className="btn btn-delete me-2">
                             {/* Placeholder for trash icon */}
                             <span className="me-1">🗑️</span> DELETE
                         </button>
                         <button className="btn btn-edit">
                             {/* Placeholder for pencil icon */}
                             <span className="me-1">✏️</span> EDIT
                         </button>
                    </div>
                </div>

                {/* Center: Export Buttons */}
                <div className="export-buttons">
                    <span className="export-link me-3">⬇️ CSV</span>
                    <span className="export-link me-3">🖨️ print</span>
                    <span className="export-link me-3">📄 PDF</span>
                    <span className="export-link">📊 Excel</span>
                </div>

                {/* Right side: Pagination */}
                <div>
                    <nav>
                        <ul className="pagination pagination-sm list-unstyled d-flex align-items-center">
                            <li className="page-item me-1">
                                <button className="btn btn-light page-link-custom">Previous</button>
                            </li>
                            <li className="page-item me-1">
                                <button className="btn page-link-custom active-page">1</button>
                            </li>
                            <li className="page-item me-1">
                                <button className="btn page-link-custom">2</button>
                            </li>
                            <li className="page-item">
                                <button className="btn btn-light page-link-custom">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
            </div>
         </div>
    </>
  )
}
