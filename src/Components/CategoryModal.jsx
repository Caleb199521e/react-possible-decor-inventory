import React, { useState, useEffect } from 'react';
import './CategoryModal.css';

export default function CategoryModal({ isOpen, onClose, onSave, initialCategory }) {
  const [category, setCategory] = useState({
    name: '',
    image: '',
    rank: '',
    status: 'Active',
    createdOn: '',
  });

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCategory((prevCategory) => ({
        ...prevCategory,
        image: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(category);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialCategory ? 'Edit Category' : 'Add New Category'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={category.name} onChange={handleChange} required />
          </label>
          <label>
            Rank:
            <input type="number" name="rank" value={category.rank} onChange={handleChange} required />
          </label>
          <label>
            Status:
            <select name="status" value={category.status} onChange={handleChange} required>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <label>
            Image:
            <input type="file" name="image" onChange={handleFileChange} required />
          </label>
          <label>
            Created On:
            <input type="date" name="createdOn" value={category.createdOn} onChange={handleChange} required />
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