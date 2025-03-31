import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import ProductModal from "../Components/ProductModal";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import './Products.css';
import { formatGhanaCedi } from '../utils/currencyFormatter';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        const formattedProducts = response.data.map(product => ({
          ...product,
          price: formatGhanaCedi(product.price)
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddNewClick = () => {
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProduct = async (newProduct) => {
    try {
      if (currentProduct) {
        const response = await axios.put(`http://localhost:5000/api/products/${currentProduct._id}`, newProduct);
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === currentProduct._id ? response.data : product
          )
        );
      } else {
        const response = await axios.post('http://localhost:5000/api/products', newProduct);
        setProducts((prevProducts) => [...prevProducts, response.data]);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (filter !== "all" && product.category.toLowerCase() !== filter.toLowerCase()) {
      return false;
    }
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

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
            <input
              type="text"
              placeholder="Search"
              className="products-search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="products-buttons">
              <select name="filter" id="filter" className="filter-select" onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="Wall Paper">Wall Paper</option>
                <option value="Flower">Flower</option>
                <option value="Wall Panel">Wall Panel</option>
                {/* Add more categories as needed */}
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
              {filteredProducts.map((product) => (
                <tr key={product._id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="product-details">
                    <img src={product.image} alt={product.name} />
                    {product.name}
                  </td>
                  <td>{product._id}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.stock}</td>
                  <td className="action-buttons">
                    <button className="view-btn">
                      <Visibility />
                    </button>
                    <button className="edit-btn" onClick={() => handleEditClick(product)}>
                      <Edit />
                    </button>
                    <button className="delete-btn" onClick={() => handleDeleteClick(product._id)}>
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

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProduct}
        initialProduct={currentProduct}
      />
    </div>
  );
}
