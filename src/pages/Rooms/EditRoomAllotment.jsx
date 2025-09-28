import React, { useState } from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./EditRoomAllotment.css"
const mockEditData = {
    roomNumber: '10',
    roomType: 'General',
    patientName: 'Damodar Reddy',
    allotmentDate: '2018-10-10', // YYYY-MM-DD format for date input
    dischargeDate: '2018-10-16',
    doctorName: 'Dr Manoj Kumar',
};

export const EditRoomAllotment = () => {
    // Initialize state with mock data
    const [formData, setFormData] = useState(mockEditData);
    const [status, setStatus] = useState(null); // 'updated', 'error', or null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setStatus(null); // Clear status on any input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // --- Simulated Submission/Validation ---
        console.log('Updated Allotment:', formData);
        
        // Simulate successful update
        setStatus('updated');

        // To simulate error, you might add a condition here:
        // if (formData.roomNumber === '') setStatus('error');
    };

    // Close status message
    const handleCloseStatus = () => setStatus(null);

  return (
      <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>Edit Room Allotment</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">All Rooms</button>&nbsp;
            </div>
          </div>
            
         <div className="dashboard-bg container-fluid py-4">
            
        <div className="edit-room-allotment-container container">
            <h4 className="mb-4 form-header">Edit Room Allotment</h4>

            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                {/* Room Details */}
                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Room Number</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="roomNumber" 
                            value={formData.roomNumber}
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Room Type</label>
                        <select 
                            className="form-select" 
                            name="roomType" 
                            value={formData.roomType}
                            onChange={handleChange}
                            required
                        >
                            <option value="General">General</option>
                            <option value="ICU">ICU</option>
                            <option value="Private Room">Private Room</option>
                            <option value="Semi-Private">Semi-Private</option>
                        </select>
                    </div>
                </div>

                {/* Patient and Allotment Date */}
                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Patient Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="patientName" 
                            value={formData.patientName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Allotment Date</label>
                        <div className="input-group">
                            <input 
                                type="date" 
                                className="form-control" 
                                name="allotmentDate" 
                                value={formData.allotmentDate}
                                onChange={handleChange}
                                required
                            />
                            <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                        </div>
                    </div>
                </div>

                {/* Discharge Date and Doctor Name */}
                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Discharge Date</label>
                        <div className="input-group">
                            <input 
                                type="date" 
                                className="form-control" 
                                name="dischargeDate" 
                                value={formData.dischargeDate}
                                onChange={handleChange}
                            />
                            <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Doctor Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="doctorName" 
                            value={formData.doctorName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
                {/* Submit Button */}
                <button type="submit" className="btn submit-btn">
                    Updated
                </button>
                
                {/* Status Messages */}
                {status === 'updated' && (
                    <div className="alert alert-success alert-dismissible fade show mt-4 custom-alert" role="alert">
                        <strong>Updated Successfully!</strong> Please check in Allotment list
                        <button type="button" className="btn-close" onClick={handleCloseStatus}></button>
                    </div>
                )}
                
                {status === 'error' && (
                    <div className="alert alert-warning alert-dismissible fade show mt-4 custom-alert" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" className="btn-close" onClick={handleCloseStatus}></button>
                    </div>
                )}
            </form>
        </div>
            </div>
            </div>
            </>
  )
}
