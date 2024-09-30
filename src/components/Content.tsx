import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "My Dataset",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

// const options = {
//   scales: {
//     x: {
//       type: "category", // This is crucial for using a category axis
//     },
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

const Content = () => {
  return (
    <div className="m-[40px] w-auto h-[780px] flex gap-[80px]">
      <div className="w-[1457px] h-auto">
        <Bar data={data} />
      </div>
      <div className="w-[359px] h-auto bg-primary rounded"></div>
    </div>
  );
};

export default Content;
