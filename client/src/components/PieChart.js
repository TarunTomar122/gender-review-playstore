import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ options,chartData }) {
  return <Pie options={options} data={chartData} />;
}

export default PieChart;