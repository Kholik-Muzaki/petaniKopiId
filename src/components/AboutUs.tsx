import image from "../image";
const AboutUs = () => {
    return (
        <section className="py-16 px-5 lg:px-20 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Bagian Kiri - Gambar */}
                <div className="relative w-full">
                    <img src={image.about} alt="Tentang Kami" className="w-full rounded-lg shadow-lg" />
                    <div className="absolute bottom-[-30px] left-10 w-[80%] bg-white p-4 rounded-lg shadow-md hidden md:block">
                        <h3 className="text-lg font-bold text-gray-800">🌱 Misi Kami</h3>
                        <p className="text-sm text-gray-600">Membantu petani kopi meningkatkan kualitas & hasil panen dengan teknologi modern.</p>
                    </div>
                </div>

                {/* Bagian Kanan - Teks */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                        Tentang <span className="text-green-500">PetaniKopi</span>.id
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg text-justify">
                        Kami hadir untuk membantu petani kopi memanfaatkan teknologi, inovasi, dan komunitas dalam meningkatkan produktivitas dan kualitas hasil panen.
                        Dengan akses ke pendidikan pertanian, teknik terbaru, dan produk unggulan, kami percaya kopi Indonesia bisa menjadi lebih kompetitif di pasar global!
                    </p>

                    {/* Statistik / Fakta Menarik */}
                    <div className="mt-6 flex justify-center lg:justify-start space-x-6">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-green-500">15K+</h3>
                            <p className="text-gray-600 text-sm">Petani Kopi Terdaftar</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-green-500">700+</h3>
                            <p className="text-gray-600 text-sm">Artikel, Webinar & Pelatihan</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-green-500">80+</h3>
                            <p className="text-gray-600 text-sm">Mitra & Penyedia Produk</p>
                        </div>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
                            Pelajari Lebih Lanjut
                        </button>
                        <button className="border border-green-500 px-6 py-3 rounded-md text-green-500 hover:bg-green-500 hover:text-white transition">
                            Bergabung dengan Komunitas
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
