function Bihar() {
  return (
    <>
      <div className="container-fluid mt-3">
      <div className="divider d-flex align-items-center my-4" >
          <h4 className="text-center fw-bold mx-3 mb-0">
            Famous Product in Bihar
          </h4>
        </div>
        <div className="row justify-content-start">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://i.pinimg.com/564x/b8/57/32/b85732e17a0c5314bb3e15d7d4328180.jpg"
                className="card-img-top "
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Madhubani Paintings</h5>
                <p className="card-text">
                  Vibrant and colorful folk art depicting mythological and
                  cultural themes, originating from the Mithila region
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://i.pinimg.com/564x/4d/49/fa/4d49fa37d98f4e4313ff074d6e62fca7.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Siki Handloom Saree</h5>
                <p className="card-text">
                  Handwoven sarees characterized by intricate patterns and
                  vibrant colors, produced in Bhagalpur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://i.pinimg.com/564x/19/34/b8/1934b8f256376faeba624e3426824560.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tikuli Art</h5>
                <p className="card-text">
                  Delicate art form involving the creation of beautiful designs
                  on handmade paper using tiny pieces of colored glass,
                  originating from Muzaffarpur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bihar;
