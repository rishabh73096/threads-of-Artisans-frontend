import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./shopkeeper_home.css"; // Import CSS file
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { URL } from "../URL/URL";

function ShopKeeper_editProfile() {
  const [profile, setProfile] = useState({
    shopkeeperName: "",
    brandName: "",
    email: "",
    contact: "",
    city: "",
    address: "",
    state: "",
    specility: "",
  });
  const BackendURL = URL()
  const Url = `${BackendURL}/shopkeeper/profile`;
  const EDIT_URL = `${BackendURL}/shopkeeper/edit_profile`;
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const token_data = localStorage.getItem("Token_key");
    console.log(`token data is ${token_data}`);

    if (!token_data) {
      navigate("/shopkeeper_login");
    } else {
      const params = {
        Id: token_data,
      };

      try {
        const response = await axios.get(Url, { params });
        console.log("name is " + token_data);
        setProfile(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  }
  const MySwal = withReactContent(Swal)
  // Handle change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(EDIT_URL, profile);
      if (response.data.acknowledged) 
     // alert("Profile updated successfully");
      MySwal.fire({
        title: "Profile updated successfully",
        icon: "success",
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000, // Auto close after 3 seconds
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-containers bg-light" style={{backgroundImage:"url('https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
        <div className="cards  bg-light">
          <div className="card-headers">
            Edit Profile
          </div>
          <div className="card-body">
            <div className="form-group m-2">
              <label htmlFor="shopkeeperName">Your Name:</label>
              <input
                type="text"
                name="shopkeeperName"
                value={profile.shopkeeperName}
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
              <label htmlFor="email">Your Email:</label>
              <input
                type="contact"
                name="contact"
                value={profile.contact}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="email">Your BrandName:</label>
              <input
                type="brandName"
                name="brandName"
                value={profile.brandName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="email">Your City:</label>
              <input
                type="city"
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="email">Your State:</label>
              <input
                type="state"
                name="state"
                value={profile.state}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="email">Your specility:</label>
              <input
                type="specility"
                name="specility"
                value={profile.specility}
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
  );
}

export default ShopKeeper_editProfile;
