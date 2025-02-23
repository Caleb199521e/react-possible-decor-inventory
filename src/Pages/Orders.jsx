import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import OrderModal from "../Components/OrderModal";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import "./Orders.css";

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
    date: "2024-09-09",
    address: "No.7, Oxford Street, Osu-Accra",
    tax: "GH₵5",
    shippingCost: "GH₵40",
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
    date: "2024-10-10",
    address: "No.10, Ridge Street, Accra",
    tax: "GH₵10",
    shippingCost: "GH₵50",
  },
  {
    id: "#569871",
    product: "Wall panel",
    customer: "Mrs. Mary Adzo",
    quantity: 1,
    amount: "GH₵199",
    payment: "Pending",
    status: "Delivering",
    image: "/images/wall-panel.jpg",
    date: "2024-12-12",
    address: "No.25, East Legon, Accra",
    tax: "GH₵8",
    shippingCost: "GH₵30",
  },
];

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleAddNewClick = () => {
    setSelectedOrder({
      id: "",
      product: "",
      customer: "",
      quantity: 1,
      amount: "",
      payment: "Pending",
      status: "Processing",
      image: "",
      date: "",
      address: "",
      tax: "",
      shippingCost: "",
    });
  };

  const handleSaveOrder = (order) => {
    // Handle saving the order (e.g., send to backend or update state)
    console.log("Order saved:", order);
  };

  const filteredOrders = orders.filter((order) => {
    if (filter !== "all" && order.status.toLowerCase() !== filter.toLowerCase()) {
      return false;
    }
    if (searchQuery && !order.product.toLowerCase().includes(searchQuery.toLowerCase()) && !order.customer.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (startDate && new Date(order.date) < new Date(startDate)) {
      return false;
    }
    if (endDate && new Date(order.date) > new Date(endDate)) {
      return false;
    }
    return true;
  });

  return (
    <div className="orders-container">
      <Sidebar />
      <div className="main">
        <Header />
        <main className="orders-main">
          <div className="orders-header">
            <h1>Orders</h1>
            <p>Dashboard {'>'} Orders</p>
          </div>
          <div className="orders-controls">
            <input
              type="text"
              placeholder="Search"
              className="search-bar"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="right-controls">
              <div className="date-range-controls">
                <input
                  type="date"
                  name="start-date"
                  className="date-filter"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
                <input
                  type="date"
                  name="end-date"
                  className="date-filter"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </div>
              <div className="order-controls">
                <select name="filter" id="filter" className="filter-select" onChange={handleFilterChange}>
                  <option value="all">All</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="delivered">Delivered</option>
                  <option value="processing">Processing</option>
                  <option value="delivering">Delivering</option>
                </select>
                <button className="export-btn">Export All Orders</button>
                <button className="add-btn" onClick={handleAddNewClick}>+ Add New</button>
              </div>
            </div>
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
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
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
                  <td>{order.date}</td>
                  <td>
                    <button className="edit-btn" onClick={() => openModal(order)}><Edit /></button>
                    <button className="delete-btn"><Delete /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
        </main>
      </div>

      {/* Render Order Modal */}
      {selectedOrder && <OrderModal order={selectedOrder} onClose={closeModal} onSave={handleSaveOrder} />}
    </div>
  );
}
