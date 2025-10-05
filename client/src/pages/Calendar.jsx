function Calendar() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Calendar</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 31 }).map((_, i) => (
            <div key={i} className={`aspect-square p-2 border rounded ${(2 * i + 1) % 5 === 0 ? 'bg-green-100' : ''} ${(2 * i + 1) % 3 === 0 ? 'bg-green-600' : ''}`}>
              <span className="text-sm">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar
