import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { categorySalesData } from "../../data/extra/newSalesData";

const CategorySalesChart: React.FC = () => {
  const data = categorySalesData.map((sale) => ({
    date: sale.date,
    electronics: sale.categorySales.electronics,
    clothing: sale.categorySales.clothing,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="electronics" fill="rgba(75,192,192,0.4)" />
        <Bar dataKey="clothing" fill="rgba(153,102,255,0.4)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CategorySalesChart;
