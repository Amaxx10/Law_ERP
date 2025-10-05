function Billing() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Billing</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Recent Invoices</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded">
              <span>Invoice #001</span>
              <span className="text-green-600">$1,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
