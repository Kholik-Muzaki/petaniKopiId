import * as Aos from "aos";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
        });
    }, []);
    return (
        <div data-aos="fade-up">
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Kolom 1: Logo & Deskripsi */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">Petani<span className="text-green-500">Kopi</span>.id</h2>
                        <p className="mt-3 text-gray-400 text-sm">
                            Meningkatkan produktivitas petani kopi melalui edukasi, komunitas, dan teknologi modern.
                        </p>
                    </div>

                    {/* Kolom 2: Navigasi */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-400 transition">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Artikel</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Komunitas</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Mitra</a></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Bantuan */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Bantuan</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-400 transition">FAQ</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Kontak Kami</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Kebijakan Privasi</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Syarat & Ketentuan</a></li>
                        </ul>
                    </div>

                    {/* Kolom 4: Sosial Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl"><FaFacebook /></a>
                            <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl"><FaInstagram /></a>
                            <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl"><FaTwitter /></a>
                            <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl"><FaYoutube /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
                    © {new Date().getFullYear()} PetaniKopi.id | Semua Hak Dilindungi
                </div>
            </footer>
        </div>

    );
};

export default Footer;
