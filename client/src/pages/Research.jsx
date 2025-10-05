function Research() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Research</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Studies</h2>
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-50 rounded">Study 1</li>
            <li className="p-2 hover:bg-gray-50 rounded">Study 2</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Analytics</h2>
          <div className="h-64 bg-gray-100 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default Research
