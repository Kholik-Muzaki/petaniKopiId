import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../image"; // Sesuaikan path gambar logo

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md h-[72px] flex items-center justify-between px-5 lg:px-16 z-50">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={image.logo2} alt="Logo" className="w-10 h-10 object-cover" />
                    <h2 className="font-bold text-[22px] ms-2">
                        Petani<span className="text-green-500">Kopi</span>.id
                    </h2>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-8 text-gray-800 font-semibold">
                    <li><Link to="/" className="hover:text-green-500 transition">Home</Link></li>

                    {/* Dropdown Edukasi */}
                    <li className="relative group">
                        <button className="hover:text-green-500 transition">Edukasi</button>
                        <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48">
                            <li><Link to="/artikel" className="block px-4 py-2 hover:bg-gray-100">Artikel</Link></li>
                            <li><Link to="/video" className="block px-4 py-2 hover:bg-gray-100">Video</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/tanya-ai" className="hover:text-green-500 transition">Tanya AI</Link></li>
                    <li><Link to="/kontak" className="hover:text-green-500 transition">Kontak</Link></li>
                </ul>

                {/* Tombol Sign In & Register (Desktop) */}
                <div className="hidden lg:flex space-x-4">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">Sign In</button>
                    <button className="border border-green-500 px-6 py-2 rounded-md hover:bg-green-600 hover:text-white transition">Register</button>
                </div>

                {/* Hamburger Button (Mobile) */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-800 focus:outline-none">
                    {isOpen ? (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-screen w-2/3 sm:w-1/2 bg-white/80 backdrop-blur-md shadow-lg transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col justify-center items-center`}>
                <ul className="text-gray-800 text-lg w-full text-center space-y-6">
                    <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition">Home</Link></li>

                    {/* Dropdown Menu Edukasi */}
                    <li>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="hover:text-green-500 transition">
                            Edukasi {isDropdownOpen ? "▲" : "▼"}
                        </button>
                        {isDropdownOpen && (
                            <ul className="mt-2">
                                <li><Link to="/artikel" className="block px-4 py-2 hover:bg-gray-100">Artikel</Link></li>
                                <li><Link to="/video" className="block px-4 py-2 hover:bg-gray-100">Video</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/tanya-ai" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition">Tanya AI</Link></li>
                    <li><Link to="/kontak" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition">Kontak</Link></li>
                </ul>

                {/* Tombol Sign In & Register (Mobile) */}
                <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">Sign In</button>
                <button className="mt-3 border border-green-500 px-6 py-2 rounded-md hover:bg-green-600 hover:text-white transition">Register</button>
            </div>

            {/* Overlay saat menu terbuka */}
            {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-30" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default Navbar;
