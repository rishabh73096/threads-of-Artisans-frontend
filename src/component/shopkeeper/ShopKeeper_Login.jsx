import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { URL } from "../URL/URL";

function ShopKeeper_Login() {
  const [user, setUser] = useState({
    Id: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const MySwal = withReactContent(Swal);
  const handleForm = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const BackendURL = URL()
      const url = `${BackendURL}/login/Shopkeeperlogin`;
      const response = await axios.post(url, user);

      if (response.data.code === 200) {
        MySwal.fire({
          title: "Artisan Login Sucessfully !",
          icon: "success",
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000, // Auto close after 3 seconds
        });
        navigate("/shopkeeper_section");
        localStorage.setItem("Token_key", response.data.token);
      } else if (response.data.code === 404) {
        alert("password does not match");
      } else {
        alert("Artisans does not exits");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div
      className=" w-100 "
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/177284/pexels-photo-177284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        height: "600px",
      }}
    >
      <div className="row font-size">
        <div className=" col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <form onSubmit={handleForm}>
                <div className="row register-form">
                  <div className="p-2 p-lg-2 p-sm-2 p-md-1">
                    <center className="text-light fs-4 mb-1">
                      Artisan Login
                    </center>
                    <center className="text-light fs-7 mb-3 ">
                      Welcome ! Plese Enter your details
                    </center>
                    <div>
                      <label className="form-label">Enter Your Id?</label>
                      <input
                        type="text"
                        className="form-control floating-input form-control-lg mb-3 fs-6 fs-sm-6"
                        name="Id"
                        placeholder="Id"
                        autoComplete="current Id"
                        value={user.Id}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        className="form-label me-5 me-sm-3 me-md-5"
                        htmlFor="passwordInput"
                      >
                        Enter Your Password?
                      </label>

                      <input
                        type="password"
                        className="form-control form-control-lg mb-2 fs-6 fs-sm-6"
                        placeholder="Password"
                        name="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        value={user.password}
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="mt-3 btn btn-dark container-fluid mb-2 fs-6 fs-sm-6 fs-lg-6"
                      >
                        Login
                      </button>

                      <p className="mt-3 mb-1 fs-6 fs-sm-6 fs-lg-6">
                        Do not have a Account
                        <NavLink
                          className="text-light ms-3 ms-sm-4 ms-md-5"
                          to="/shopkeeper"
                        >
                          {" "}
                          Create Account{" "}
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopKeeper_Login;
