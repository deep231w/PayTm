
import { Routes , Route, BrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import './index.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
