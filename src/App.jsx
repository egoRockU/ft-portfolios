import Grafil from "./pages/Grafil"
import Tapang from './pages/Tapang'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/grafil" element={<Grafil />} />
          <Route path="/tapang" element={<Tapang />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
