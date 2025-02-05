import React from "react";
import "./TopSellingProductsCard.css";

export default function TopSellingProductsCard({ products }) {
  return (
    <div className="top-selling-card">
      <h3>Top Selling Products</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="product-cell">
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
              </td>
              <td>{product.price}</td>
              <td>{product.orders}</td>
              <td>{product.stock}</td>
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
  );
}
