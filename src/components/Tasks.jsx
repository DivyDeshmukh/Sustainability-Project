// import React from "react";
// import TaskCard from "../components/TaskCard";
// import StatsCard from "../components/StatsCard";

// const Tasks = () => {
//   const tasks = [
//     {
//       id: 1,
//       name: "Plant a tree",
//       completed: true,
//       impact: "High",
//       image: "../../public/plant.jpeg",
//     },
//     {
//       id: 2,
//       name: "Reduce water usage",
//       completed: false,
//       impact: "Medium",
//       image: "../../public/water.jpeg",
//     },
//     {
//       id: 3,
//       name: "Reduce water usage",
//       completed: false,
//       impact: "Medium",
//       image: "../../public/events4.jpg",
//     },
//   ];
  
//   const completedTasks = tasks.filter((task) => task.completed).length;
//   const remainingTasks = tasks.length - completedTasks;
 

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4">Assigned Tasks</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <StatsCard type="total" count={tasks.length} />
//           <StatsCard type="completed" count={completedTasks} />
//           <StatsCard type="remaining" count={remainingTasks} />
//         </div>
//       </div>

//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4">
//           Impact Based on Performed Tasks
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tasks.map((task) => (
//             <TaskCard key={task.id} task={task} />
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Tasks;
import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import StatsCard from "../components/StatsCard";
import TaskDialog from "../components/TaskDialog";

const Tasks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Plant a tree",
      completed: true,
      verified: true,
      coins:200,
      impact: "High",
      image: "../../public/plant.jpeg",
    },
    {
      id: 2,
      name: "Reduce water usage",
      completed: false,
      verified: false,
      coins:200,
      impact: "Medium",
      image: "../../public/water.jpeg",
    },
    {
      id: 3,
      name: "Reduce water usage",
      completed: false,
      impact: "Medium",
      verified: false,
      coins:200,
      image: "../../public/events4.jpg",
    },
  ]);

  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  const handleCardClick = (task) => {
    if (!task.completed) {
      setSelectedTask(task);
      setIsDialogOpen(true);
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedTask(null);
  };
  const markTaskCompleted = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === selectedTask.id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    closeDialog();
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-[62px]">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Assigned Tasks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard type="total" count={tasks.length} />
          <StatsCard type="completed" count={completedTasks} />
          <StatsCard type="remaining" count={remainingTasks} />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Impact Based on Performed Tasks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onClick={() => handleCardClick(task)} />
          ))}
        </div>
      </div>

      {isDialogOpen && (
        <TaskDialog ask={selectedTask} onClose={closeDialog} onSave={markTaskCompleted} />
      )}
    </div>
  );
};

export default Tasks;
