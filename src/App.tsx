import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/artikel" element={<Dashboard />} />
        <Route path="/forum" element={<Dashboard />} />
        <Route path="/kontak" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
