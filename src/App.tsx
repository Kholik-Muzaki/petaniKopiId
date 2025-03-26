import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Kontak from "./pages/kontak/Kontak";
import TanyaAI from "./pages/TanyaAi/TanyaAi";
import Articles from "./pages/Articles/Articles";
import ArticleDetail from "./pages/Articles/ArticleDetail";
import NotFound from "./pages/NotFound/NotFound";
import VideoPage from "./pages/Video/VideoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tanya-ai" element={<TanyaAI />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/artikel" element={<Articles />} />
        <Route path="/artikel/:id" element={<ArticleDetail />} />
        <Route path="/video" element={<VideoPage />} />
        {/* notfound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
