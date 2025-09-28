import React from 'react'
import "../../common.css"
import Navbar from '../../components/Header'
import "./PatientDetails.css"
import { useNavigate } from 'react-router-dom';

// --- Data Structures ---

const patientDetails = {
  name: "Daniel Smith",
  dob: "26-10-1989",
  gender: "Male",
  address: "Koramangala Bangalore, India",
  phone: "+91 11111 11111",
  email: "your@email.com"
};

const patientVisits = [
  { doctor: "Manoj Kumar", cost: 30, date: "12-03-2018", status: "Rescheduled" },
  { doctor: "Riya", cost: 36, date: "12-10-2018", status: "Operation" },
  { doctor: "Paul", cost: 46, date: "45-10-2018", status: "Fever" },
  { doctor: "Manoj Kumar", cost: 30, date: "12-03-2018", status: "Ortho" },
  { doctor: "Riya", cost: 26, date: "12-10-2018", status: "General Check-up" },
  { doctor: "Paul", cost: 46, date: "45-10-2018", status: "Injury" },
];

const paymentTransactions = [
  { date: "12-03-2018", cost: 300, discount: "15%", type: "Check", status: "Pending" },
  { date: "12-03-2018", cost: 130, discount: "5%", type: "Credit Card", status: "Completed" },
  { date: "12-03-2018", cost: 30, discount: "5%", type: "Credit Card", status: "Cancelled" },
  { date: "12-03-2018", cost: 30, discount: "5%", type: "Cash", status: "Completed" },
  { date: "12-03-2018", cost: 30, discount: "5%", type: "Credit Card", status: "Completed" },
  { date: "12-03-2018", cost: 30, discount: "5%", type: "Insurance", status: "Completed" },
  { date: "12-03-2018", cost: 30, discount: "5%", type: "Credit Card", status: "Completed" },
];

// Helper function for status badges
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

export const PatientDetails = () => {
 const navigate = useNavigate();
     const goToAllPatientPage = () => {
        navigate('/allpatient'); // Navigate to the '/about' path
      };
  // --- Patient Details Card Component ---
  const PatientDetailsCard = () => (
    <div className="card-box details-card">
      <h5 className="card-title-custom">Patient Details</h5>
      <div className="detail-list">
        {Object.entries(patientDetails).map(([key, value]) => (
          <div className="detail-item row" key={key}>
            <div className="col-5 detail-label text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
            <div className="col-7 detail-value">{value}</div>
          </div>
        ))}
      </div>

      <div className="export-controls mt-3">
        <button className="btn btn-edit-patient me-2">
          {/* Placeholder icon for Edit */}
          <span className="me-1">✏️</span> Edit Patient
        </button>
        <button className="btn btn-delete-patient me-2">
          {/* Placeholder icon for Delete */}
          <span className="me-1">🗑️</span> Delete Patient
        </button>
        <button className="btn btn-download">
          {/* Placeholder icon for Download */}
          <span className="me-1">⬇️</span> Download File
        </button>
      </div>
    </div>
  );

  // --- Patient Visits Table Component ---
  const PatientVisitsTable = () => (
    <div className="card-box visits-card">
      <h5 className="card-title-custom">Patient Visits</h5>
      <div className="table-responsive">
        <table className="table table-hover table-sm data-table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Cost</th>
              <th>Visit Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patientVisits.map((visit, index) => (
              <tr key={index}>
                <td>{visit.doctor}</td>
                <td>${visit.cost}</td>
                <td>{visit.date}</td>
                <td>{visit.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="export-actions">
        <span className="me-3">⬇️ CSV</span>
        <span className="me-3">🖨️ print</span>
        <span className="me-3">📄 PDF</span>
        <span>📊 Excel</span>
      </div>
    </div>
  );

  // --- Payment Transactions Table Component ---
  const PaymentTransactionsTable = () => (
    <div className="card-box transactions-card mt-4">
      <h5 className="card-title-custom">Patient Payment Transactions</h5>
      <div className="table-responsive">
        <table className="table table-hover table-sm data-table transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Cost</th>
              <th>Discount</th>
              <th>Payment Type</th>
              <th>Involve</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentTransactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.date}</td>
                <td>${tx.cost}</td>
                <td>{tx.discount}</td>
                <td>{tx.type}</td>
                <td>
                  <button className="btn btn-sm btn-invoice">
                    {/* Placeholder icon */}
                    <span className="me-1">⬇️</span> Invoice
                  </button>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(tx.status)}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="export-actions">
        <span className="me-3">⬇️ CSV</span>
        <span className="me-3">🖨️ print</span>
        <span className="me-3">📄 PDF</span>
        <span>📊 Excel</span>
      </div>
    </div>
  );
  return (
    <>
      <div className="flex-grow-1">
        <Navbar />
        <div className='row main-heading'>
          <div className='col-md-6'><h3 className='block-title'>Patient Details</h3></div>
          <div className='col-md-6 text-end px-0'>
            <button type="button" className="round-btn" onClick={goToAllPatientPage}>All Patients</button>&nbsp;
          </div>
        </div>
        <div className="dashboard-bg container-fluid py-4">

          {/* Top Row: Details and Visits */}
          <div className="row">
            <div className="col-md-5">
              <PatientDetailsCard />
            </div>
            <div className="col-md-7">
              <PatientVisitsTable />
            </div>
          </div>

          {/* Bottom Row: Transactions */}
          <div className="row">
            <div className="col-12">
              <PaymentTransactionsTable />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
