import React, { useEffect } from 'react';
import './ProductModal.css';

export default function ProductModal({ isOpen, onClose, onSave, initialProduct }) {
  const [product, setProduct] = React.useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    image: '',
    currency: 'GH₵', // Default currency
  });

  useEffect(() => {
    if (initialProduct) {
      setProduct((prev) => ({
        ...prev,
        ...initialProduct,
        currency: initialProduct.currency || 'GH₵',
      }));
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct((prevProduct) => ({
        ...prevProduct,
        image: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
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
        <h2>{initialProduct ? 'Edit Product' : 'Add New Product'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Product:
            <input type="text" name="name" value={product.name} onChange={handleChange} required />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={product.price} onChange={handleChange} required />
          </label>
          <label>
            Currency:
            <select name="currency" value={product.currency} onChange={handleChange} required>
              <option value="GH₵">GH₵ (Ghana Cedi)</option>
              <option value="USD">USD (US Dollar)</option>
              <option value="EUR">EUR (Euro)</option>
              <option value="GBP">GBP (British Pound)</option>
            </select>
          </label>
          <label>
            Category:
            <input type="text" name="category" value={product.category} onChange={handleChange} required />
          </label>
          <label>
            Stock:
            <input type="number" name="stock" value={product.stock} onChange={handleChange} required />
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
