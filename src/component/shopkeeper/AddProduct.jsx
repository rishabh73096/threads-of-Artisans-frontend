import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const Token_key = localStorage.getItem("Token_key");
  const [pic, setPic] = useState("");
  const [Product, setProduct] = useState({
    Id: Token_key,
    ProductName: "",
    Qty: "",
    Description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...Product, [name]: value });
  };

  const handlSubmit = async (e) => {
    e.preventDefault();
    console.log("from product details", Product);
    console.log("pic",pic);
    setProduct({
      ProductName: "",
      Qty: "",
      Description: "",
      price: "",
      pic: "",
    });
    const form_data = new FormData();
    form_data.append("Id", Product.Id);
    form_data.append("ProductName", Product.ProductName);
    form_data.append("Qty", Product.Qty);
    form_data.append("Description", Product.Description);
    form_data.append("price", Product.price);
    form_data.append("pic", pic);

    try {
      const url = "http://localhost:3400/shopkeeper/addProduct";
      const response = await axios.post(url, form_data);
      console.log(response);
    } catch (err) {
      console.log(err.massage);
    }
  };
  return (
    <>
      <div className="w-100 register " style={{backgroundImage:"url(https://images.unsplash.com/photo-1613274850901-d2a357994928?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-10  register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Add a Product in Your Shop</h3>
                <form onSubmit={handlSubmit}   encType="multipart/form-data">
                  <div className="row register-form">
                    <div className="col-md-12 m-1">
                      <div className="form-group">
                        <input
                          type="text"
                          name="ProductName"
                          className="form-control mb-3"
                          placeholder="Your ProductName *"
                          value={Product.ProductName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          name="Qty"
                          className="form-control mb-3"
                          placeholder="Quantity *"
                          value={Product.Qty}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control mb-3"
                          placeholder="product Description*"
                          name="Description"
                          value={Product.Description}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="price"
                          className="form-control mb-3"
                          placeholder=" Product price *"
                          value={Product.price}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="form-outline">
                          <input
                            type="file"
                            id="form3Example2"
                            className="form-control"
                            name="pic"
                            onChange={(e) => {
                              setPic(e.target.files[0]);
                            }}
                          />
                          <label className="form-label" htmlFor="form3Example2">
                            UploadPic
                          </label>
                        </div>
                        <button className="btnRegister btn-lg" type="submit">
                        Ragister
                      </button>
                      </div>
                      
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
