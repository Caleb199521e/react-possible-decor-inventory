import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import OrderModal from "../Components/OrderModal";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("/api/orders");
      setOrders(res.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  const openModal = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  const handleSaveOrder = async (order) => {
    try {
      if (order._id) {
        // Edit existing
        await axios.put(`/api/orders/${order._id}`, order);
      } else {
        // Create new
        await axios.post("/api/orders", order);
      }
      fetchOrders();
      closeModal();
    } catch (error) {
      console.error("Failed to save order:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await axios.delete(`/api/orders/${id}`);
        fetchOrders();
      } catch (error) {
        console.error("Failed to delete order:", error);
      }
    }
  };

  const handleAddNewClick = () => {
    setSelectedOrder({
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

  const filteredOrders = orders.filter((order) => {
    if (filter !== "all" && order.status.toLowerCase() !== filter.toLowerCase()) return false;
    if (
      searchQuery &&
      !order.product?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !order.customer?.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    if (startDate && new Date(order.date) < new Date(startDate)) return false;
    if (endDate && new Date(order.date) > new Date(endDate)) return false;
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
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="right-controls">
              <div className="date-range-controls">
                <input
                  type="date"
                  className="date-filter"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                  type="date"
                  className="date-filter"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="order-controls">
                <select className="filter-select" onChange={(e) => setFilter(e.target.value)}>
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
                <tr key={order._id || index}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="product-info">
                      <img src={order.image} alt={order.product} />
                      <span>{order.product}</span>
                    </div>
                  </td>
                  <td>{order._id}</td>
                  <td>{order.customer}</td>
                  <td>{order.quantity}</td>
                  <td>{order.amount}</td>
                  <td className={`payment ${order.payment.toLowerCase()}`}>{order.payment}</td>
                  <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                  <td>{order.date}</td>
                  <td>
                    <button className="edit-btn" onClick={() => openModal(order)}><Edit /></button>
                    <button className="delete-btn" onClick={() => handleDelete(order._id)}><Delete /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>

      {selectedOrder && (
        <OrderModal
          order={selectedOrder}
          onClose={closeModal}
          onSave={handleSaveOrder}
        />
      )}
    </div>
  );
}
