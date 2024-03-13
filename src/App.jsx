import Grafil from "./pages/Grafil";
import Tapang from "./pages/Tapang";
import Gerente from "./pages/Gerente";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/grafil" element={<Grafil />} />
          <Route path="/tapang" element={<Tapang />} />
          <Route path="/gerente" element={<Gerente />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
