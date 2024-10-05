import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer.jsx";
import Admin_Header from "../admin/Admin_Header.jsx";
import { NavLink } from "react-router-dom";
import { URL } from "../URL/URL.jsx"; // Import URL
import "./AdminHome.css";

const AdminHome = () => {
  const BackendURL = URL(); // Set the BackendURL

  const [userCount, setUserCount] = useState(0); // Initialize user count state to 0
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Fetch contact count
    axios
      .get(`${BackendURL}/admin/getTotalContactCount`) // Use BackendURL
      .then((response) => {
        setEventCount(response.data.count);
      })
      .catch((error) => {
        console.error("Error fetching upcoming events count:", error);
      });

    // Fetch total feedback count from the backend API
    axios
      .get(`${BackendURL}/admin/getTotalFeedbackCount`) // Use BackendURL
      .then((response) => {
        setFeedbackCount(response.data.count);
      })
      .catch((error) => {
        console.error("Error fetching total feedback count:", error);
      });

    // Fetch user count from the backend API
    axios
      .get(`${BackendURL}/Customer/getUserCount`) // Use BackendURL
      .then((response) => {
        setUserCount(response.data.count);
      })
      .catch((error) => {
        console.error("Error fetching user count:", error);
      });

    // Simulated recent activities
    setRecentActivities([
      { id: 1, action: "Added New event: Art Exhibition" },
      { id: 2, action: "Received Feedback from Suraj Sharma" },
    ]);
  }, [BackendURL]); // Add BackendURL as a dependency

  return (
    <>
      <Admin_Header />
      <div className="container-fluid">
        <div className="p-1">
          <div className="divider d-flex align-items-center my-4 text-dark">
            <h4 className="text-center fs-3 mx-3 mb-0"> Admin Dashboard</h4>
          </div>
          {/* <!-- Overview Section --> */}
          <div className="bg-white rounded-lg shadow-sm mb-2">
            <div className="p-2">
              <h2 className="fs-5 font-weight-bold mb-3">Overview</h2>
              <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                  <div className="TRC rounded-3 p-3 text-center">
                    <h3 className="fs-5 font-weight-bold ">Total Registered Customers</h3>
                    <p className="text-3xl font-weight-bold">{userCount}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="TF rounded-3 p-3 text-center">
                    <h3 className="fs-5 font-weight-bold ">Total Feedbacks</h3>
                    <p className="text-2xl font-weight-bold">{feedbackCount}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="UE rounded-3 p-3 text-center">
                    <h3 className="fs-5 font-weight-bold ">Total Contacts</h3>
                    <p className="text-2xl font-weight-bold">{eventCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Recent Activities Section --> */}
          <div className="bg-white rounded-lg shadow-sm mb-4">
            <div className="p-4">
              <h2 className="fs-5 font-weight-bold mb-3">Recent Activities</h2>
              <ul className="list-group">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="list-group-item py-2">{activity.action}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* <!-- Quick Actions Section --> */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4">
              <h2 className="fs-5 font-weight-bold mb-3">Quick Actions</h2>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <NavLink className="btn btn-primary btn-block rounded-md w-100" to="/admin/EventsDetails">Add New Event</NavLink>
                </div>
                <div className="col">
                  <NavLink className="btn btn-success btn-block rounded-md w-100" to="/admin/Allcontact">View Contact Details</NavLink>
                </div>
                <div className="col">
                  <NavLink className="btn btn-warning btn-block rounded-md w-100" to="/admin/AllFeedback">View Feedback Details</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminHome;
