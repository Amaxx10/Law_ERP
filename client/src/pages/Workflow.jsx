function Workflow() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Workflow</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-4">To Do</h3>
          <div className="space-y-2">
            <div className="p-2 bg-gray-50 rounded">Task 1</div>
            <div className="p-2 bg-gray-50 rounded">Task 2</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-4">In Progress</h3>
          <div className="space-y-2">
            <div className="p-2 bg-gray-50 rounded">Task 3</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-4">Completed</h3>
          <div className="space-y-2">
            <div className="p-2 bg-gray-50 rounded">Task 4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workflow
