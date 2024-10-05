import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { URL } from "../URL/URL";

function Payment() {
  const [viewCart, setViewCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); 
  const [address, setAddress] = useState("");
  const [cardno, setCardno] = useState("");
  const [expire, setExpire] = useState("");
  const [cvv, setCvv] = useState("");
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();
  const BackendURL = URL();
  const Url = `${BackendURL}/Customer/showCartProduct`;
  const buyURL = `${BackendURL}/Customer/buyProduct`; 

  const token_data = localStorage.getItem("Token_key");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { Id: token_data };
        const response = await axios.get(Url, { params });
        setViewCart(response.data);

        const totalPrice = response.data.reduce((acc, cartItem) => {
          return (
            acc +
            cartItem.productItem.reduce((subTotal, product) => {
              return subTotal + product.Id.price * product.productQty;
            }, 0)
          );
        }, 0);
        setTotalPrice(totalPrice);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleaddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlecardnochange = (e) => {
    setCardno(e.target.value);
  };
  const handleexpirechange = (ev) => {
    setExpire(ev.target.value);
  };
  const handlecvvchange = (evt) => {
    setCvv(evt.target.value);
  };


  const handleBuyNow = async (e, products) => {
    e.preventDefault();
   
    if (!address || !cardno || !expire || !cvv) {
      MySwal.fire({
        title: "Please fill all card details",
        icon: "warning"
      });
      return; 
    }
    
    try {
      const response = await axios.post(buyURL, {
        customerId: token_data,
        products: products.map((product) => ({
          productId: product.Id._id,
          productQty: product.productQty,
        })),
        totalPrice: products.reduce((total, product) => {
          return total + product.Id.price * product.productQty;
        }, 0),
        address: address,
        cardno: cardno,
        expire: expire,
        cvv: cvv
      });
      console.log("Order placed successfully:", response.data);
    
      navigate("/Customer_home/AfterOrderPlace");
    } catch (error) {
      console.error("Failed to place order:", error);
      alert("Some error occurred, unable to place order");
    }
  };
  
  return (
    <>
      <div className="container card m-2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center m-1 m-lg-2 m-sm-2">
          {viewCart.map((cartItem, index) => (
            <div
              className=" mb-4 col-12 col-md-6 col-lg-6 col-sm-8"
              key={index}
            >
              <div className="card-body">
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
                  <button
                    onClick={(event) =>
                      handleBuyNow(event, cartItem.productItem)
                    }
                    className="btn btn-primary"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    Order Place
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 col-md-6 col-lg-6 col-sm-8 mb-4">
            <form>
              <div className="card-body">
                <p className="mb-4 fs-5 fw-bold">Your payment details</p>
                <div data-mdb-input-init className="form-outline mb-3">
                  <input
                    type="text"
                    id="formControlLgXM8"
                    className="form-control"
                    placeholder="Enter your Address"
                    onChange={handleaddressChange}
                    value={address}
                  />
                  <label className="form-label" htmlFor="formControlLgXM8">
                    Address
                  </label>
                </div>
                <div data-mdb-input-init className="form-outline mb-3">
                  <input
                    type="text"
                    id="formControlLgXM8"
                    className="form-control"
                    placeholder="1234 5678 1234 5678"
                    onChange={handlecardnochange}
                    value={cardno}
                  />
                  <label className="form-label" htmlFor="formControlLgXM8">
                    Card Number
                  </label>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="password"
                        id="formControlLgExpk8"
                        className="form-control"
                        placeholder="MM/YYYY"
                        onChange={handleexpirechange}
                        value={expire}
                      />
                      <label
                        className="form-label"
                        htmlFor="formControlLgExpk8"
                      >
                        Expire
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="password"
                        id="formControlLgcvv8"
                        className="form-control"
                        placeholder="Cvv"
                         onChange={handlecvvchange}
                        value={cvv}
                      />
                      <label className="form-label" htmlFor="formControlLgcvv8">
                        Cvv
                      </label>
                    </div>
                  </div>
                </div>

                <h5 className="card-title">Total Price</h5>
                <p className="card-text">Rs {totalPrice}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
