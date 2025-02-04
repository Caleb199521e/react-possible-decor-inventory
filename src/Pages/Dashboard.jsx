import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Card from "../Components/Card";
import SalesPurchaseCard from "../Components/SalesPurchaseCard";
import TopSellingProductsCard from "../Components/TopSellingProductsCard";
import RecentOrdersCard from "../Components/RecentOrdersCard";
import ProductSummaryCard from "../Components/ProductSummaryCard";
import StockAlertCard from "../Components/StockAlertCard";
import { AttachMoney, 
        LocalShipping, 
        NewReleases, 
        Category,
        CalendarToday
 } 
 from "@mui/icons-material";

import "./Dashboard.css";

export default function Dashboard() {
  const topSellingProducts = [
    {
      name: "Wall Paper",
      price: "$299",
      orders: 34,
      stock: 510,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Flower",
      price: "$500",
      orders: 28,
      stock: 417,
      image: "https://via.placeholder.com/50",
    },
    // Add more products here
  ];

  const totalStock = 2000;
  const inStock = 1500;
  const toBeReceived = 500;

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main">
        {/* Header */}
        <Header />


        {/* Dashboard Content */}
        <main className="content">
          <div className="header-down">
                  
                  <p>Activity</p>
          
                  <div className="weekly">
                  <span>
                    <CalendarToday fontSize="small" /> 10 Dec - 16 Dec
                  </span>
                  <span>Weekly</span>
                  </div>
                  
                </div>
          {/* Cards Section */}
          <div className="cards-section">
            <Card
              title="Inventory Value"
              value="$54,890"
              icon={<AttachMoney />}
              change="+14.5% from last week"
              color="green"
            />
            <Card
              title="Total Orders"
              value="2,656"
              icon={<Category />}
              change="+7.5% from last week"
              color="green"
            />
            <Card
              title="New Orders"
              value="769"
              icon={<NewReleases />}
              change="+1.2% from last week"
              color="green"
            />
            <Card
              title="Delivered"
              value="367"
              icon={<LocalShipping />}
              change="-7.8% from last week"
              color="red"
            />
          </div>

          {/* Add chart, tables, and other sections here */}
          <div className="charts-section">
            <SalesPurchaseCard />
            <TopSellingProductsCard products={topSellingProducts} />
          </div>
          
          <div className="recent-orders-card">
          <RecentOrdersCard />
          </div>

          <div className="bottom-section">
            <StockAlertCard />
            <ProductSummaryCard
               totalStock={totalStock}
              inStock={inStock}
              toBeReceived={toBeReceived}
          />
          </div>
          
        </main>
      </div>
    </div>
  );
}
