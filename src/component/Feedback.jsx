import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Feedback = () => {
  const [feedback, setFeedback] = useState({ name: "", email: "", query: "" });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const MySwal = withReactContent(Swal);

  const handleForm = async (e) => {
    e.preventDefault();

    // Validation
    if (!feedback.name || !feedback.email || !feedback.query) {
      MySwal.fire({
        title: "Validation Error!",
        text: "All fields are required",
        icon: "error",
      });
      return;
    }

    if (feedback.query.length < 10) {
      MySwal.fire({
        title: "Validation Error!",
        text: "Remark must be at least 10 characters long",
        icon: "error",
      });
      return;
    }

    console.log(feedback);
    try {
      const url = "http://localhost:3400/addfeedback";
      const response = await axios.post(url, feedback);
      console.log(response.data);
      setFeedback({ name: "", email: "", query: "" });
      MySwal.fire({
        title: "Feedback Submission!",
        text: response.data,
        icon: "success",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="container h-100 mb-3">
        <div className="row h-100 justify-content-center">
          <div className="col-lg-5 col-6 d-lg-block d-xl-block d-md-block d-sm-block col-sm-6 col-md-6">
            <img
              src="/image/img-12.jpeg"
              alt="Sample photo"
              className="img-fluid"
              style={{
                width: "400px",
                borderTopLeftRadius: ".25rem",
                borderBottomLeftRadius: ".25rem",
              }}
            />
          </div>
          <div className="col-lg-5 col-11 col-md-6 col-sm-6">
            <div className="card-registrati mt-4">
              <center className=" font-weight-bold contact-us"
              style={{Color:"#4651edce"}}>
               
                Feedback
              </center>
              <div className="card-body p-md-3 text-black">
                <form onSubmit={handleForm}>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      id="nameInput"
                      className="form-control form-control-lg fs-6"
                      placeholder="Enter Your Name"
                      onChange={handleChange}
                      value={feedback.name}
                      name="name"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      id="emailInput"
                      className="form-control form-control-lg fs-6"
                      placeholder="Enter Your Email"
                      onChange={handleChange}
                      value={feedback.email}
                      name="email"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <textarea
                      id="queryInput"
                      className="form-control form-control-lg fs-6"
                      placeholder="Enter Your Remarks (at least 10 characters)"
                      rows={4}
                      onChange={handleChange}
                      value={feedback.query}
                      name="query"
                    />
                  </div>

                  <div className="d-flex justify-content-center pt-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg ms-2 fs-5"
                      style={{backgroundColor:"#4651edce"}}
                    >
                      Submit feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
