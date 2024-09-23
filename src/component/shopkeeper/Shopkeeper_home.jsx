import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./shopkeeper_home.css";

function ShopKeeper_home() {
  const [profile, setProfile] = useState("");
  const URL = "http://localhost:3400/shopkeeper/profile";
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const token_data = localStorage.getItem("Token_key");
    console.log(`token data is ${token_data}`);

    if (!token_data) {
      // If no value in token data it means user has not logged in
      navigate("/shopkeeper_login");
    } else {
      const params = {
        Id: token_data,
      };

      try {
        const response = await axios.get(URL, { params });
        console.log("name is " + token_data);
        setProfile(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <div className="card-container-s" style={{backgroundImage:"url('https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
        <div className="cards">
          <div className="card-headers">
            Profile
          </div>
          <ul className="list-group list-group-flush">
            {profile && (
              <>
                <li className="list-group-item">Your Name: {profile.shopkeeperName}</li>
                <li className="list-group-item">Your Email: {profile.email}</li>
                <li className="list-group-item">Your PhoneNo: {profile.contact}</li>
                <li className="list-group-item">Your Brand Name: {profile.brandName}</li>
                <li className="list-group-item">Your City: {profile.city}</li>
                <li className="list-group-item">Your Address: {profile.address}</li>
                <li className="list-group-item">Your State: {profile.state}</li>
                <li className="list-group-item">Your Specialty: {profile.specility}</li>
                <Link to="/shopkeeper_section/editprofile" className="bg-light">
                  <i className="fas fa-edit edit-icon m-2 fs-3"></i>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ShopKeeper_home;
