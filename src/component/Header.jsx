import { NavLink } from "react-router-dom";
import "../css/index.css";
import { useState } from "react";

const Header = ({onSearch}) => {
  const [state,setState]=useState("")

const handleSubmit=async(e)=>{
e.preventDefault()
onSearch(state)
}

  return (
    <nav className="navbar navbar-expand-lg navbar-color">
      <div className="container-fluid">
      <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                <p className="text-light fs-6 m-2 p-1">Threads Of Artisans</p>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-light"
                aria-current="page"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-light"
                aria-current="page"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-light"
                aria-current="page"
                to="/feedback"
              >
                Feedback
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle text-light"
                to="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Registration
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/shopkeeper">
                    Artisan
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/customer">
                    Customer
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle text-light"
                to="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown2"
              >
                <li>
                  <NavLink className="dropdown-item" to="/admin_login">
                    Admin Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/shopkeeper_login">
                    Artisan Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/customer_login">
                    Customer Login
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-light"
                aria-current="page"
                to="/announcement"
              >
                Announcement
              </NavLink>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search By State"
              aria-label="Search"
              name="state"
              value={state}
              onChange={(e)=>{
                const city_name = e.target.value ? e.target.value : null;
                setState(city_name);
                }}/>
            
            <button className="btn btn-primary me-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
