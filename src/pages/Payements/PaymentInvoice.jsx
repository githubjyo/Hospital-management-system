import React from 'react'
import Navbar from '../../components/Header'
import "../../common.css"
import "./PaymentInvoice.css"
import procliniclogo from "../../assets/images/pro_logo-dark.png"
// Mock Data structure
const invoiceData = {
    invoiceNum: 123,
    date: 'Nov 16, 2018',
    patient: {
        id: 'PI675',
        name: 'Daniel',
        age: 20,
        address: '60-21/100, Smith street\nBanglore, India',
        phone: '+91 12345 67890',
        totalDays: 10,
        paymentType: 'Credit Card',
        paymentDetails: '1234 5678 9012 3456\nPaypal'
    },
    services: [
        { id: 1, service: 'Chest X-ray', unitCost: 120, discount: 10, total: 108 },
        { id: 2, service: 'Injury Operation', unitCost: 1000, discount: 20, total: 800 },
    ],
    summary: {
        subtotal: 1200,
        tax: 50,
        discount: 212,
        grandTotal: 1038
    },
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequuntur id illo incidunt, iste libero quisquam? A aut cumque fuga fugit iusto libero officii quasi, quisquam saepe voluptate voluptatibus voluptatum.'
};

export const PaymentInvoice = () => {
    // Helper function to format currency
    const formatCurrency = (amount) => `$${amount}`;
  return (
     <>
    <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>Payment Invoice</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn">Add Payment</button>&nbsp;
            </div>
          </div>
     
         <div className="dashboard-bg container-fluid py-4">

            <div className="invoice-container container">
            <div className="invoice-box card p-5 shadow-sm">
                
                {/* Header Section: Logo, Clinic Info, Invoice Details */}
                <div className="d-flex justify-content-between align-items-start mb-5 invoice-header">
                    {/* Left: Clinic Info */}
                    <div>
                        <div className="proclinic-logo d-flex align-items-center mb-3">
                            {/* <i className="fas fa-notes-medical me-2 text-primary fa-2x"></i> */}
                            {/* Replaced 'ProClinic' text with an img tag */}
                            <img src={procliniclogo} alt="ProClinic Logo" className="clinic-logo-img" /> 
                            {/* You might want to adjust the alt text and className */}
                        </div>
                        <address className="clinic-address">
                            Street Address<br />
                            [City, ST ZIP Code]<br />
                            Phone: +00 123456. Fax: 432 1231 3456
                        </address>
                    </div>

                    {/* Right: Invoice Number & Date */}
                    <div className="text-end invoice-details">
                        <h2 className="text-secondary text-uppercase mb-0">Invoice</h2>
                        <p className="mb-1">Invoice # <strong>[ {invoiceData.invoiceNum} ]</strong></p>
                        <p className="mb-0">Date: {invoiceData.date}</p>
                    </div>
                </div>

                {/* Patient Details Section */}
                <div className="row patient-details-section mb-4">
                    <div className="col-md-6 patient-details-col">
                        <h6 className="section-title text-danger">PATIENT DETAILS:</h6>
                        <p><strong>Name:</strong> {invoiceData.patient.name}</p>
                        <p><strong>Age:</strong> {invoiceData.patient.age}</p>
                        <p><strong>Address:</strong> {invoiceData.patient.address.replace('\n', ', ')}</p>
                        <p><strong>Phone:</strong> {invoiceData.patient.phone}</p>
                    </div>
                    <div className="col-md-6 patient-info-col">
                        <p><strong>Patient ID:</strong> {invoiceData.patient.id}</p>
                        <p><strong>Total Days:</strong> {invoiceData.patient.totalDays}</p>
                        <p><strong>Payment Type:</strong> {invoiceData.patient.paymentType}</p>
                        <p>{invoiceData.patient.paymentDetails.replace('\n', ', ')}</p>
                    </div>
                </div>

                {/* Services Table Section */}
                <div className="services-section mt-5">
                    <h6 className="section-title text-secondary">Services:</h6>
                    
                    <div className="table-responsive">
                        <table className="table services-table table-borderless">
                            <thead className="table-light">
                                <tr>
                                    <th className="w-5">#</th>
                                    <th>Service</th>
                                    <th>Unit Cost</th>
                                    <th>Discount (%)</th>
                                    <th className="text-end">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoiceData.services.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.service}</td>
                                        <td>{formatCurrency(item.unitCost)}</td>
                                        <td>{item.discount}</td>
                                        <td className="text-end fw-bold">{formatCurrency(item.total)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Summary and Notes */}
                <div className="row mt-4">
                    <div className="col-md-7">
                        {/* Note Block */}
                        <div className="note-block p-3">
                            <strong>Note:</strong> {invoiceData.note}
                        </div>
                        <p className="signature-line mt-4 pt-3">Signature</p>
                    </div>

                    {/* Summary Table */}
                    <div className="col-md-5">
                        <table className="table summary-table">
                            <tbody>
                                <tr>
                                    <td>Total</td>
                                    <td className="text-end">{formatCurrency(invoiceData.summary.subtotal)}</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td className="text-end">{formatCurrency(invoiceData.summary.tax)}</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td className="text-end text-danger">{formatCurrency(invoiceData.summary.discount)}</td>
                                </tr>
                                <tr className="grand-total-row">
                                    <td className="fw-bold">GRAND TOTAL</td>
                                    <td className="text-end fw-bold">{formatCurrency(invoiceData.summary.grandTotal)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Print/PDF Buttons */}
                <div className="text-center mt-5 print-buttons">
                    <button className="btn btn-outline-secondary me-3"><i className="fas fa-print me-2"></i>print</button>
                    <button className="btn btn-outline-secondary"><i className="fas fa-file-pdf me-2"></i>PDF</button>
                </div>

            </div>
        </div>
            </div>
         </div>
   </>
  )
}
