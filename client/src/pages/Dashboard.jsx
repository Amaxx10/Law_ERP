function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold text-gray-700">Total Clients</h3>
          <p className="text-2xl mt-2">128</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold text-gray-700">Active Projects</h3>
          <p className="text-2xl mt-2">25</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold text-gray-700">Pending Tasks</h3>
          <p className="text-2xl mt-2">12</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
