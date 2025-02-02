import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function SalesPurchaseCard() {
  const chartRef = useRef(null); // Reference to the canvas element
  const chartInstance = useRef(null); // Reference to the Chart.js instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Sales",
            data: [2000, 4000, 6000, 8000, 7000, 5000, 10000],
            backgroundColor: "#7c3aed",
          },
          {
            label: "Purchases",
            data: [1500, 3000, 5000, 7000, 6000, 4000, 8000],
            backgroundColor: "#3b82f6",
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Cleanup function to destroy the chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="sales-purchase-card">
      <h3>Sales & Purchase</h3>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
