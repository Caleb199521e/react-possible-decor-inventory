import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import PurchaseModal from "../Components/PurchaseModal";
import { Edit, Delete } from "@mui/icons-material";
import "./Purchases.css";

const initialPurchases = [
  {
    product: "Wall Paper",
    date: "2024-09-17",
    supplier: "Divi Factory",
    warehouse: "Warehouse 01",
    status: "Received",
    total: "GH₵25,680",
    payment: "Paid",
    image: "/images/wall-paper.jpg",
  },
  {
    product: "Flower",
    date: "2024-09-16",
    supplier: "Dev Ltd",
    warehouse: "Warehouse 01",
    status: "Pending",
    total: "GH₵11,999",
    payment: "Due",
    image: "/images/flower.jpg",
  },
];

export default function Purchases() {
  const [purchases, setPurchases] = useState(initialPurchases);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(null);

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
    setCurrentPurchase(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (purchase) => {
    setCurrentPurchase(purchase);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (purchaseIndex) => {
    setPurchases((prevPurchases) => prevPurchases.filter((_, index) => index !== purchaseIndex));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSavePurchase = (newPurchase) => {
    if (currentPurchase) {
      setPurchases((prevPurchases) =>
        prevPurchases.map((purchase) =>
          purchase === currentPurchase ? newPurchase : purchase
        )
      );
    } else {
      setPurchases((prevPurchases) => [
        ...prevPurchases,
        newPurchase,
      ]);
    }
  };

  const filteredPurchases = purchases.filter((purchase) => {
    if (filter !== "all" && purchase.status.toLowerCase() !== filter.toLowerCase()) {
      return false;
    }
    if (searchQuery && !purchase.product.toLowerCase().includes(searchQuery.toLowerCase()) && !purchase.supplier.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (startDate && new Date(purchase.date) < new Date(startDate)) {
      return false;
    }
    if (endDate && new Date(purchase.date) > new Date(endDate)) {
      return false;
    }
    return true;
  });

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
              <div className="purchases-buttons">
                <select name="filter" id="filter" className="filter-select" onChange={handleFilterChange}>
                  <option value="all">All</option>
                  <option value="received">Received</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <button className="add-btn" onClick={handleAddNewClick}>+ Add New</button>
              </div>
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
              {filteredPurchases.map((purchase, index) => (
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
                    <button className="edit-btn" onClick={() => handleEditClick(purchase)}><Edit /></button>
                    <button className="delete-btn" onClick={() => handleDeleteClick(index)}><Delete /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSavePurchase}
        initialPurchase={currentPurchase}
      />
      
    </div>
    
  );
}
