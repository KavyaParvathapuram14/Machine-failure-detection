import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Charts({ data }) {
  if (!data || data.length === 0) return <p>No historical data available.</p>;

  // Generate labels
  const labels = data.map((_, i) => `Entry ${i + 1}`);

  // Line Chart Dataset
  const lineDataset = {
    labels,
    datasets: [
      {
        label: "Risk Level (1=Low, 2=Medium, 3=High)",
        data: data.map((d) =>
          d.riskLevel === "High" ? 3 : d.riskLevel === "Medium" ? 2 : 1
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  // Bar Chart Dataset
  const barDataset = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: data.map((d) => d.temperature),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Vibration",
        data: data.map((d) => d.vibration),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Power Usage",
        data: data.map((d) => d.powerUsage),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  // Pie Chart Dataset
  const riskDistribution = data.reduce(
    (acc, d) => {
      if (d.riskLevel === "High") acc.high += 1;
      if (d.riskLevel === "Medium") acc.medium += 1;
      if (d.riskLevel === "Low") acc.low += 1;
      return acc;
    },
    { high: 0, medium: 0, low: 0 }
  );

  const pieDataset = {
    labels: ["High Risk", "Medium Risk", "Low Risk"],
    datasets: [
      {
        label: "Risk Distribution",
        data: [riskDistribution.high, riskDistribution.medium, riskDistribution.low],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="charts">
      <h2>Historical Risk Data</h2>
      {/* Line Chart */}
      <Line data={lineDataset} />

      {/* Bar Chart */}
      <h3>Parameter Comparison</h3>
      <Bar data={barDataset} />

      {/* Pie Chart */}
      <h3>Risk Level Distribution</h3>
      <Pie data={pieDataset} />
    </div>
  );
}

export default Charts;
