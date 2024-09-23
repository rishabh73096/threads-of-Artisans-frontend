import { NavLink , useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Admin_Header() {
const navigate = useNavigate()
const token_data=localStorage.getItem("Token_key")
const MySwal = withReactContent(Swal)
const logout=(e)=>{
e.preventDefault()
if(!token_data){
  navigate("/admin_login")
}
else{
 localStorage.removeItem("Token_key") 
 MySwal.fire({
  title: "Logout Successfully!",
  icon: "success",
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,

});
 navigate("/admin_login")
}
}
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-color">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/admin">
      <h2 className="text-light fs-6 m-1">Threads of Artisans </h2>
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center"> {/* Apply text-center class here */}
        <li className="nav-item">
        </li>
        <li className="nav-item ">
          <NavLink
            className="nav-link active text-light"
            aria-current="page"
            to="/admin/Allcontact"
          >
            AllContact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link active text-light"
            aria-current="page"
            to="/admin/AllFeedback"
          >
            AllFeedback
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className="nav-link active text-light"
            aria-current="page"
            to="/admin/EventsDetails"
          >
            EventsDetails
          </NavLink>
        </li>
      </ul>

      <div>
        <button className="btn btn-primary me-2" type="submit" onClick={logout}>
          Logout
        </button>
      </div>

    </div>
  </div>
</nav>

    </>
  );
}

export default Admin_Header;
