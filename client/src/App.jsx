import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Documents from './pages/Documents'
import Clients from './pages/Clients'
import Calendar from './pages/Calendar'
import Research from './pages/Research'
import Billing from './pages/Billing'
import Workflow from './pages/Workflow'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="documents" element={<Documents />} />
          <Route path="clients" element={<Clients />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="research" element={<Research />} />
          <Route path="billing" element={<Billing />} />
          <Route path="workflow" element={<Workflow />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
