"use client";

import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./statCard";

const Dashboard = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
  xl:overflow-auto gap-10 pb-4 custom-grid-rows"
    >
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2021"
        details={[
          {
            title: "Customer Growth",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "10.00",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="sales & Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2021"
        details={[
          {
            title: "Sales",
            amount: "75.00",
            changePercentage: 11,
            IconComponent: TrendingUp,
          },
          {
            title: "Discount",
            amount: "70.00",
            changePercentage: -6,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Dues & Pending Orders"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2021"
        details={[
          {
            title: "Dues",
            amount: "200.00",
            changePercentage: 99,
            IconComponent: TrendingUp,
          },
          {
            title: "pending Orders",
            amount: "102.00",
            changePercentage: -22,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
