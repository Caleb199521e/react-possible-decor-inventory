import React, { useState } from "react";
import "./OrderModal.css";

export default function OrderModal({ order, onClose, onSave }) {
  const defaultOrder = {
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
  };

  const [formData, setFormData] = useState(order ? { ...order } : defaultOrder);

  if (!order) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (typeof onSave === "function") {
      onSave(formData);
    } else {
      console.error("onSave is not a function");
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h2>Order Details</h2>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="order-column">
            <label>Product Name</label>
            <input type="text" name="product" value={formData.product} onChange={handleChange} />
          </div>
          <div className="order-column">
            <label>Order ID</label>
            <input type="text" name="id" value={formData.id} readOnly />
          </div>

          <div className="order-column">
            <label>Customer Name</label>
            <input type="text" name="customer" value={formData.customer} onChange={handleChange} />
          </div>
          <div className="order-column">
            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </div>

          <div className="order-column">
            <label>Quantity</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
          </div>
          <div className="order-column">
            <label>Amount</label>
            <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
          </div>

          <div className="order-column">
            <label>Tax</label>
            <input type="text" name="tax" value={formData.tax} onChange={handleChange} />
          </div>
          <div className="order-column">
            <label>Shipping Cost</label>
            <input type="text" name="shippingCost" value={formData.shippingCost} onChange={handleChange} />
          </div>

          <div className="order-column full-width">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>

          <div className="order-column">
            <label>Order Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className={`status-badge status-${formData.status.toLowerCase()}`}>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Delivering">Delivering</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="order-column">
            <label>Payment Status</label>
            <select name="payment" value={formData.payment} onChange={handleChange} className={`status-badge status-${formData.payment.toLowerCase()}`}>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Refunded">Refunded</option>
            </select>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="save-btn" onClick={handleSave}>Save Changes</button>
          <button className="invoice-btn">Invoice</button>
        </div>
      </div>
    </div>
  );
}
