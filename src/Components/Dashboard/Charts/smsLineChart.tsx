import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function SMSLineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        data: [15, 20, 30, 20, 40, 40, 40, 45, 45],
        borderColor: "#FF7A00",
        pointBorderColor: "Transparent",
        pointBorderwidth: 6,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        min: 0,
        max: 50,
        grid: {
          display: false,
          color: "rgba(217,143,7,0.1)",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default SMSLineChart;
