import React from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./AllRooms.css"
// Mock Data to populate the table (matches the screenshot)
const mockAllotments = [
    { id: 1, room: 10, roomType: 'Icu', patient: 'Manoj Kumar', allotmentDate: '12-11-2018', dischargeDate: '16-11-2018', doctor: 'Dr Daniel Smith', status: 'Available' },
    { id: 2, room: 4, roomType: 'Ac Room', patient: 'Susan', allotmentDate: '10-11-2018', dischargeDate: '-', doctor: 'Dr Daniel Smith', status: 'Not Discharged' },
    { id: 3, room: 2, roomType: 'Ac Room', patient: '-', allotmentDate: '-', dischargeDate: '-', doctor: '-', status: 'Not Alloted' },
    { id: 4, room: 3, roomType: 'General', patient: 'Raj Kiran', allotmentDate: '10-11-2018', dischargeDate: '12-11-2018', doctor: 'Dr Wilsson', status: 'Available' },
    { id: 5, room: 10, roomType: 'Icu', patient: 'Manoj Kumar', allotmentDate: '12-11-2018', dischargeDate: '16-11-2018', doctor: 'Dr Daniel Smith', status: 'Available' },
    { id: 6, room: 4, roomType: 'Ac Room', patient: 'Susan', allotmentDate: '10-11-2018', dischargeDate: '-', doctor: 'Dr Daniel Smith', status: 'Not Discharged' },
    { id: 7, room: 2, roomType: 'Ac Room', patient: '-', allotmentDate: '-', dischargeDate: '-', doctor: '-', status: 'Not Alloted' },
    { id: 8, room: 3, roomType: 'General', patient: 'Raj Kiran', allotmentDate: '10-11-2018', dischargeDate: '12-11-2018', doctor: 'Dr Wilsson', status: 'Available' },
    { id: 9, room: 10, roomType: 'Icu', patient: 'Manoj Kumar', allotmentDate: '12-11-2018', dischargeDate: '16-11-2018', doctor: 'Dr Daniel Smith', status: 'Available' },
    { id: 10, room: 4, roomType: 'Ac Room', patient: 'Susan', allotmentDate: '10-11-2018', dischargeDate: '-', doctor: 'Dr Daniel Smith', status: 'Not Discharged' },
];

export const AllRooms = () => {
    const getStatusBadge = (status) => {
        let className = 'badge-status ';
        if (status === 'Available') {
            className += 'bg-success';
        } else if (status === 'Not Discharged') {
            className += 'bg-danger';
        } else if (status === 'Not Alloted') {
            className += 'bg-warning text-dark';
        }
        return <span className={`badge ${className}`}>{status}</span>;
    };
  return (
       <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>All Room </h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">All Rooms</button>&nbsp;
            </div>
          </div>
            
         <div className="dashboard-bg container-fluid py-4">
            <div className="allotments-list-container container-fluid">
            <div className="card shadow-sm p-4">
                <h4 className="mb-4 list-header">Allotments List</h4>
                
                {/* Top Controls: Show entries & Search */}
                <div className="d-flex justify-content-between align-items-center mb-3 table-controls">
                    <div className="d-flex align-items-center">
                        <span className="me-2 text-muted">Show</span>
                        <select className="form-select form-select-sm entries-select">
                            <option value="10">10</option>
                            <option value="25">25</option>
                        </select>
                        <span className="ms-2 text-muted">entries</span>
                    </div>
                    <div>
                        <input type="text" className="form-control form-control-sm search-input" placeholder="Search:" />
                    </div>
                </div>

                {/* Allotments Table */}
                <div className="table-responsive allotment-table-wrapper">
                    <table className="table table-hover align-middle custom-allotment-table">
                        <thead className="table-light">
                            <tr>
                                <th className="checkbox-col"><input type="checkbox" className="form-check-input" /></th>
                                <th>Room</th>
                                <th>Room Type</th>
                                <th>Patient Name</th>
                                <th>Allotment Date</th>
                                <th>Discharge Date</th>
                                <th>Doctor Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockAllotments.map((allotment) => (
                                <tr key={allotment.id}>
                                    <td className="checkbox-col"><input type="checkbox" className="form-check-input" /></td>
                                    <td>{allotment.room}</td>
                                    <td>{allotment.roomType}</td>
                                    <td>{allotment.patient}</td>
                                    <td>{allotment.allotmentDate}</td>
                                    <td>{allotment.dischargeDate}</td>
                                    <td>{allotment.doctor}</td>
                                    <td>{getStatusBadge(allotment.status)}</td>
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
                <div className="d-flex justify-content-start align-items-center mt-4 action-bar-bottom">
                    {/* Export Icons */}
                    <div className="export-icons d-flex me-auto">
                        <a href="#" className="text-muted export-link me-3"><i className="fas fa-file-csv me-1"></i> CSV</a>
                        <a href="#" className="text-muted export-link me-3"><i className="fas fa-print me-1"></i> print</a>
                        <a href="#" className="text-muted export-link me-3"><i className="fas fa-file-pdf me-1"></i> PDF</a>
                        <a href="#" className="text-muted export-link"><i className="fas fa-file-excel me-1"></i> Excel</a>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="ms-auto">
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
