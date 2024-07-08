import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Analytics = () => {
  const user = {
    id: 1,
    username: "user1",
    logoUrl: "../../public/user.jpg",
    points: 120,
    tasksAssigned: 10,
    tasksCompleted: 7,
    donations: 5,
  };

  const AnalyticsCard = ({ username, logoUrl, points }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
        <div className="p-4">
          <div className="flex items-center mb-4">
            <img
              src={logoUrl}
              alt={`${username}'s logo`}
              className="h-8 w-8 rounded-full mr-2"
            />
            <h2 className="text-lg font-semibold">{username}</h2>
          </div>
          <div className="text-gray-600 text-sm">Weekly Points: {points}</div>
        </div>
      </div>
    );
  };

  const doughnutData = {
    labels: ["On-Time Departures", "On-Time Arrivals"],
    datasets: [
      {
        label: "# of Votes",
        data: [16, 21],
        backgroundColor: ["#012555", "#36A2EB"],
      },
    ],
  };

  const barData = {
    labels: ["Driver Compliance", "Vehicle Compliance"],
    datasets: [
      {
        label: "# of Votes",
        data: [70, 60],
        backgroundColor: ["#012555", "#36A2EB"],
        borderWidth: 1,
      },
    ],
  };

  const taskCompletionData = {
    labels: ["Assigned Tasks", "Completed Tasks"],
    datasets: [
      {
        label: "Tasks",
        data: [user.tasksAssigned, user.tasksCompleted],
        backgroundColor: ["#FF6384", "#36A2EB"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">User Analytics</h1>
      <div className="flex items-center justify-around mb-8">
        <AnalyticsCard
          username={user.username}
          logoUrl={user.logoUrl}
          points={user.points}
        />
      </div>
      <h2 className="text-[20px] font-bold text-center mb-4 mt-8">User Data</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="w-full h-[230px] flex items-center justify-center">
            <Doughnut data={doughnutData} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="w-full h-[230px] flex items-center justify-center">
            <Bar data={barData} />
          </div>
        </div>
      </div>
      <h2 className="text-[20px] font-bold text-center mb-4 mt-8">
        Task Completion
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="w-full h-[230px] flex items-center justify-center">
          <Bar data={taskCompletionData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
