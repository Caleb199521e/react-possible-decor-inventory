import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./ProductSummaryCard.css";

export default function ProductSummaryCard({ totalStock, inStock, toBeReceived }) {
  const percentage = (inStock / totalStock) * 100;

  const data = {
    labels: ["In Stock", "To Be Received"],
    datasets: [
      {
        data: [inStock, toBeReceived],
        backgroundColor: ["#7c3aed", "#eaeaea"],
        hoverBackgroundColor: ["#5a24a1", "#d4d4d4"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="product-summary-card">
      <h3>Product Summary</h3>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
        <div className="chart-center">
          <span>{`${percentage.toFixed(1)}%`}</span>
        </div>
      </div>
      <div className="summary-details">
        <div>
          <h4>{inStock}</h4>
          <p>Quantity in hand</p>
        </div>
        <div>
          <h4>{toBeReceived}</h4>
          <p>To be received</p>
        </div>
      </div>
    </div>
  );
}
