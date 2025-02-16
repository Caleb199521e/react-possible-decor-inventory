import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Edit, Delete } from "@mui/icons-material";
import "./Purchases.css";

const purchases = [
  {
    product: "Wall Paper",
    date: "17-09-2024",
    supplier: "Divi Factory",
    warehouse: "Warehouse 01",
    status: "Received",
    total: "GH₵25,680",
    payment: "Paid",
    image: "/images/wall-paper.jpg",
  },
  {
    product: "Flower",
    date: "16-09-2024",
    supplier: "Dev Ltd",
    warehouse: "Warehouse 01",
    status: "Pending",
    total: "GH₵11,999",
    payment: "Due",
    image: "/images/flower.jpg",
  },
];

export default function Purchases() {
  return (
    <div className="purchases-container">
      <Sidebar />
      <div className="main">
        <Header />

        <main className="purchases-main">
          <div className="purchases-header">
            <h1>Purchases</h1>
            <p>Dashboard {'>'} Purchases</p>
          </div>
        <div className="purchases-controls">
            <input type="text" placeholder="Search" className="search-bar" />
            <div className="purchases-buttons">
              <select name="filter" id="filter" className="filter-select">
                <option value="all">All</option>
                <option value="received">Received</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <button className="add-btn">+ Add New</button>
            </div>
                      
          </div>
          <table className="purchases-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Date</th>
                <th>Supplier</th>
                <th>Warehouse</th>
                <th>Status</th>
                <th>Grand Total</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="product-info">
                      <img src={purchase.image} alt={purchase.product} />
                      <span>{purchase.product}</span>
                    </div>
                  </td>
                  <td>{purchase.date}</td>
                  <td>{purchase.supplier}</td>
                  <td>{purchase.warehouse}</td>
                  <td className={`status ${purchase.status.toLowerCase()}`}>{purchase.status}</td>
                  <td>{purchase.total}</td>
                  <td className={`payment ${purchase.payment.toLowerCase()}`}>{purchase.payment}</td>
                  <td>
                    <button className="edit-btn"> <Edit /></button>
                    <button className="delete-btn"><Delete /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
