import React, { useState, useEffect } from 'react';
import './PurchaseModal.css';

export default function PurchaseModal({ isOpen, onClose, onSave, initialPurchase }) {
  const [purchase, setPurchase] = useState({
    product: '',
    date: '',
    supplier: '',
    warehouse: '',
    status: 'Pending',
    total: '',
    payment: 'Due',
    image: '',
  });

  useEffect(() => {
    if (initialPurchase) {
      setPurchase(initialPurchase);
    }
  }, [initialPurchase]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPurchase((prevPurchase) => ({
      ...prevPurchase,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPurchase((prevPurchase) => ({
        ...prevPurchase,
        image: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(purchase);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialPurchase ? 'Edit Purchase' : 'Add New Purchase'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Product:
            <input type="text" name="product" value={purchase.product} onChange={handleChange} required />
          </label>
          <label>
            Date:
            <input type="date" name="date" value={purchase.date} onChange={handleChange} required />
          </label>
          <label>
            Supplier:
            <input type="text" name="supplier" value={purchase.supplier} onChange={handleChange} required />
          </label>
          <label>
            Warehouse:
            <input type="text" name="warehouse" value={purchase.warehouse} onChange={handleChange} required />
          </label>
          <label>
            Status:
            <select name="status" value={purchase.status} onChange={handleChange} required>
              <option value="Received">Received</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </label>
          <label>
            Grand Total:
            <input type="text" name="total" value={purchase.total} onChange={handleChange} required />
          </label>
          <label>
            Payment:
            <select name="payment" value={purchase.payment} onChange={handleChange} required>
              <option value="Paid">Paid</option>
              <option value="Due">Due</option>
            </select>
          </label>
          <label>
            Image:
            <input type="file" name="image" onChange={handleFileChange} required />
          </label>
          <div className="modal-buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}