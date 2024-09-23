import "./Customer.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { URL } from "../URL/URL.jsx";
function Customer() {
  const [Customer, setCustomer] = useState({
    Name: "",
    Id: "",
    email: "",
    password: "",
    phoneno: "",
    city: "",
    state: "",
    address: "",
  });

  const error_message = {};
  let [error, setError] = useState({});

  const checkEmpty = () => {
    // Clear previous errors
    setError({});

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const Idregex = /^\d+$/;

    // Check if Name is empty or not a valid string
    if (!Customer.Name || !nameRegex.test(Customer.Name)) {
      error_message.Name = "Valid Name is Required ";
    }

    // Check if Id is empty
    if (!Customer.Id || !Idregex.test(Customer.Id)) {
      error_message.Id = " valid Id is Required";
    }

    // Check if email is empty or not in a valid format
    if (!Customer.email || !emailRegex.test(Customer.email)) {
      error_message.email = "Valid Email is Required";
    }

    // Check if password is empty or doesn't meet the format requirements
    if (!Customer.password || !passwordRegex.test(Customer.password)) {
      error_message.password =
        "Password is Required and should contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long";
    }

    // Check if phoneno is empty
    if (!Customer.phoneno) {
      error_message.phone = "Phoneno is Required";
    }

    // Check if city is empty
    if (!Customer.city) {
      error_message.city = "City is Required";
    }

    // Check if state is empty
    if (!Customer.state) {
      error_message.state = "State is Required";
    }

    // Check if address is empty
    if (!Customer.address) {
      error_message.address = "Address is Required";
    }

    // Set errors if any
    setError(error_message);
  };

  const MySwal = withReactContent(Swal);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...Customer, [name]: value });
  };

  const handlSubmit = async (e) => {
    e.preventDefault();
    console.log("from customer data", Customer);

    try {
      const BackendURL=URL();
   const url = `${BackendURL}/Customer/Customer_ragister`;
      checkEmpty();
      if (Object.keys(error_message).length > 0) {
        setError(error_message);
      } else {
        const response = await axios.post(url, Customer);
        console.log(response);
        if (response.data == "ID is already registered") {
          MySwal.fire({
            title: "Registration Error",
            text: "ID is already registered. Please use another ID.",
            icon: "error",
          });
        } else {
          MySwal.fire({
            title: "Registration done!",
            text: response.data,
            icon: "success",
          });
          setCustomer({
            Name: "",
            Id: "",
            email: "",
            password: "",
            phoneno: "",
            city: "",
            state: "",
            address: "",
          });
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div
        className="w-100"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1611987583184-1ddc69fbd5ee?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="row">
          <div className="col-md-7 col-lg-7 col-10  register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Register as a Customer</h3>
                <form onSubmit={handlSubmit}>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control mb-3"
                          type="text"
                          placeholder="Your Name*"
                          name="Name"
                          autoComplete="current-Name"
                          value={Customer.Name}
                          onChange={handleChange}
                        />
                        {error.Name && (
                          <span style={{ color: "black" }}>{error.Name}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Your ID*"
                          name="Id"
                          autoComplete="current-Id"
                          value={Customer.Id}
                          onChange={handleChange}
                        />
                        {error.Id && (
                          <span style={{ color: "black" }}>{error.Id}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control mb-3"
                          placeholder="Your Email*"
                          autoComplete="current-email"
                          name="email"
                          value={Customer.email}
                          onChange={handleChange}
                        />
                        {error.email && (
                          <span style={{ color: "black" }}>{error.email}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control mb-3"
                          placeholder="Your Password*"
                          autoComplete="current-password"
                          name="password"
                          value={Customer.password}
                          onChange={handleChange}
                        />
                        {error.password && (
                          <span style={{ color: "black" }}>
                            {error.password}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          minLength="10"
                          maxLength="10"
                          name="phoneno"
                          className="form-control mb-3"
                          placeholder="Your Phone *"
                          value={Customer.phoneno}
                          onChange={handleChange}
                        />
                        {error.phoneno && (
                          <span style={{ color: "black" }}>
                            {error.phoneno}
                          </span>
                        )}
                      </div>
                      <div className="form-group mb-3">
                        <select
                          className="form-control"
                          value={Customer.city}
                          onChange={handleChange}
                          name="city"
                        >
                          <option selected>Your City*</option>
                          <option>Pratapgarh</option>
                          <option>Sultanpur</option>
                          <option>Lucknow</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <select
                          className="form-control"
                          value={Customer.state}
                          onChange={handleChange}
                          name="state"
                        >
                          <option selected>Your State*</option>
                          <option>Uttar Pradesh</option>
                          <option>Delhi</option>
                          <option>Mumbai</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Your Address*"
                          name="address"
                          value={Customer.address}
                          onChange={handleChange}
                        />
                        {error.address && (
                          <span style={{ color: "black" }}>
                            {error.address}
                          </span>
                        )}
                      </div>
                      <button className="btnRegister btn-lg" type="submit">
                        Ragister
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
