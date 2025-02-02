// Components/StockAlertCard.js
import React from "react";
import "./StockAlertCard.css";

export default function StockAlertCard() {
  const stockItems = [
    { product: "Wall Panel", id: "#345675", remaining: "05" },
    { product: "Wall Panel", id: "#4568932", remaining: "09" },
    { product: "Flower", id: "#642907", remaining: "10" },
  ];

  return (
    <div className="stock-alert-card">
      <h3>Stock Alert</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product ID</th>
            <th>Remaining Quantity</th>
          </tr>
        </thead>
        <tbody>
          {stockItems.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.id}</td>
              <td className={item.remaining <= 10 ? "low-stock" : ""}>
                {item.remaining}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
