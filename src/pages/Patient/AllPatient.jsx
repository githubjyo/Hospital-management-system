import React, { useState } from 'react'
import "../../common.css"
import "./AllPatient.css"
import Navbar from '../../components/Header'
import { useNavigate } from 'react-router-dom';
const patientData = [
    { id: 1, name: "Manoj Kumar", age: 30, phone: "333-444-7777", lastVisit: "12-03-2018", status: "Completed" },
    { id: 2, name: "Riya", age: 26, phone: "3423-232-987", lastVisit: "12-10-2018", status: "Pending" },
    { id: 3, name: "Paul", age: 46, phone: "3423-132-987", lastVisit: "45-10-2018", status: "Cancelled" },
    { id: 4, name: "Manoj Kumar", age: 30, phone: "333-444-7777", lastVisit: "12-03-2018", status: "Completed" },
    { id: 5, name: "Riya", age: 26, phone: "3423-232-987", lastVisit: "12-10-2018", status: "Pending" },
    { id: 6, name: "Paul", age: 46, phone: "3423-132-987", lastVisit: "45-10-2018", status: "Cancelled" },
    { id: 7, name: "Manoj Kumar", age: 30, phone: "333-444-7777", lastVisit: "12-03-2018", status: "Completed" },
    { id: 8, name: "Riya", age: 26, phone: "3423-232-987", lastVisit: "12-10-2018", status: "Pending" },
    { id: 9, name: "Paul", age: 46, phone: "3423-132-987", lastVisit: "45-10-2018", status: "Cancelled" },
    { id: 10, name: "Manoj Kumar", age: 30, phone: "333-444-7777", lastVisit: "12-03-2018", status: "Completed" },
];


// Helper function to get status badge class
const getStatusClass = (status) => {
    switch (status) {
        case 'Completed':
            return 'status-completed'; // Green
        case 'Pending':
            return 'status-pending'; // Orange/Yellow
        case 'Cancelled':
            return 'status-cancelled'; // Red
        default:
            return '';
    }
};

export const AllPatient = () => {
     // State to track selected rows (for Delete/Edit functionality)
    const [selectedRows, setSelectedRows] = useState({});

    const handleCheckboxChange = (id) => {
        setSelectedRows(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
     const navigate = useNavigate();
     const goToAddPatientPage = () => {
        navigate('/addpatient'); // Navigate to the '/about' path
      };
  return (
<>
 <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>All Patients</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn" onClick={goToAddPatientPage}>Add Patients</button>
            </div>
          </div>

                   <div className="dashboard-bg container-fluid py-4">

            <div className="container-fluid patient-list-container">
                <h4 className="list-title">Patients List</h4>

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

            {/* Patients Table */}
            <div className="table-responsive table-wrapper">
                <table className="table table-hover align-middle patient-table">
                    <thead>
                        <tr>
                            <th className="checkbox-col"></th>
                            <th className="sortable">Patient ID</th>
                            <th className="sortable">Patient Name</th>
                            <th className="sortable age-col">Age</th>
                            <th className="sortable phone-col">Phone</th>
                            <th className="sortable">Last Visit</th>
                            <th className="sortable">Status</th>
                            <th className="sortable"></th> {/* Empty column for sorting icon */}
                        </tr>
                    </thead>
                    <tbody>
                        {patientData.map((patient) => (
                            <tr key={patient.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={!!selectedRows[patient.id]}
                                        onChange={() => handleCheckboxChange(patient.id)}
                                    />
                                </td>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.phone}</td>
                                <td>{patient.lastVisit}</td>
                                <td>
                                    <span className={`status-badge ${getStatusClass(patient.status)}`}>
                                        {patient.status}
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
                    <button className="btn btn-link export-link me-2">
                        <span className="me-1">⬇️</span> CSV
                    </button>
                    <button className="btn btn-link export-link me-2">
                        <span className="me-1">🖨️</span> print
                    </button>
                    <button className="btn btn-link export-link me-2">
                        <span className="me-1">📄</span> PDF
                    </button>
                    <button className="btn btn-link export-link">
                        <span className="me-1">📊</span> Excel
                    </button>
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
