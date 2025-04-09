import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaNewspaper,
    FaVideo,
    FaBox,
    FaUsers,
    FaSignOutAlt,
} from "react-icons/fa";
import image from "../../image"; // Pastikan logo tersedia di sini

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    const menuItems = [
        { name: "Dashboard", path: "/admin", icon: <FaHome /> },
        { name: "Artikel", path: "/admin/artikel", icon: <FaNewspaper /> },
        { name: "Video", path: "/admin/video", icon: <FaVideo /> },
        { name: "Produk", path: "/admin/produk", icon: <FaBox /> },
        { name: "Pengguna", path: "/admin/users", icon: <FaUsers /> },
    ];

    return (
        <aside
            className={`bg-white text-gray-900 shadow-lg h-screen p-5 flex flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-20"
                }`}
        >
            {/* Header Sidebar */}
            <div className="flex items-center justify-between">
                {/* Logo + Title saat terbuka */}
                {isOpen && (
                    <div className="flex items-center gap-3">
                        <img src={image.logo2} alt="Logo" className="w-12" />
                        <h2 className="text-xl font-bold">Petani<span className="text-green-700">Kopi</span>.Id</h2>
                    </div>
                )}

                {/* Tombol Toggle Sidebar */}
                <button
                    className="text-gray-700 text-xl focus:outline-none hover:text-green-700 transition"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Menu Sidebar */}
            <ul className="mt-8 space-y-4 flex-1">
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.path}
                            className={`flex items-center gap-3 p-3 rounded-lg transition duration-300 ${location.pathname === item.path
                                ? "bg-green-500 text-white"
                                : "hover:bg-green-100 text-gray-900"
                                }`}
                        >
                            {item.icon}
                            {isOpen && <span>{item.name}</span>}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Tombol Logout */}
            <div className="pt-4 border-t border-gray-300">
                <button className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-100 transition w-full">
                    <FaSignOutAlt />
                    {isOpen && <span>Logout</span>}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
