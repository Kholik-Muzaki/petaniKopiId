import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Kontak from "./pages/kontak/Kontak";
import TanyaAI from "./pages/TanyaAi/TanyaAi";
import Articles from "./pages/Articles/Articles";
import ArticleDetail from "./pages/Articles/ArticleDetail";
import NotFound from "./pages/NotFound/NotFound";
import VideoPage from "./pages/Video/VideoPage";
import Login from "./pages/Admin/Login/Login";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
import AdminArticles from "./pages/Admin/Articles/AdminArticles";
import TentangKami from "./pages/TentangKami/TentangKamiPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tanya-ai" element={<TanyaAI />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/artikel" element={<Articles />} />
        <Route path="/artikel/:id" element={<ArticleDetail />} />
        <Route path="/video" element={<VideoPage />} />
        {/* notfound */}
        <Route path="*" element={<NotFound />} />
        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/artikel" element={<AdminArticles />} />
      </Routes>
    </Router>
  );
}
export default App;
