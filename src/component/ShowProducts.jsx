import { useState, useEffect } from "react";
import axios from "axios";
import "../css/index.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function ShowProducts() {
  
  const [showProduct, setShowProduct] = useState([]);
  const tokenData = localStorage.getItem("Token_key");
  const [cartData, setCartData] = useState({
    Id: tokenData,
    productItem: { Id: "", productQty: 1 },
  });
  const URL = "http://localhost:3400/allproductdetails";
  const URL1 = "http://localhost:3400/Customer/Cart";
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setShowProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); 

  const MySwal = withReactContent(Swal)

  const Save = async (event, e) => {
    event.preventDefault();
    const updatedCartData = {
      ...cartData,
      productItem: {
        ...cartData.productItem,
        Id: e._id
      }
    };
    
    if (!tokenData) {
      navigate("/Customer_login");
    } else {
      try {
        const response = await axios.post(URL1, updatedCartData);
        if (response && response.data) {
          MySwal.fire({
            title: "Product Added in Cart!",
            text: response.data,
            icon: "success"
          });
        } else {
          throw new Error("No data received from server");
        }
      } catch (error) {
        console.error("Error adding product to cart:", error);
        MySwal.fire({
          title: "Error",
          text: "Failed to add product to cart. Please try again later.",
          icon: "error"
        });
      }
    }
    
   
  };
  

  return (
    <>
      <h3 className="trend"> Trending Now...</h3>
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 flex justify-center m-2"
        style={{ padding: "0px" }}
      >
        {showProduct.map((e, index) => (
          <div className="col show-product-design" key={index}>
            <div className="card  pop-up m-2">
              <img
                src={`http://localhost:3400/uploads/${e.pic}`}
                alt="no image"
                className=""
                style={{
                  height: "250px",
                }}
              />
              <div className="card-body pop-up">
                <h4 className="card-title">{e.ProductName}</h4>
                <p className="card-text">{e.Description}</p>
                <p className="card-text"> Rs: {e.price}</p>
                <div className="btn-card">
                  <button
                    href="#!"
                    className="btn1 btn btn-primary"
                    data-mdb-ripple-init
                    onClick={(event) => {
                      Save(event, e);
                      // eslint-disable-next-line no-undef
                      //Check()
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowProducts;
