import Grafil from "./pages/Grafil";
import Tapang from "./pages/Tapang";
import Gerente from "./pages/Gerente";
import Test from "./pages/Test";
import GerenteResume from "./pages/GerenteResume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/grafil" element={<Grafil />} />
          <Route path="/tapang" element={<Tapang />} />
          <Route path="/gerente" element={<Gerente />} />
          <Route path="/test" element={<Test />} />
          <Route path="/gerenteresume" element={<GerenteResume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
