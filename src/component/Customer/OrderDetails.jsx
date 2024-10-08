import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../URL/URL";

function OrderDetails() {
  const token_data = localStorage.getItem("Token_key");
  console.log(token_data);
  const [orders, setOrders] = useState([]);
  const BackendURL = URL();
  const Url = `${BackendURL}/Customer/placeorder`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { customerId: token_data };
        const response = await axios.get(Url, { params });
        setOrders(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); 
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className="container">
      <h1 className="text-center text-gray my-3">Order Details</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Address</th>
              <th>Order Status</th>
              <th>Card Number</th>
              <th>Order Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={order.orderstatus === 'shipped' ? 'table-success' : ''}>
                <td>{order.customerId}</td>
                <td>{order.address}</td>
                <td>{order.orderstatus}</td>
                <td>{order.cardno}</td>
                <td>{formatDate(order.orderDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderDetails;
