import { Link } from "react-router-dom";
import { FaMugHot } from "react-icons/fa";

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
            {/* Icon Kopi dengan animasi */}
            <div className="bg-white p-6 rounded-full shadow-lg animate-bounce">
                <FaMugHot className="text-6xl text-brown-600" />
            </div>

            {/* Teks Utama */}
            <h1 className="text-6xl font-extrabold text-gray-800 mt-6">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">
                Oops! Halaman tidak ditemukan ☕
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg">
                Sepertinya kamu tersesat dalam dunia kopi. Kembali ke halaman utama dan temukan artikel menarik tentang kopi!
            </p>

            {/* Tombol Kembali */}
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Kembali ke Beranda
            </Link>
        </div>
    );
};

export default NotFound;
