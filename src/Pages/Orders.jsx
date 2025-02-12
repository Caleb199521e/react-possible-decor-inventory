import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import './Orders.css';
const orders = [
  {
    id: "#456787",
    product: "Artificial Flower",
    customer: "Godfred Fiave",
    quantity: 2,
    amount: "GH₵598",
    payment: "Paid",
    status: "Delivered",
    image: "/images/artificial-flower.jpg",
  },
  {
    id: "#569870",
    product: "Marble Sheet",
    customer: "Sumaila Saida",
    quantity: 1,
    amount: "GH₵500",
    payment: "Pending",
    status: "Processing",
    image: "/images/marble-sheet.jpg",
  },
  {
    id: "#569870",
    product: "Wall panel",
    customer: "Mrs. Mary Adzo",
    quantity: 1,
    amount: "GH₵199",
    payment: "Pending",
    status: "Delivering",
    image: "/images/wall-panel.jpg",
  },
];

export default function Orders() {
  return (
    <div className="orders-page">
      <Sidebar />
      <div className="orders-container">
        <Header />
        <div className="orders-content">
          <h2>Orders</h2>
          <div className="orders-actions">
            <input type="text" placeholder="Search" className="search-bar" />
            <button className="filter-btn">Filter</button>
            <button className="export-btn">Export All Orders</button>
            <button className="add-btn">+ Add New</button>
          </div>
          <table className="orders-table">
            <thead>
              <tr>
                <th></th>
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
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="product-info">
                      <img src={order.image} alt={order.product} />
                      <span>{order.product}</span>
                    </div>
                  </td>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.quantity}</td>
                  <td>{order.amount}</td>
                  <td className={`payment ${order.payment.toLowerCase()}`}>
                    {order.payment}
                  </td>
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
      </div>
    </div>
  );
}
