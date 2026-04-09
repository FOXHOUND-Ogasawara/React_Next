import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { periodSalesData } from "../../data/extra/newSalesData";

const PeriodSalesChart: React.FC = () => {
  const [period, setPeriod] = useState("daily");

  const filteredData = periodSalesData
    .filter((sale) => sale.period === period)
    .map((sale) => ({
      label: sale.label,
      value: sale.value,
    }));

  return (
    <div>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => setPeriod("daily")}>Daily</Button>
        <Button onClick={() => setPeriod("weekly")}>Weekly</Button>
        <Button onClick={() => setPeriod("monthly")}>Monthly</Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ff6384"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PeriodSalesChart;
