function Maharasthra() {
    return ( <>
     <div className="container-fluid mt-3">
     <div className="divider d-flex align-items-center my-4 text-dark">
    <h4 className="text-center fw-bold mx-3 mb-0">Famous Product in Maharasthra</h4>
</div>
        <div className="row justify-content-start">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://as2.ftcdn.net/v2/jpg/03/47/28/31/1000_F_347283175_Wjic2NBNXbc0loxXgIDfiHuxz9QGzVBL.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Kolhapuri Chappals</h5>
                <p className="card-text">
                Handcrafted leather sandals renowned for their durability, comfort, and unique design, originating from Kolhapur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/19936768/pexels-photo-19936768/free-photo-of-woman-lying-on-mosaic-in-shape-of-map.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Warli Art</h5>
                <p className="card-text">
                Tribal art form characterized by simple yet beautiful geometric patterns and motifs, traditionally created by the Warli tribe
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/3153812/pexels-photo-3153812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Paithani Saree</h5>
                <p className="card-text">
                Rich silk sarees featuring intricate handwoven patterns, including peacocks, lotuses, and other traditional motifs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> );
}

export default Maharasthra;
