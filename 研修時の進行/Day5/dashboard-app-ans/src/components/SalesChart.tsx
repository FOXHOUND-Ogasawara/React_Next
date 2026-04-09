import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  dailySalesData,
  monthlySalesData,
  weeklySalesData,
} from "../data/salesData";

interface SalesData {
  label: string;
  sales: number;
}

const SalesChart = () => {
  const [data, setData] = useState<SalesData[]>(dailySalesData);
  const [period, setPeriod] = useState("daily");

  const handleDataChange = (selectedPeriod: string) => {
    setPeriod(selectedPeriod);
    if (selectedPeriod === "daily") {
      setData(dailySalesData);
    } else if (selectedPeriod === "weekly") {
      setData(weeklySalesData);
    } else if (selectedPeriod === "monthly") {
      setData(monthlySalesData);
    }
  };
  return (
    <div>
      <ButtonGroup variant="outlined" size="small" sx={{ mb: 2 }}>
        <Button
          onClick={() => handleDataChange("daily")}
          variant={period === "daily" ? "contained" : "outlined"}
        >
          日別
        </Button>
        <Button
          onClick={() => handleDataChange("weekly")}
          variant={period === "weekly" ? "contained" : "outlined"}
        >
          週別
        </Button>
        <Button
          onClick={() => handleDataChange("monthly")}
          variant={period === "monthly" ? "contained" : "outlined"}
        >
          月別
        </Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" name="売上" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
