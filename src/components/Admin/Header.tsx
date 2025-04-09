import { FaUserCircle } from "react-icons/fa";

const AdminHeader = () => {
    return (
        <header className="bg-gradient-to-r from-green-500 to-green-700 shadow-lg p-4 flex justify-between items-center rounded-b-lg">
            {/* Judul Dashboard */}
            <h1 className="text-2xl font-bold text-white drop-shadow-md">
                Dashboard Admin
            </h1>

            {/* Info Admin */}
            <div className="flex items-center gap-3">
                <p className="text-white text-sm font-medium">
                    Selamat datang, <span className="font-bold">Admin</span>!
                </p>
                <FaUserCircle className="text-3xl text-white drop-shadow-md" />
            </div>
        </header>
    );
};

export default AdminHeader;
