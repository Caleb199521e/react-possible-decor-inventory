import React from 'react';
import './ProductModal.css';

export default function ProductModal({ isOpen, onClose, onSave }) {
  const [product, setProduct] = React.useState({
    name: '',
    price: '',
    category: '',
    stock: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Product:
            <input type="text" name="name" value={product.name} onChange={handleChange} required />
          </label>
          <label>
            Price:
            <input type="text" name="price" value={product.price} onChange={handleChange} required />
          </label>
          <label>
            Category:
            <input type="text" name="category" value={product.category} onChange={handleChange} required />
          </label>
          <label>
            Stock:
            <input type="number" name="stock" value={product.stock} onChange={handleChange} required />
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