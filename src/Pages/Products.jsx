import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Search } from "@mui/icons-material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import './Products.css';

export default function Products() {
  const products = [
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
  ];

  return (
    <div className="products-page-layout">
      <Sidebar />
      <div className="main-content">
        <Header/>
        
        <div className="products-page">
          <div className="products-header">
            <div className="search-container">
              <Search className="search-icon" />
              <input type="text" className="search-bar" placeholder="Search" />
            </div>
            <button className="add-new-btn">+ Add New</button>
          </div>

          <div className="products-table">
            <table>
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
          </div>
        </div>
      </div>
    </div>
  );
}
