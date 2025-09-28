import React, { useState } from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./AddAppointments.css"

export const AddAppointments = () => {
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
            <div className='col-md-6'><h3 className='block-title'>Add Appointment</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">All Appointment</button>&nbsp;
            </div>
          </div>
     
         <div className="dashboard-bg container-fluid py-4">
             <div className="form-container">
                <div className="form-title">Add Appointment</div>
                
                <form onSubmit={handleSubmit}>
                    {/* Row 1: Patient Name & Date of Birth */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="patientId" className="form-label">Patient ID</label>
                            <input type="text" className="form-control" id="patientId" placeholder="Patient ID" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="department" className="form-label">Department</label>
                            
                                <input type="text" className="form-control" id="department" placeholder="Department" />
                               
                            
                        </div>
                    </div>

                    {/* Row 2: Age & Phone */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="doctorName" className="form-label">Doctor Name</label>
                            <input type="text" className="form-control" id="doctorName" placeholder="Doctor Name" />
                        </div>
                         <div className="col-md-6">
                            <label htmlFor="appointmentdate" className="form-label">Appointment Date</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="appointmentdate" placeholder="dd-mm-yyyy" />
                                {/* Using Bootstrap's input-group-text for the calendar icon */}
                                <span className="input-group-text">📅</span> 
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Email & Gender */}
                    <div className="row mb-3">
                           <div className="col-md-6">
                            <label htmlFor="timeSlot" className="form-label">Time-Slot</label>
                            <select className="form-select" id="gender" defaultValue="10AM-11Am">
                                <option value="11AM-12PM">11AM-12PM</option>
                                <option value="12PM-1PM">11AM-12PM</option>
                                <option value="1PM-2PM">11AM-12PM</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="tokennumber" className="form-label">Token Number(auto generate)</label>
                            <input type="number" className="form-control" id="tokennumber" placeholder="Token Number" />
                        </div>
                     
                    </div>

                    {/* Row 4: Address (Full Width) */}
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Problem</label>
                        <textarea className="form-control" id="address" rows="3" placeholder="Address"></textarea>
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
                            <strong>Successfully Done!</strong>Appointment token Generated
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
