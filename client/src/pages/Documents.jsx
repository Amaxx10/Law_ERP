function Documents() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Documents</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Sample Document</td>
              <td className="px-6 py-4">PDF</td>
              <td className="px-6 py-4">2024-01-20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Documents
