import React from "react";
import { NavLink } from "react-router-dom";

function AllShopkeeperTable({ userdata }) {
  return (
    <>
      <h3 className="text-center text-gray my-4">All Shopkeepers</h3>
      <div className="row justify-content-center">
        {userdata.map((uf, index) => (
          <div className="col-10 col-lg-4 col-md-4 mb-4" key={index}>
            <div className="card bg-gray">
              <div className="card-body">
                <h5 className="card-title text-dark">
                  <span className="font-weight-bold">Shopkeeper Name:</span>
                  {uf.shopkeeperName}
                </h5>
                <hr className="bg-light" />
                <p className="card-text text-dark">
                  <span className="font-weight-bold">Email:</span> {uf.email}
                </p>
                <hr className="bg-light" />
                <p className="card-text text-dark">
                  <span className="font-weight-bold">Contact:</span>
                  {uf.contact}
                </p>
                <hr className="bg-light" />
                <p className="card-text text-dark">
                  <span className="font-weight-bold">State:</span> {uf.state}
                </p>
                <hr className="bg-light" />
                <p className="card-text text-dark">
                  <span className="font-weight-bold">Specialty:</span>
                  {uf.specility}
                </p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllShopkeeperTable;
