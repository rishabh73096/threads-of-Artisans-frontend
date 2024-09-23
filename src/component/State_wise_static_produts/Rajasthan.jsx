function Rajasthan() {
  return (
    <>
      <div className="container-fluid mt-3">
      <div className="divider d-flex align-items-center my-4 text-dark">
    <h4 className="text-center fw-bold mx-3 mb-0">Famous Product in Rajasthan</h4>
</div>
        <div className="row justify-content-start">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/8819334/pexels-photo-8819334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Bandhani Dupatta</h5>
                <p className="card-text">
                Hand-tied and dyed dupattas featuring intricate patterns and vibrant colors, a traditional Rajasthani textile art
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Lac Bangles</h5>
                <p className="card-text">
                Colorful bangles made from lac resin, embellished with mirrors, beads, and intricate designs, popular among Rajasthani women.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/9899875/pexels-photo-9899875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Jaipur Quilts (Razai)</h5>
                <p className="card-text">
                Hand-stitched quilts filled with cotton or wool, known for their warmth, lightness, and vibrant Rajasthani prints
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rajasthan;
