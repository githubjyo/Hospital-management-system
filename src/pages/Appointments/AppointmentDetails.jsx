import React from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./AppointmentDetails.css"
const appointmentDetails = {
    patientId: "PT56",
    department: "Dental",
    doctorName: "Dr Kiran Sharma",
    appointmentDate: "16-Nov-2018",
    timeSlot: "10AM-11AM",
    tokenNumber: 27,
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis egestas aliquet. Nunc ullamcorper massa in magna pulvinar, a eleifend felis condimentum."
};

export const AppointmentDetails = () => {
  return (
     <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>Appointment Details</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">All Appointment</button>&nbsp;
            </div>
          </div>
     
         <div className="dashboard-bg container-fluid py-4">
              <div className="container-fluid details-container p-4">
            <div className="card-box appointment-details-card">
                <h5 className="card-title-pink">Appointment Details</h5>
                
                {/* Details List */}
                <div className="detail-list">
                    {Object.entries(appointmentDetails).map(([key, value]) => (
                        <div className="detail-item row" key={key}>
                            <div className="col-4 col-md-3 detail-label text-capitalize">
                                {/* Format key: patientId -> Patient ID */}
                                {key.replace(/([A-Z])/g, ' $1')}
                            </div>
                            <div className="col-8 col-md-9 detail-value">
                                {/* Use a separate span/div for long text like problem */}
                                {key === 'problem' ? <div className="problem-text">{value}</div> : value}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Export Options */}
                <div className="export-actions mt-4 mb-3">
                    <span className="export-link me-3">⬇️ CSV</span>
                    <span className="export-link me-3">🖨️ print</span>
                    <span className="export-link me-3">📄 PDF</span>
                    <span className="export-link">📊 Excel</span>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons-row">
                    <button className="btn btn-edit-appointment me-2">
                        {/* Placeholder icon for Edit */}
                        <span className="me-1">✏️</span> Edit Appointment
                    </button>
                    <button className="btn btn-delete-appointment">
                        {/* Placeholder icon for Delete */}
                        <span className="me-1">🗑️</span> Delete Appointment
                    </button>
                </div>
            </div>
        </div>
            </div>
         </div>
    </>
  )
}
