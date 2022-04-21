import React from "react";
import { Bar, Doughnut, PolarArea, Radar, Scatter, Bubble } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PolarChart({ options,chartData }) {
  return <PolarArea options={options} data={chartData} />;
}

export default PolarChart;