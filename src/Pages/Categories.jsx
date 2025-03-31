import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import CategoryModal from "../Components/CategoryModal";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import "./Categories.css";

const API_URL = "http://localhost:5000/api/categories"; // Adjust API URL

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  // Fetch categories from backend
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(API_URL);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Open modal for adding new category
  const handleAddNewClick = () => {
    setCurrentCategory(null);
    setIsModalOpen(true);
  };

  // Open modal for editing category
  const handleEditClick = (category) => {
    setCurrentCategory(category);
    setIsModalOpen(true);
  };

  // Delete category from backend
  const handleDeleteClick = async (categoryId) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await axios.delete(`${API_URL}/${categoryId}`);
      fetchCategories(); // Refresh categories
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Save category (Add or Update)
  const handleSaveCategory = async (newCategory) => {
    try {
      if (currentCategory) {
        // Update category
        await axios.put(`${API_URL}/${currentCategory._id}`, newCategory);
      } else {
        // Add new category
        await axios.post(API_URL, newCategory);
      }
      fetchCategories(); // Refresh categories
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  // Filter categories based on search and status
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
            <p>Dashboard {" > "} Categories</p>
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
                <tr key={category._id}>
                  <td><input type="checkbox" /></td>
                  <td>{category.name}</td>
                  <td><img src={category.image} alt="Category" className="category-image" /></td>
                  <td>{category.rank}</td>
                  <td className={category.status === "Active" ? "status-active" : "status-inactive"}>
                    {category.status}
                  </td>
                  <td>{new Date(category.createdOn).toLocaleDateString()}</td>
                  <td>
                    <button className="action-view"><Visibility /></button>
                    <button className="action-edit" onClick={() => handleEditClick(category)}><Edit /></button>
                    <button className="action-delete" onClick={() => handleDeleteClick(category._id)}><Delete /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button>{"<"}</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>{">"}</button>
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
