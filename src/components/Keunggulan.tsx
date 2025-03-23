import { FaSeedling, FaBookOpen, FaComments, FaShoppingCart } from "react-icons/fa";

const Keunggulan = () => {
    const features = [
        {
            icon: <FaSeedling className="text-green-500 text-4xl mb-4" />,
            title: "Teknik Budidaya Modern",
            description: "Panduan lengkap dari persiapan lahan hingga panen berkualitas tinggi.",
        },
        {
            icon: <FaBookOpen className="text-green-500 text-4xl mb-4" />,
            title: "Artikel",
            description: "Belajar langsung dari ahli pertanian kopi melalui artikel yang interaktif.",
        },
        {
            icon: <FaComments className="text-green-500 text-4xl mb-4" />,
            title: "Komunitas & Konsultasi",
            description: "Diskusi dan berbagi ilmu dengan petani kopi lain di seluruh Indonesia.",
        },
        {
            icon: <FaShoppingCart className="text-green-500 text-4xl mb-4" />,
            title: "Rekomendasi Produk Unggulan",
            description: "Dapatkan akses ke produk terbaik seperti pupuk, bibit unggul, dan alat pertanian.",
        },
    ];

    return (
        <section className="py-16 px-5 lg:px-20 bg-white text-gray-800">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Keunggulan <span className="text-green-500">PetaniKopi.id</span></h2>
                <p className="mt-3 text-gray-600">Kenapa ribuan petani kopi bergabung dengan kami?</p>
            </div>

            {/* Grid Keunggulan */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="icon">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
                        <p className="text-gray-600 mt-2 text-center">{feature.description}</p>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default Keunggulan;
