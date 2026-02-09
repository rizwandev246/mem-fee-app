const stats = [
  {
    title: "Total Members",
    value: "1,284",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Total Fees Expected",
    value: "LKR 2,450,000",
    color: "from-indigo-400 to-purple-500",
  },
  {
    title: "Total Collected",
    value: "LKR 1,820,000",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Total Pending",
    value: "LKR 630,000",
    color: "from-pink-400 to-rose-500",
  },
];

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`p-4 rounded-xl text-white bg-gradient-to-r ${stat.color}`}
          >
            <p className="text-sm opacity-90">{stat.title}</p>
            <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
