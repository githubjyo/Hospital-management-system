import React from 'react'
import Sidebar from '../../components/AdSidebar'
import Navbar from '../../components/Header';
import "./AdminDashboard.css"
import "../../common.css"
import { Card, Row, Col } from "react-bootstrap";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  FaUserAlt,
  FaChartBar,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import Linechart from "./Chart/Linechart";
import Barchart from "./Chart/Barchart";
import Dognutchart from "./Chart/Dognutchart";
import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {
   const navigate = useNavigate();

      const goToAddPatientPage = () => {
        navigate('/addpatient'); // Navigate to the '/about' path
      };
      
      const goToNewAppointmentPage = () => {
        navigate('/AddAppointments'); // Navigate to the '/about' path
      };
  const lineData = ({
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "Appointments",
        data: [18, 15, 35, 70, 52],
        borderColor: "#e57498",
        backgroundColor: "#e57498",
        fill: false,
        tension: 0.3,
      },
    ],
  });

  // Bar Chart Data
  const barData = ({
    labels: ["2012", "2014", "2016", "2018"],
    datasets: [
      {
        label: "Patients",
        data: [15, 45, 20, 25],
        backgroundColor: "#ff7f0e",
      },
    ],
  });

  // const doughnutData = ({
  //   labels: ["Completed", "Pending", "Cancelled"],
  //   datasets: [
  //     {
  //       data1: [29, 10, 5],
  //       backgroundColor: ["#20c997", "#ffc107", "#ff6b6b"],
  //       hoverBackgroundColor: ["#1aa179", "#e0a800", "#e63946"],
  //     },
  //   ],
  // });


  return (
    <>
    
        {/* Content Area */}

        <div className="flex-grow-1">
          <Navbar />
          <div className='row main-heading'>
            <div className='col-md-6'><h3 className='block-title'>Admin Dashboard</h3></div>
            <div className='col-md-6 text-end px-0'>
              <button type="button" className="round-btn" onClick={goToAddPatientPage}>Add Patient</button>&nbsp;
              <button type="button" className="round-btn" onClick={goToNewAppointmentPage}>New Appointments</button>
            </div>
          </div>
          {/* Top Cards */}
          <div className="dashboard-bg container-fluid py-4">
            {/* Top stat cards */}
            <Row className="g-3 mb-4">
              {/* Patients */}
              <Col md={4}>
                <Card className="stat-card">
                  <Card.Body className="d-flex align-items-center">
                    <div className="icon-col">
                      <div className="icon-circle pink">
                        <FaUserAlt size={26} />
                      </div>
                    </div>

                    <div className="content-col">
                      <div className="stat-title text-pink">Patients</div>
                      <div className="stat-value value-pink">348</div>
                      <div className="stat-trend trend-up">
                        <FaArrowUp className="trend-icon" />
                        <span>+20% Increased</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Appointments */}
              <Col md={4}>
                <Card className="stat-card">
                  <Card.Body className="d-flex align-items-center">
                    <div className="icon-col">
                      <div className="icon-circle green">
                        <FaChartBar size={26} />
                      </div>
                    </div>

                    <div className="content-col">
                      <div className="stat-title text-success">Appointments</div>
                      <div className="stat-value value-green">1585</div>
                      <div className="stat-trend trend-down">
                        <FaArrowDown className="trend-icon" />
                        <span>-15% Decreased</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Total Revenue */}
              <Col md={4}>
                <Card className="stat-card">
                  <Card.Body className="d-flex align-items-center">
                    <div className="icon-col">
                      <div className="icon-circle orange">
                        <FaDollarSign size={26} />
                      </div>
                    </div>

                    <div className="content-col">
                      <div className="stat-title text-warning">Total Revenue</div>
                      <div className="stat-value value-orange">$7,300</div>
                      <div className="stat-trend trend-up">
                        <FaArrowUp className="trend-icon" />
                        <span>+10% Increased</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Charts */}
            <Row className="g-3">
              <Col md={6}>
                <Card className="chart-card">
                  <Card.Body>
                    <h5 className="chart-title text-pink">Appointments Year by Year</h5>
                    <Linechart key="line-chart" data={lineData} />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="chart-card">
                  <Card.Body>
                    <h5 className="chart-title text-pink">Patients Year by Year</h5>
                    <Barchart key="bar-chart" data={barData}  />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* Appointments Table */}
            <div className="appointment-card card shadow-sm mb-4 mt-3">
              <div className="card-header bg-white">
                <h5 className="card-title text-pink mb-0">Appointments</h5>
              </div>
              <div className="card-body">
                <table className="table table-bordered align-middle text-center mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Patient Name</th>
                      <th>Doctor</th>
                      <th>Check-Up</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rajesh</td>
                      <td>Manoj Kumar</td>
                      <td>Dental</td>
                      <td>12-10-2018</td>
                      <td>12:10PM</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>Riya</td>
                      <td>Daniel</td>
                      <td>Ortho</td>
                      <td>12-10-2018</td>
                      <td>1:10PM</td>
                      <td><span className="badge bg-warning text-dark">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Siri</td>
                      <td>Daniel</td>
                      <td>Ortho</td>
                      <td>12-10-2018</td>
                      <td>1:30PM</td>
                      <td><span className="badge bg-danger">Cancelled</span></td>
                    </tr>
                    <tr>
                      <td>Rajesh</td>
                      <td>Manoj Kumar</td>
                      <td>Dental</td>
                      <td>12-10-2018</td>
                      <td>12:10PM</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>Riya</td>
                      <td>Daniel</td>
                      <td>Ortho</td>
                      <td>12-10-2018</td>
                      <td>1:10PM</td>
                      <td><span className="badge bg-warning text-dark">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Siri</td>
                      <td>Daniel</td>
                      <td>Ortho</td>
                      <td>12-10-2018</td>
                      <td>1:30PM</td>
                      <td><span className="badge bg-danger">Cancelled</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row">
              {/* Appointment Status */}
              {/* <div className="col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title text-pink">Appointments Status</h5>
                    <div className="d-flex justify-content-center">
                      <div style={{ width: "270px", height: "270px" }}>
                        <Dognutchart key="dognut-chart" data={doughnutData}  />
                      </div>
                    </div>

                  </div>
                </div>
              </div> */}

              {/* Doctors Availability */}
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title text-pink">Doctors Availability</h5>
                    <table className="table table-bordered text-center">
                      <thead className="table-light">
                        <tr>
                          <th>Doctor</th>
                          <th>Speciality</th>
                          <th>Availability</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Rajesh</td>
                          <td>Dental</td>
                          <td><span className="badge bg-success">Available</span></td>
                        </tr>
                        <tr>
                          <td>Riya</td>
                          <td>Ortho</td>
                          <td><span className="badge bg-warning text-dark">On Leave</span></td>
                        </tr>
                        <tr>
                          <td>Siri</td>
                          <td>Skin</td>
                          <td><span className="badge bg-danger">Not Available</span></td>
                        </tr>
                        <tr>
                          <td>Rajesh</td>
                          <td>Dental</td>
                          <td><span className="badge bg-success">Available</span></td>
                        </tr>
                        <tr>
                          <td>Siri</td>
                          <td>Skin</td>
                          <td><span className="badge bg-danger">Not Available</span></td>
                        </tr>
                        <tr>
                          <td>Siri</td>
                          <td>Skin</td>
                          <td><span className="badge bg-danger">Not Available</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




    </>
  )
}
