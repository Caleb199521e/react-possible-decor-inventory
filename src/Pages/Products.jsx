import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import ProductModal from "../Components/ProductModal";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import './Products.css';

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: "#456787",
      name: "Wall Paper",
      price: "GH₵299",
      category: "Wall Paper",
      stock: 120,
      image: "https://via.placeholder.com/50",
    },
    {
      id: "#564312",
      name: "Flower",
      price: "GH₵500",
      category: "Flower",
      stock: 34,
      image: "https://via.placeholder.com/50",
    },
    {
      id: "#147809",
      name: "Wall Panel",
      price: "GH₵199",
      category: "Wall Panel",
      stock: 56,
      image: "https://via.placeholder.com/50",
    },
    // Add more products as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: `#${Math.floor(Math.random() * 1000000)}` },
    ]);
  };

  return (
    <div className="products-container">
      <Sidebar />
      <div className="main">
        <Header />

        <main className="products-main">
          <div className="products-header">
            <h1>Products</h1>
            <p>Dashboard {'>'} Products</p>
          </div>

          <div className="products-controls">
            <input type="text" placeholder="Search" className="products-search" />
            <div className="products-buttons">
              <select name="filter" id="filter" className="filter-select">
                <option value="all">All</option>
                <option value="received">Received</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <button className="add-new-btn" onClick={handleAddNewClick}>+ Add New</button>
            </div>
          </div>

          <table className="products-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Product ID</th>
                <th>Price</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="product-details">
                    <img src={product.image} alt={product.name} />
                    {product.name}
                  </td>
                  <td>{product.id}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.stock}</td>
                  <td className="action-buttons">
                    <button className="view-btn">
                      <Visibility />
                    </button>
                    <button className="edit-btn">
                      <Edit />
                    </button>
                    <button className="delete-btn">
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button>&lt;</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>&gt;</button>
          </div>
        </main>
      </div>

      <ProductModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveProduct} />
    </div>
  );
}
