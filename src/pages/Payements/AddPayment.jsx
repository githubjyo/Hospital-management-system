import React, { useState } from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./AddPayment.css"
export const AddPayment = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        patientName: '',
        department: 'Neuro', // Default value
        doctorName: '',
        admissionDate: '',
        dischargeDate: '',
        discount: '',
        advancePaid: '',
        paymentType: 'Check', // Default value
        cardCheckNo: '',
        isConfirmed: false,
    });
    const [services, setServices] = useState([{ name: '', cost: '' }]);
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setStatus(null); // Clear status on change
    };

    const handleServiceChange = (index, e) => {
        const { name, value } = e.target;
        const newServices = services.map((service, i) => (
            i === index ? { ...service, [name]: value } : service
        ));
        setServices(newServices);
    };

    const addService = () => {
        setServices([...services, { name: '', cost: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation logic shown in the screenshot
        if (!formData.isConfirmed) {
            setStatus('error');
            return;
        }

        // --- Simulated Submission ---
        console.log('Form Submitted:', { formData, services });
        
        // Reset form and show success
        setFormData({
            patientId: '',
            patientName: '',
            department: 'Neuro',
            doctorName: '',
            admissionDate: '',
            dischargeDate: '',
            discount: '',
            advancePaid: '',
            paymentType: 'Check',
            cardCheckNo: '',
            isConfirmed: false,
        });
        setServices([{ name: '', cost: '' }]);
        setStatus('success');
    };
    
    // Close status message
    const handleCloseStatus = () => setStatus(null);
  return (
   <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>All Appointment</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">Add Payment</button>&nbsp;
            </div>
          </div>
     
         <div className="dashboard-bg container-fluid py-4">

             <div className="add-payment-container container">
            {/* Header */}
            <h4 className="form-header">Add Payment</h4>

            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                
                {/* 1. PATIENT DETAILS SECTION */}
                <div className="section-block">
                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Patient ID</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Patient ID" 
                                name="patientId" 
                                value={formData.patientId}
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Patient Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Patient Name" 
                                name="patientName" 
                                value={formData.patientName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Department</label>
                            <select 
                                className="form-select" 
                                name="department" 
                                value={formData.department}
                                onChange={handleChange}
                                required
                            >
                                <option value="Neuro">Neuro</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Orthopedic">Orthopedic</option>
                            </select>
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
                    
                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Admission Date</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                name="admissionDate" 
                                value={formData.admissionDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Discharge Date</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                name="dischargeDate" 
                                value={formData.dischargeDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div> {/* End Patient Details Section */}


                {/* 2. SERVICES SECTION */}
                <div className="section-block mt-4">
                    <h5 className="section-title">Services</h5>
                    <div className="row g-3 mb-2 header-row">
                        <div className="col-md-6 fw-bold">Service Name</div>
                        <div className="col-md-6 fw-bold">Cost of Treatment</div>
                    </div>
                    
                    {services.map((service, index) => (
                        <div className="row g-3 mb-3" key={index}>
                            <div className="col-md-6">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Service Name" 
                                    name="name" 
                                    value={service.name}
                                    onChange={(e) => handleServiceChange(index, e)}
                                />
                            </div>
                            <div className="col-md-6">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Cost of Treatment" 
                                    name="cost" 
                                    value={service.cost}
                                    onChange={(e) => handleServiceChange(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                    
                    <button 
                        type="button" 
                        className="btn btn-success btn-sm mt-2 add-service-btn" 
                        onClick={addService}
                    >
                        + Add Service
                    </button>
                </div> {/* End Services Section */}


                {/* 3. PAYMENT SECTION */}
                <div className="section-block mt-4 pt-4 border-top">
                    <h5 className="section-title">Payment</h5>
                    <div className="row g-3 mb-4">
                        <div className="col-md-3">
                            <label className="form-label">Discount (%)</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Discount" 
                                name="discount" 
                                value={formData.discount}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Advance Paid</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Advance Paid" 
                                name="advancePaid" 
                                value={formData.advancePaid}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Payment Type</label>
                            <select 
                                className="form-select" 
                                name="paymentType" 
                                value={formData.paymentType}
                                onChange={handleChange}
                                required
                            >
                                <option value="Check">Check</option>
                                <option value="Card">Card</option>
                                <option value="Cash">Cash</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Card/Check No</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Card/Check No" 
                                name="cardCheckNo" 
                                value={formData.cardCheckNo}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div> {/* End Payment Section */}

                {/* CONFIRMATION AND SUBMIT */}
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
                
                <button type="submit" className="btn submit-btn">
                    Submit
                </button>
                
                {/* STATUS MESSAGES */}
                {status === 'success' && (
                    <div className="alert alert-success alert-dismissible fade show mt-4 custom-alert" role="alert">
                        <strong>Successfully Done!</strong> Payment added.
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
