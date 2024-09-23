import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Customer_header() {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("Token_key");
  const MySwal = withReactContent(Swal);

  const logout = (e) => {
    e.preventDefault();
    if (!token_data) {
      navigate("/Customer_login");
    } else {
      localStorage.removeItem("Token_key");
      MySwal.fire({
        title: "Logout Successfully!",
        icon: "success",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000, // Auto close after 3 seconds
      });
      navigate("/Customer_login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-color">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="">
           <h2 className="text-light fs-6">Threads of Artisans </h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light"
                aria-current="page"
                to="/Customer_home/ShowProduct"
              >
                Show Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light me-2"
                type="submit"
                to="/Customer_home/ViewCart"
              >
                View Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" nav-link text-light me-2"
                type="submit"
                to="/Customer_home/orderplace"
              >
                Order Details
              </NavLink>
            </li>
          </ul>

          <div>
            <button
              className="btn btn-primary me-2"
              type="submit"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Customer_header;
