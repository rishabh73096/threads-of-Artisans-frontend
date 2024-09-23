import "../css/index.css";
import { NavLink } from "react-router-dom";

function StaticPage() {
  return (
    <>
      <h3 className="trend">State-focused Category Shopping...</h3>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <NavLink to="/uttarpradesh">
              <img
                src="https://images.pexels.com/photos/239777/pexels-photo-239777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="rounded-circle mb-2 pop-up hieght img-fluid"
                alt="Uttar Pradesh"
              />
              <p className="text-center text-dark text-decoration-none">
                Uttar Pradesh
              </p>
            </NavLink>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <NavLink to="/rajasthan">
              <img
                src="https://images.pexels.com/photos/2344613/pexels-photo-2344613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="rounded-circle mb-2 pop-up hieght img-fluid"
                alt="Rajasthan"
              />
              <p className="text-center text-dark text-decoration-none">
                Rajasthan
              </p>
            </NavLink>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <NavLink to="/maharashtra">
              <img
                src="https://images.pexels.com/photos/12374775/pexels-photo-12374775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="rounded-circle mb-2 pop-up hieght img-fluid"
                alt=" Maharashtra"
              />
              <p className="text-center text-dark text-decoration-none">
              Maharashtra
              </p>
            </NavLink>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <NavLink to="/bihar">
              <img
                src="https://images.pexels.com/photos/1043552/pexels-photo-1043552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr"
                className="rounded-circle mb-2 pop-up hieght img-fluid"
                alt="Bihar"
              />
              <p className="text-center text-dark text-decoration-none">
                Bihar
              </p>
            </NavLink>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <NavLink to="/delhi">
              <img
                src="https://images.pexels.com/photos/12911832/pexels-photo-12911832.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                className="rounded-circle mb-2 pop-up hieght img-fluid"
                alt="delhi"
              />
              <p className="text-center text-dark text-decoration-none">
                Delhi
              </p>
            </NavLink>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <NavLink to="/Asam">
              <img
                src="https://images.pexels.com/photos/2113125/pexels-photo-2113125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="rounded-circle mb-2 pop-up hieght img-fluid"
                alt="Rajasthan"
              />
              <p className="text-center text-dark text-decoration-none">
                Asam
              </p>
            </NavLink>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default StaticPage;
