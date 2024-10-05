import { useState } from "react";
import axios from "axios";
import "../css/index.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { URL } from "./URL/URL";
const ContactUs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneno: "",
    query: "",
  });
  const MySwal = withReactContent(Swal)
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const BackendURL = URL()
      const url = `${BackendURL}/addcontact`;
      const response = await axios.post(url, user);
      console.log(response.data);
      MySwal.fire({
        title: "contact Submission!",
        text: response.data,
        icon: "success"
      });
      setUser({
        name: "",
        email: "",
        phoneno: "",
        query: ""
      })
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="container py-4 w-100">
        <div className="row w-100 g-3">
          <div className="col-lg-6 col-md-6">
            <img
              src="./image/img-11.jpeg"
              alt="Sample photo"
              className="img-fluid rounded"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderTopLeftRadius: ".25rem",
                borderBottomLeftRadius: ".25rem",
              }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 border rounded p-4 shadow">
            <h2 className="text-center font-weight-bold mb-4 contact-us">Contact Us</h2>
            <form onSubmit={handleForm}>
              <div className="mb-3">
                <label className="form-label" htmlFor="nameInput">
                  What is Your Name?
                </label>
                <input
                  type="text"
                  id="nameInput"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="emailInput">
                  What is Your Email?
                </label>
                <input
                  type="email"
                  id="emailInput"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="phoneInput">
                  Phone No.?
                </label>
                <input
                  type="tel"
                  id="phoneInput"
                  name="phoneno"
                  className="form-control form-control-lg"
                  placeholder="98********"
                  value={user.phoneno}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="queryInput">
                  Your Query?
                </label>
                <textarea
                  id="queryInput"
                  name="query"
                  className="form-control form-control-lg"
                  placeholder="Query"
                  rows={3}
                  value={user.query}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-lg fs-5 w-100 contact-us-button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default ContactUs;
