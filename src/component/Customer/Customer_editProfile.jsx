import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Customer_editProfile() {
  const [profile, setProfile] = useState({
    Name: "",
    email: "",
    phoneno: "",
    city: "",
    address: "",
    state: "",
  });
  const URL = "http://localhost:3400/Customer/customer_profile";
  const EDIT_URL = "http://localhost:3400/Customer/edit_profile";
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const token_data = localStorage.getItem("Token_key");
    if (!token_data) {
      navigate("/Customer_login");
    } else {
      const params = {
        Id: token_data,
      };

      try {
        const response = await axios.get(URL, { params });
        setProfile(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const MySwal = withReactContent(Swal)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(EDIT_URL, profile);
      if (response.data.acknowledged) {
        alert("Profile updated successfully");
        MySwal.fire({
          title: "Profile updated successfully",
          icon: "success",
              toast: true,
              position: "bottom-end",
              showConfirmButton: false,
              timer: 3000, // Auto close after 3 seconds
        });
      }
    } catch (err) {
      console.log(err);
      alert("Failed to update profile");
    }
  };

  return (
    <>
     <form onSubmit={handleSubmit}>
      <div className="card-containers" >
        <div className="cards">
          <div className="card-headers">
            Edit Profile
          </div>
          <div className="card-body ">
            <div className="form-group m-2">
              <label htmlFor="Name">Your Name:</label>
              <input
                type="text"
                name="Name"
                value={profile.Name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="">Your Contact:</label>
              <input
                type="contact"
                name="contact"
                value={profile.phoneno}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="">Your City:</label>
              <input
                type="city"
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="">Your State:</label>
              <input
                type="state"
                name="state"
                value={profile.state}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="">Your specility:</label>
              <input
                type="address"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-primary m-2 d-flex justify" type="submit">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}

export default Customer_editProfile;
