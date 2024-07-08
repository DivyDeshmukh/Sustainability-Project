import React from "react";

const users = [
  {
    logo: "public/user1.png",
    name: "John Doe",
    city: "New York",
    state: "NY",
    points: 1500,
  },
  {
    logo: "public/user1.png",
    name: "Jane Smith",
    city: "Los Angeles",
    state: "CA",
    points: 1200,
  },
  {
    logo: "public/user1.png",
    name: "Katherine",
    city: "Belgium",
    state: "NY",
    points: 1000,
  },
  {
    logo: "public/user1.png",
    name: "Michael",
    city: "Texas",
    state: "CA",
    points: 800,
  },
  {
    logo: "public/user1.png",
    name: "Yassine",
    city: "Denmark",
    state: "NY",
    points: 1300,
  },
  {
    logo: "public/user1.png",
    name: "Jose",
    city: "California",
    state: "CA",
    points: 1800,
  },
];

const Leaderboard = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold mb-8">Leaderboard</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                State
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Points
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.logo}
                        alt={`${user.name} logo`}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.city}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.state}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.points}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
