import React, { useState } from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./AddDoctor.css"
export const AddDoctor = () => {
     const [showAlerts, setShowAlerts] = useState(true);
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission logic here
            setShowAlerts(true);
        };
  return (
    <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>Add Doctor</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">All Doctor</button>&nbsp;
            </div>
          </div>
     
         <div className="dashboard-bg container-fluid py-4">
            <div className="form-container">
                <div className="form-title">Add Doctor</div>
                
                <form onSubmit={handleSubmit}>
                    {/* Row 1: Patient Name & Date of Birth */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="doctorName" className="form-label">Doctor Name</label>
                            <input type="text" className="form-control" id="doctorName" placeholder="Doctor name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="dob" className="form-label">Date Of Birth</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="dob" placeholder="dd-mm-yyyy" />
                                {/* Using Bootstrap's input-group-text for the calendar icon */}
                                <span className="input-group-text">📅</span> 
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Age & Phone */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" className="form-control" id="age" placeholder="Age" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                        </div>
                    </div>

                    {/* Row 3: Email & Gender */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select className="form-select" id="gender" defaultValue="Male">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Row 4: Address (Full Width) */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                        <label htmlFor="doctorDetail" className="form-label">Doctor Detail</label>
                        <textarea className="form-control" id="doctorDetail" rows="3" placeholder="doctorDetail"></textarea>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="address" className="form-label">Address</label>
                        <textarea className="form-control" id="address" rows="3" placeholder="Address"></textarea>
                        </div>
                    </div>
                    
                    {/* Row 5: File Upload (Full Width) */}
                    <div className="mb-4">
                        <label htmlFor="file" className="form-label">File</label>
                        <input className="form-control" type="file" id="file" />
                    </div>

                    {/* Row 6: Confirmation and Submit */}
                    <div className="mb-4 d-flex align-items-center">
                        <div className="form-check me-3">
                            <input className="form-check-input" type="checkbox" id="confirm" />
                            <label className="form-check-label" htmlFor="confirm">
                                Please Confirm
                            </label>
                        </div>
                        <button type="submit" className="btn btn-submit">
                            Submit
                        </button>
                    </div>
                </form>

                {/* Success Alert */}
                {showAlerts && (
                    <div className="alert alert-success-custom d-flex justify-content-between align-items-center mb-2" role="alert">
                        <span>
                            <strong>Successfully Done!</strong>Please Check in doctors list
                        </span>
                        <button type="button" className="btn-close" onClick={() => setShowAlerts(false)} aria-label="Close"></button>
                    </div>
                )}
                
                {/* Warning Alert */}
                {showAlerts && (
                    <div className="alert alert-warning-custom d-flex justify-content-between align-items-center" role="alert">
                        <span>
                            **Holy guacamole!** You should check in on some of those fields below.
                        </span>
                         <button type="button" className="btn-close" onClick={() => setShowAlerts(false)} aria-label="Close"></button>
                    </div>
                )}
            </div>
         </div>
         </div>
    </>
  )
}
