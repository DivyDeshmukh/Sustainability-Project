// // TaskCard.jsx
// import React from "react";
// import {
//   CheckCircleIcon,
//   ExclamationCircleIcon,
// } from "@heroicons/react/24/outline";

// const TaskCard = ({ task }) => {
//   return (
//     <div
//       key={task.id}
//       className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
//     >
//       <img
//         src={task.image}
//         alt={task.name}
//         className="w-full h-40 object-cover rounded-t-lg"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold">{task.name}</h3>
//         <p
//           className={`mt-2 ${
//             task.completed ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           Impact: {task.impact}
//         </p>
//         <div className="mt-4 flex items-center">
//           {task.completed ? (
//             <CheckCircleIcon className="h-6 w-6 text-green-600" />
//           ) : (
//             <ExclamationCircleIcon className="h-6 w-6 text-red-600" />
//           )}
//           <span className="ml-2">
//             {task.completed ? "Completed" : "Incomplete"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;


import React from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const TaskCard = ({ task, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded shadow cursor-pointer"
      onClick={onClick}
    >
      <img src={task.image} alt={task.name} className="h-40 w-full object-cover rounded mb-4" />
      {/* <p>Impact: {task.impact}</p>
      <p>Completed: {task.completed ? "Yes" : "No"}</p>
      <p>Verified: {task.verified ? "Yes" : "No"}</p> */}
      <div className="">
        <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{task.name}</h3>
          <div className="flex items-center"><span className="mr-2 font-semibold">Coins: </span><box-icon name='coin' ></box-icon>{task.coins}</div>
        </div>
        
        <p
          className={`mt-2 ${task.completed ? "text-green-600" : "text-red-600"
            }`}
        >
          Impact: {task.impact}
        </p>
        <div className="mt-4 flex items-center">
          {task.completed ? (
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
          ) : (
            <ExclamationCircleIcon className="h-6 w-6 text-red-600" />
          )}
          <span className="ml-2">
            {task.completed && task.verified
              ? "Verified"
              : task.completed && !task.verified
                ? "Verification Pending"
                : "Complete Task"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
