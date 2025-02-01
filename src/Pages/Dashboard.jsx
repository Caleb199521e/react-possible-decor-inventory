import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Card from "../Components/Card";
import { AttachMoney, LocalShipping, NewReleases, Category } from "@mui/icons-material";
import "./Dashboard.css";

export default function Dashboard() {
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
          
        </main>
      </div>
    </div>
  );
}
