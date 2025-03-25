import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Kontak from "./pages/kontak/Kontak";
import TanyaAI from "./pages/TanyaAi/TanyaAi";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/artikel" element={<Dashboard />} />
        <Route path="/tanya-ai" element={<TanyaAI />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </Router>
  );
};

export default App;
