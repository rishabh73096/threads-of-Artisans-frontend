import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "../Footer.jsx";
import Admin_Header from "./Admin_Header.jsx";
import { URL } from "../URL/URL.jsx";

function EventsDetails() {
  const [Events, setEvents] = useState({
    EventName: "",
    EventVenue: "",
    EventDescription: "",
    EventOrganiser: "",
    Date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvents({ ...Events, [name]: value });
  };
  const MySwal = withReactContent(Swal)
  const handlSubmit = async (e) => {
    e.preventDefault();
    console.log("from Events details", Events);
    setEvents({
      EventName: "",
      EventVenue: "",
      EventDescription: "",
      EventOrganiser: "",
      Date: "",
    });

    try {
      const BackendURL = URL();
      const url = `${BackendURL}/admin/EventsDetail`;
      const response = await axios.post(url, Events);
      console.log(response);
      MySwal.fire({
        title: "Event ragister Successfully!",
        icon: "success",
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000, // Auto close after 3 seconds
      });
    } catch (err) {
      console.log(err.massage);
    }
  };
  return (
    <>
<Admin_Header/>
      <div className="w-100 register " style={{backgroundImage:"url(https://images.unsplash.com/photo-1630324333784-326ec5e8479f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
        <div className="row">
          <div className="col-md-6 col-lg-6  register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Ragister as a Events</h3>
                <form onSubmit={handlSubmit}>
                  <div className="row register-form">
                    <div className="col-md-12 m-3">
                      <div className="form-group">
                        <input
                          type="text"
                          
                          name="EventName"
                          className="form-control mb-3"
                          placeholder="Your EventName *"
                          value={Events.EventName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <select
                          className="form-control"
                          value={Events.EventVenue}
                          onChange={handleChange}
                          name="EventVenue"
                        >
                          <option selected>Your EventVenue*</option>
                          <option>Pratapgarh</option>
                          <option>Sultanpur</option>
                          <option>Lucknow</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control mb-3"
                          placeholder="Your EventDescription*"
                          name="EventDescription"
                          value={Events.EventDescription}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          
                          name="EventOrganiser"
                          className="form-control mb-3"
                          placeholder="Your EventOrganiser  *"
                          value={Events.EventOrganiser}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                         
                          name="Date"
                          className="form-control "
                          placeholder="Your Date *"
                          value={Events.Date}
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
      <Footer/>
    </>
    
  );
}

export default EventsDetails;
