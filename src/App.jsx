import ShowProducts from "./component/ShowProducts";
import StaticPage from "./component/StaticPage";
import FAQ from "./component/FAQ";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    title: "Thank you for visiting our website!",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 5000, // Auto close after 4 seconds
  });
  
  return (
    <>
      <div
        className="position-relative d-flex justify-content-start"
        style={{
          width: "100wv",
          height: "100v",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/5095286/5095286-hd_2048_1080_25fps.mp4"
            type="video/mp4"
          />
          {/* Add additional source tags for other video formats if needed */}
          Your browser does not support the video tag.
        </video>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        ></div>
        <div className="" style={{ color: "white", zIndex: "1" }}>
          <h3
            className="display-3 fw-bold w-50 ms-5"
            style={{ marginTop: "5rem" }}
          >
            {" "}
    Buy The Best HandCrafted Product, online.
          </h3>
          <ul className="ms-5 mt-4 fs-5">
            <li>Discover exquisite handcrafted treasures</li>
            <li>Explore a wide range of artisanal creations</li>
            <li>
              Support artisans worldwide while enjoying competitive prices
            </li>
            <li>Experience satisfaction guaranteed with every purchase</li>
          </ul>
          <NavLink to="/Customer_login">
          <button
            className="px-5 py-2 ms-5 mb-5 fs-4 fw-medium shadow-lg text-white rounded-1 "
            style={{
              border: "none",
              fontFamily: "roboto",
              backgroundColor: "#4651edce",
            }}
          >
            Buy Product
          </button>
          </NavLink>
        </div>
       
      </div>
      <h3 className="trend text-center fw-bold"> HandCrafted In India...</h3>
      <StaticPage />
      <ShowProducts />
      <FAQ />
    </>
  );
}

export default App;
