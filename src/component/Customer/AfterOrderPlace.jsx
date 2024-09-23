import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import Swal from "sweetalert2";
import "./AfterOrderPlace.css"; // Import CSS file for custom styles

function AfterOrderPlace() {
  // Show a success message using SweetAlert
  Swal.fire({
    title: "Order Placed Successfully!",
    icon: "success",
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000 // Auto close after 3 seconds
  });

  return (
    <div className="after-order-container">
      <div className="after-order-content">
        <h2 className="after-order-title">Order Placed Successfully!</h2>
        <p className="after-order-text">Thank you for your purchase.</p>
        <Link to="/Customer_home/ShowProduct" className="btn btn-primary after-order-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default AfterOrderPlace;
