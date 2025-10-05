function Clients() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Clients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Client Name</h3>
          <p className="text-gray-600 text-sm mt-1">client@email.com</p>
          <div className="mt-4 flex justify-end">
            <button className="text-blue-600 hover:text-blue-800">View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
