import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "./URL/URL";

function Announcement() {
  const [fb, setFb] = useState([]);
  const BackendURL = URL();
  const url = `${BackendURL}/Eventsdetails`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(setFb(response.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }); 

  return (
    <>
      <div
        className="min-vh-100"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/9090161/pexels-photo-9090161.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container py-4">
          <div className="divider d-flex align-items-center my-4 text-dark">
            <h4 className="text-center fw-bold mx-3 mb-0">Announcenment</h4>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {fb.map((fb) => (
              <div key={fb.id} className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title bold"> <strong> {fb.EventName}</strong></h5>
                    <p className="card-text text-muted">{fb.Date}</p>
                    <p className="card-text">{fb.EventDescription}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-0"><strong>Venue:</strong> {fb.EventVenue}</p>
                      </div>
                      <div>
                        <p className="mb-0"><strong>Organiser:</strong> {fb.EventOrganiser}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </>
  );
}

export default Announcement;
