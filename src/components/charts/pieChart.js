import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Users", "Cities", "Messages", "Average Age"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 5, 12, 25],
      backgroundColor: ["rgba(252, 53, 132, 0.2)", "rgba(241, 88, 36, 0.2)", "rgba(32, 32, 32, 0.2)", "rgba(138, 163, 232, 0.2)"],
      borderColor: ["rgba(252, 53, 132, 1)", "rgba(241, 88, 36, 1)", "rgba(32, 32, 32, 1)", "rgba(138, 163, 232, 1)"],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}

export default PieChart;
