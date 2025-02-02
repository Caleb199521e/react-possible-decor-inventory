import React from "react";
import { Button } from "@mui/material";
import "./RecentOrdersCard.css";

const RecentOrdersCard = () => {
  const orders = [
    {
      productImage: "https://via.placeholder.com/40",
      productName: "Marble Sheet",
      orderId: "#456787",
      customerName: "Caleb Ampong",
      quantity: 2,
      amount: "$598",
      payment: "Paid",
      status: "Delivered",
    },
    {
      productImage: "https://via.placeholder.com/40",
      productName: "Flower",
      orderId: "#569870",
      customerName: "Mary Adzo A.",
      quantity: 3,
      amount: "$1,500",
      payment: "Pending",
      status: "Processing",
    },
    {
      productImage: "https://via.placeholder.com/40",
      productName: "Wall Paper",
      orderId: "#569870",
      customerName: "Kelvin Okornore",
      quantity: 3,
      amount: "$597",
      payment: "Pending",
      status: "Processing",
    },
  ];

  return (
    <div className="recent-orders-card">
      <div className="header">
        <h3>Recent Orders</h3>
        <Button variant="outlined" size="small" className="view-all-btn">
          View All
        </Button>
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <img src={order.productImage} alt={order.productName} />
                {order.productName}
              </td>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.quantity}</td>
              <td>{order.amount}</td>
              <td>{order.payment}</td>
              <td className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </td>
              <td>
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrdersCard;
