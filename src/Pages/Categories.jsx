import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import CategoryModal from '../Components/CategoryModal';
import { Visibility, Edit, Delete } from "@mui/icons-material";
import './Categories.css';

export default function Categories() {
  const [categories, setCategories] = useState([...Array(10)].map((_, i) => ({
    id: i,
    name: `Category ${i + 1}`,
    image: "/images/sample.jpg",
    rank: i + 1,
    status: i % 2 === 0 ? "Active" : "Inactive",
    createdOn: new Date().toLocaleDateString(),
  })));

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddNewClick = () => {
    setCurrentCategory(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (category) => {
    setCurrentCategory(category);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (categoryId) => {
    setCategories((prevCategories) => prevCategories.filter((category) => category.id !== categoryId));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveCategory = (newCategory) => {
    if (currentCategory) {
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === currentCategory.id ? { ...newCategory, id: currentCategory.id } : category
        )
      );
    } else {
      setCategories((prevCategories) => [
        ...prevCategories,
        { ...newCategory, id: categories.length },
      ]);
    }
  };

  const filteredCategories = categories.filter((category) => {
    if (filter !== "all" && category.status.toLowerCase() !== filter.toLowerCase()) {
      return false;
    }
    if (searchQuery && !category.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="categories-container">
      <Sidebar />
      <div className="main">
        <Header />
        <main className="categories-main">
          <div className="categories-header">
            <h1>Categories</h1>
            <p>Dashboard {'>'} Categories</p>
          </div>
          <div className="categories-controls">
            <input
              type="text"
              placeholder="Search"
              className="categories-search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="categories-buttons">
              <select name="filter" id="filter" className="filter-select" onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button className="add-btn" onClick={handleAddNewClick}>+ Add New</button>
            </div>
          </div>
          <table className="categories-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Category</th>
                <th>Image</th>
                <th>Rank</th>
                <th>Status</th>
                <th>Created on</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((category) => (
                <tr key={category.id}>
                  <td><input type="checkbox" /></td>
                  <td>{category.name}</td>
                  <td><img src={category.image} alt="Category" className="category-image" /></td>
                  <td>{category.rank}</td>
                  <td className={category.status === "Active" ? "status-active" : "status-inactive"}>{category.status}</td>
                  <td>{category.createdOn}</td>
                  <td>
                    <button className="action-view"><Visibility /></button>
                    <button className="action-edit" onClick={() => handleEditClick(category)}><Edit /></button>
                    <button className="action-delete" onClick={() => handleDeleteClick(category.id)}><Delete /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button>{'<'}</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>{'>'}</button>
          </div>
        </main>
      </div>

      <CategoryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveCategory}
        initialCategory={currentCategory}
      />
    </div>
  );
}
