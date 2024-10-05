import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { URL } from "../URL/URL";

const ViewCart = () => {
  const [viewCart, setViewCart] = useState([]);
  const BackendURL = URL()
  const Url = `${BackendURL}/Customer/showCartProduct`;

  const token_data = localStorage.getItem("Token_key");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { Id: token_data };
        const response = await axios.get(Url, { params });
        setViewCart(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

 

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center m-1 m-lg-2 m-sm-2">
          {viewCart.map((cartItem, index) => (
            <div
              className=" mb-4 col-12 col-md-6 col-lg-5 col-sm-8"
              key={index}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Customer ID: {cartItem.Id}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Products</h6>
                  <ul className="list-group">
                    {cartItem.productItem.map((product, productIndex) => (
                      <li
                        className="list-group-item d-flex justify-content-start align-items-center"
                        key={productIndex}
                      >
                        <div className="d-flex align-items-center">
                          <img
                            src={`http://localhost:3400/uploads/${product.Id.pic}`}
                            alt="Product"
                            className="mr-3 rounded"
                            style={{
                              height: "130px",
                              width: "130px",
                              objectFit: "cover",
                              transition: "all 0.3s ease",
                            }}
                          />
                          <div>
                            <h6 className="mb-0 mx-4 fw-bold">
                              {product.Id.ProductName}
                            </h6>
                            <p className="mb-0 mx-4">
                              Price: Rs {product.Id.price}
                            </p>
                            <p className="mb-0 mx-4">
                              Quantity: {product.productQty}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 d-flex justify-content-center">
                   
                    <NavLink
                      className="btn btn-primary"
                      style={{ transition: "all 0.3s ease" }}
                      to="/Customer_home/Payment"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewCart;
