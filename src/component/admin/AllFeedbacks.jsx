import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as XLSX from "xlsx";
import Footer from "../Footer";
import Admin_Header from "../admin/Admin_Header.jsx"

function AllFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const URL = "http://localhost:3400/admin/allFeedback";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token_data = localStorage.getItem("Token_key");
      if (!token_data) {
        navigate("/admin_login");
      }
      try {
        const response = await axios.get(URL);
        setFeedbacks(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  // Function to export data to Excel
  const exportToExcel = () => {
    // Create a new worksheet
    const worksheet = XLSX.utils.json_to_sheet(feedbacks);
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Feedbacks");
    // Write the workbook to a binary Excel file and trigger the download
    XLSX.writeFile(workbook, "feedbacks.xlsx");
  };

  return (
    <>
      <Admin_Header />
      <div className="table-responsive p-4">
        <div className="divider d-flex align-items-center my-4 text-dark">
          <h4 className="text-center fw-bold mx-3 mb-0"> All Feedbacks</h4>
        </div>
        <button
          className="btn btn-primary mb-3"
          onClick={exportToExcel}
        >
          Export to Excel
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Customer Review</th>
              <th>Email</th>
              <th>Posted by</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.query}</td>
                <td>{feedback.email}</td>
                <td>{feedback.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default AllFeedbacks;
