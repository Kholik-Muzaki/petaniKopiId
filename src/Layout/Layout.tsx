import AdminHeader from "../components/Admin/Header";
import Sidebar from "../components/Admin/SideBar";

interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Konten Utama */}
            <main className="flex-1 bg-gray-50 min-h-screen">
                <AdminHeader />
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
};

export default Layout;
