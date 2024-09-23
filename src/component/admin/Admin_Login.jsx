import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "../Footer.jsx";

function Admin_Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const error_message = {};
  let [error, setError] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  // client side validation code
  const checkEmpty = () => {
    if (!user.username) {
      error_message.username = "Admin id is Requried";
    }

    if (!user.password) {
      error_message.password = "password is Requried";
    }
  };

  const MySwal = withReactContent(Swal);
  const handleForm = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const url = "http://localhost:3400/admin/login";
      checkEmpty();
      if (Object.keys(error_message).length > 0) {
        setError(error_message);
      } else {
        const response = await axios.post(url, user);
        console.log(response.data);

        setUser({ username: "", password: "" });
        if (response.data.code === 200) {
          // alert("admin exits");
          MySwal.fire({
            title: "Admin Login Successfully!",
            icon: "success",
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000, // Auto close after 3 seconds
          });
          navigate("/admin"); // define in main.js
          localStorage.setItem("Token_key", response.data.token);
        } else if (response.data.code === 404) {
          alert("password does not match");
        } else {
          alert("admin does not exits ");
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div
        className=" w-100"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1465631494067-3e0491e95bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          height: "500px",
        }}
      >
        <div className="row">
          <div className=" col-8 col-md-6 col-lg-5 register-right">
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
                      <center className="text-light fs-3">Admin Login</center>
                      <div>
                        <label className="form-label">
                          Enter Your Username?
                        </label>
                        <input
                          type="text"
                          className="form-control floating-input form-control-lg mb-3 fs-6 fs-sm-6"
                          name="username"
                          placeholder="Username"
                          autoComplete="current username"
                          value={user.username}
                          onChange={handleChange}
                        />
                        {error.username && (
                          <span style={{ color: "red" }}>{error.username}</span>
                        )}
                      </div>

                      <div>
                        <label className="form-label" htmlFor="passwordInput">
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

                        {error.password && (
                          <span style={{ color: "red" }}>{error.password}</span>
                        )}
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="mt-3 btn btn-dark  container-fluid mb-2 fs-5 fs-sm-6 fs-lg-6"
                        >
                          Login
                        </button>
                      </div>
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

export default Admin_Login;
