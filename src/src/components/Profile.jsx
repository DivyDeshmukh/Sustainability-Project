import React, { useState } from "react";
import UserPost from "./UserPost";
import SavedPost from "./SavedPost";
import UserEvents from "./UserEvents";
import TaskCard from "./TaskCard";

function Profile() {
  const [activeTab, setActiveTab] = useState("Post");

  const tasks =[
    {
      id: 1,
      name: "Plant a tree",
      completed: true,
      verified: true,
      coins: 200,
      impact: "High",
      image: "../../public/plant.jpeg",
    },
    {
      id: 2,
      name: "Reduce water usage",
      completed: true,
      verified: true,
      coins: 200,
      impact: "Medium",
      image: "../../public/water.jpeg",
    },
    {
      id: 3,
      name: "Reduce water usage",

      impact: "Medium", completed: true,
      verified: true,

      coins: 200,
      image: "../../public/events4.jpg",
    },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case "Post":
        return <UserPost />;
      case "Saved":
        return <SavedPost />;
      case "Events":
        return <UserEvents />;
      case "Task Completed":
        return <div className="mx-auto"> <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Impact Based on Performed Tasks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onClick={() => handleCardClick(task)} />
          ))}
        </div>
      </div></div>;
      case "Analytics":
        return <div>Analytics Content</div>;
      default:
        return <div>Post Content</div>;
    }
  };
  return (
    <div className="flex flex-col flex-auto min-w-0 min-h-screen">
      <div className="flex flex-col bg-white shadow">
        {/* Cover image */}
        <div>
          <img
            className="h-40 lg:h-60 w-full object-cover"
            src="../../public/cover.jpg"
            alt="Cover"
          />
        </div>

        {/* User info */}
        <div>
          <div className="flex flex-col flex-0 lg:flex-row items-center max-w-5xl w-full mx-auto px-8 lg:h-18">
            {/* Avatar */}
            <div className="-mt-20 lg:mt-[-63px] rounded-full">
              <img
                className="w-32 h-32 rounded-full border-4 border-white"
                src="../../public/male-04.jpg"
                alt="User avatar"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-8">
              <div className="text-lg font-bold leading-none">Brian Hughes</div>
              <div className="text-secondary">London, UK</div>
            </div>

            {/* Separator */}
            <div className="hidden lg:flex h-8 mx-8 border-l-2"></div>

            {/* Stats */}
            <div className="flex items-center mt-6 lg:mt-0 space-x-6">
              <div className="flex flex-col items-center">
                <span className="font-bold">200k</span>
                <span className="text-sm font-medium text-secondary">Rank</span>
              </div>
            </div>

            {/* Edit Profile Button */}
            <div className="flex items-center gap-4 mt-8 mb-4 lg:m-0 lg:ml-auto">
              <a
                href="/community"
                className="px-4 py-2 bg-slate-400 text-white font-medium rounded-full"
              >
                Community Forum
              </a>
              <a
                href="/editprofile"
                className="px-4 py-2 bg-slate-400 text-white font-medium rounded-full"
              >
                Edit Profile
              </a>
            </div>
          </div>

          {/* About Me */}
          <div className="flex flex-col flex-0 lg:flex-row items-center max-w-5xl w-full mx-auto px-8 lg:h-18 mt-4">
            <div className="lg:ml-40">
              <div className="text-normal font-semibold leading-tight">
                About Me
              </div>
              <div className="text-secondary mt-2">
                I’m a friendly kitchen assistant who suffers from a severe
                phobia of buttons.
                <br />
                Brother of Elijah Jay Watkins, who has phobia of buttons and
                trust issues.
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="mx-auto">
            <div className="flex flex-col  lg:flex-row lg:justify-center items-center max-w-5xl w-full mx-auto px-8 lg:h-18 mt-4 lg:mt-8 mb-4 space-y-4 lg:space-y-0 lg:space-x-6">
              <button
                className={`text-secondary ${activeTab === "Post" ? "text-black" : "text-secondary"
                  }`}
                onClick={() => setActiveTab("Post")}
              >
                Post
              </button>
              <button
                className={`text-secondary ${activeTab === "Saved" ? "text-black" : "text-secondary"
                  }`}
                onClick={() => setActiveTab("Saved")}
              >
                Bookmark
              </button>
              <button
                className={`text-secondary ${activeTab === "Events" ? "text-black" : "text-secondary"
                  }`}
                onClick={() => setActiveTab("Events")}
              >
                Events
              </button>
              <button
                className={`text-secondary ${activeTab === "Task Completed"
                    ? "text-black"
                    : "text-secondary"
                  }`}
                onClick={() => setActiveTab("Task Completed")}
              >
                Task Completed
              </button>
              <button
                className={`text-secondary ${activeTab === "Analytics" ? "text-black" : "text-secondary"
                  }`}
                onClick={() => setActiveTab("Analytics")}
              >
                Analytics
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex flex-col bg-white min-h-screen  p-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default Profile;
