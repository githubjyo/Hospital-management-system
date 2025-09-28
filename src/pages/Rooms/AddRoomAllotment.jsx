import React, { useState } from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./AddRoomAllotment.css"
export const AddRoomAllotment = () => {
    const [formData, setFormData] = useState({
        roomNumber: '',
        roomType: 'ICU', // Default value
        patientName: '',
        allotmentDate: '',
        dischargeDate: '',
        doctorName: '',
        isConfirmed: false,
    });
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setStatus(null); // Clear status on any input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation logic (e.g., confirmation checkbox must be checked)
        if (!formData.isConfirmed) {
            setStatus('error');
            return;
        }

        // --- Simulated Submission ---
        console.log('Room Allotment Submitted:', formData);
        
        // Reset form and show success
        setFormData({
            roomNumber: '',
            roomType: 'ICU',
            patientName: '',
            allotmentDate: '',
            dischargeDate: '',
            doctorName: '',
            isConfirmed: false,
        });
        setStatus('success');
    };

    // Close status message
    const handleCloseStatus = () => setStatus(null);
  return (
     <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>Add Room Allotment</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">All Rooms</button>&nbsp;
            </div>
          </div>
            
         <div className="dashboard-bg container-fluid py-4">

            <div className="add-room-allotment-container container">
            <h4 className=" form-header">Add Room Allotment</h4>

            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                {/* Room Details */}
                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Room Number</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Room Number" 
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
                            <option value="ICU">ICU</option>
                            <option value="General Ward">General Ward</option>
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
                            placeholder="Patient Name" 
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
                            placeholder="Doctor Name" 
                            name="doctorName" 
                            value={formData.doctorName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Confirmation Checkbox */}
                <div className="d-flex align-items-center mb-3">
                    <input 
                        type="checkbox" 
                        className="form-check-input me-2" 
                        id="isConfirmed"
                        name="isConfirmed"
                        checked={formData.isConfirmed}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="isConfirmed">
                        Please Confirm
                    </label>
                </div>
                
                {/* Submit Button */}
                <button type="submit" className="btn submit-btn">
                    Allot Room
                </button>
                
                {/* Status Messages */}
                {status === 'success' && (
                    <div className="alert alert-success alert-dismissible fade show mt-4 custom-alert" role="alert">
                        <strong>Successfully Done!</strong> Please check in Allotment list.
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
