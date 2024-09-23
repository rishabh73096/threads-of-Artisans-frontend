import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ShopKeeper() {
  const [user, setUser] = useState({
    Id: "",
    password: "",
    shopkeeperName: "",
    brandName: "",
    email: "",
    contact: "",
    city: "",
    address: "",
    state: "",
    specility: "",
  });

  const MySwal = withReactContent(Swal);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !user.Id ||
      !user.password ||
      !user.shopkeeperName ||
      !user.brandName ||
      !user.email ||
      !user.contact ||
      !user.city ||
      !user.state ||
      !user.specility
    ) {
      MySwal.fire({
        title: "Validation Error!",
        text: "All fields are required",
        icon: "error",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user.email)) {
      MySwal.fire({
        title: "Validation Error!",
        text: "Please enter a valid email address",
        icon: "error",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    // Password validation (Minimum 6 characters)
    if (user.password.length < 6) {
      MySwal.fire({
        title: "Validation Error!",
        text: "Password must be at least 6 characters long",
        icon: "error",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    // Phone number validation (10 digits)
    if (!/^\d{10}$/.test(user.contact)) {
      MySwal.fire({
        title: "Validation Error!",
        text: "Please enter a valid 10-digit phone number",
        icon: "error",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    console.log("form data", user);
    try {
      const url = "http://localhost:3400/shopkeeper/ragister";
      const response = await axios.post(url, user);
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
        setUser({
          Id: "",
          password: "",
          shopkeeperName: "",
          brandName: "",
          email: "",
          contact: "",
          city: "",
          address: "",
          state: "",
          specility: "",
        });
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
            "url(https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          width: "600px",
          height: "630px",
        }}
      >
        <div className="row">
          <div className="col-md-7 col-10 register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Register as a Artisan</h3>
                <form onSubmit={handlSubmit}>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Your ID*"
                          name="Id"
                          autoComplete="current-Id"
                          value={user.Id}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control mb-3"
                          placeholder="Your Password*"
                          autoComplete="current-password"
                          name="password"
                          value={user.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control mb-3"
                          type="text"
                          placeholder="Your ShopkeeperName*"
                          name="shopkeeperName"
                          autoComplete="current-shopkeeperName"
                          value={user.shopkeeperName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control mb-3"
                          type="text"
                          placeholder="Your BrandName*"
                          name="brandName"
                          autoComplete="current-brandName"
                          value={user.brandName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control mb-3"
                          placeholder="Your Email*"
                          autoComplete="current-email"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          minLength="10"
                          maxLength="10"
                          name="contact"
                          className="form-control mb-3"
                          placeholder="Your contact *"
                          value={user.contact}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <select
                          className="form-control"
                          value={user.city}
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
                          value={user.state}
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
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Your specility*"
                          autoComplete="current-specility"
                          name="specility"
                          value={user.specility}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control mb-1"
                          placeholder="Your Address*"
                          name="address"
                          value={user.address}
                          onChange={handleChange}
                        />
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

export default ShopKeeper;