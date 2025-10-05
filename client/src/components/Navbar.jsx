const Navbar = ()=>{
    return(
        <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              ☰
            </button>
            <h1 className="text-xl font-semibold text-gray-800">ERP System</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
            <button className="p-2 rounded-full hover:bg-gray-100">👤</button>
          </div>
        </div>
      </header>
    );
}

export default Navbar;