import React from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./AllPayment.css"
// Mock Data to populate the table (matches the screenshot)
const mockPayments = [
    { id: 1, patient: 'Manoj Kumar', doctor: 'Daniel Smith', service: 'X-ray', charges: 500, discount: 5, status: 'completed' },
    { id: 2, patient: 'Riya', doctor: 'Daniel Smith', service: 'ECG', charges: 120, discount: 10, status: 'completed' },
    { id: 3, patient: 'Susan', doctor: 'Daniel Smith', service: 'Dental', charges: 190, discount: 8, status: 'pending' },
    { id: 4, patient: 'Manoj Kumar', doctor: 'Daniel Smith', service: 'X-ray', charges: 500, discount: 5, status: 'cancelled' },
    { id: 5, patient: 'Riya', doctor: 'Daniel Smith', service: 'ECG', charges: 120, discount: 10, status: 'completed' },
    { id: 6, patient: 'Susan', doctor: 'Daniel Smith', service: 'Dental', charges: 190, discount: 8, status: 'pending' },
    { id: 7, patient: 'Manoj Kumar', doctor: 'Daniel Smith', service: 'X-ray', charges: 500, discount: 5, status: 'completed' },
    { id: 8, patient: 'Riya', doctor: 'Daniel Smith', service: 'ECG', charges: 120, discount: 10, status: 'completed' },
    { id: 9, patient: 'Susan', doctor: 'Daniel Smith', service: 'Dental', charges: 190, discount: 8, status: 'pending' },
    { id: 10, patient: 'Manoj Kumar', doctor: 'Daniel Smith', service: 'X-ray', charges: 500, discount: 5, status: 'cancelled' },
];
export const AllPayment = () => {
    const getStatusBadge = (status) => {
        let className = 'badge-status ';
        if (status === 'completed') {
            className += 'bg-success';
        } else if (status === 'pending') {
            className += 'bg-warning text-dark';
        } else if (status === 'cancelled') {
            className += 'bg-danger';
        }
        return <span className={`badge ${className}`}>{status}</span>;
    };
  return (
    <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>All Payment</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">Add Payment</button>&nbsp;
            </div>
          </div>
     
         <div className="dashboard-bg container-fluid py-4">
                <div className="payments-list-container container-fluid">
            <div className="card shadow-sm p-4">
                <h4 className="mb-4 list-header">Payments List</h4>
                
                {/* Top Controls: Show entries & Search */}
                <div className="d-flex justify-content-between align-items-center mb-3 table-controls">
                    <div className="d-flex align-items-center">
                        <span className="me-2 text-muted">Show</span>
                        <select className="form-select form-select-sm entries-select">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span className="ms-2 text-muted">entries</span>
                    </div>
                    <div>
                        <input type="text" className="form-control form-control-sm search-input" placeholder="Search..." />
                    </div>
                </div>

                {/* Payments Table */}
                <div className="table-responsive payment-table-wrapper">
                    <table className="table table-hover align-middle custom-payment-table">
                        <thead className="table-light">
                            <tr>
                                <th className="checkbox-col"><input type="checkbox" className="form-check-input" /></th>
                                <th>Patient Name</th>
                                <th>Doctor Name</th>
                                <th>Service Name</th>
                                <th>Charges</th>
                                <th>Discount (%)</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockPayments.map((payment) => (
                                <tr key={payment.id}>
                                    <td className="checkbox-col"><input type="checkbox" className="form-check-input" /></td>
                                    <td>{payment.patient}</td>
                                    <td>{payment.doctor}</td>
                                    <td>{payment.service}</td>
                                    <td className="fw-bold text-success">${payment.charges}</td>
                                    <td>{payment.discount}</td>
                                    <td>{getStatusBadge(payment.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Controls: Pagination and Export */}
                <div className="d-flex justify-content-between align-items-center mt-3 table-footer">
                    {/* Entry Count */}
                    <small className="text-muted">Showing 1 to 10 of 12 entries</small>

                    {/* Pagination */}
                    <nav className="pagination-nav">
                        <ul className="pagination pagination-sm mb-0">
                            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                
                {/* Export and Action Buttons */}
                <div className="d-flex justify-content-between align-items-center mt-4 action-bar">
                    {/* Export Icons */}
                    <div className="export-icons d-flex">
                        <a href="#" className="text-muted export-link me-3"><i className="fas fa-file-csv me-1"></i> CSV</a>
                        <a href="#" className="text-muted export-link me-3"><i className="fas fa-print me-1"></i> print</a>
                        <a href="#" className="text-muted export-link me-3"><i className="fas fa-file-pdf me-1"></i> PDF</a>
                        <a href="#" className="text-muted export-link"><i className="fas fa-file-excel me-1"></i> Excel</a>
                    </div>
                    
                    {/* Action Buttons */}
                    <div>
                        <button className="btn btn-danger delete-btn me-2"><i className="fas fa-trash me-1"></i> DELETE</button>
                        <button className="btn btn-info edit-btn"><i className="fas fa-edit me-1"></i> EDIT</button>
                    </div>
                </div>

            </div>
        </div>
            
            </div>
         </div>
   </>
  )
}
