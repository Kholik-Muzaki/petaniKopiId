import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import image from "../image";
import { useEffect } from "react";
import * as Aos from "aos";

const mitraList = [
    { logo: image.logo2, name: "AgroTech Indonesia" },
    { logo: image.logo2, name: "GreenFarm Solutions" },
    { logo: image.logo2, name: "Kopi Nusantara" },
    { logo: image.logo2, name: "EcoGrow Organik" },
    { logo: image.logo2, name: "SmartFarming ID" },
    { logo: image.logo2, name: "SmartFarming ID" },
    { logo: image.logo2, name: "SmartFarming ID" },
];

const Kolaborasi = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: false,
        });
    }, []);

    return (
        <div data-aos="fade-up">
            <section className="py-16 px-5 lg:px-20 bg-gray-50 text-gray-800">
                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Kiri - Keuntungan Kemitraan */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                            Kolaborasi & <span className="text-green-500">Kemitraan</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Kami membuka peluang kolaborasi dengan berbagai pihak untuk mendukung pertanian kopi yang lebih maju dan berkelanjutan.
                        </p>

                        {/* List Keuntungan */}
                        <div className="mt-6 space-y-6">
                            {[{
                                title: "Dukungan Riset & Inovasi",
                                desc: "Berkolaborasi dalam riset pertanian dan pengembangan teknologi kopi.",
                            },
                            {
                                title: "Jangkauan Lebih Luas",
                                desc: "Mitra kami mendapatkan akses ke komunitas petani kopi di seluruh Indonesia.",
                            },
                            {
                                title: "Branding & Promosi",
                                desc: "Kesempatan mempromosikan produk dan layanan yang mendukung petani kopi.",
                            }].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <span className="text-green-500 text-3xl">✅</span>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Kanan - Gambar Representatif */}
                    <div className="flex justify-center">
                        <img src={image.kopicantik} alt="Kolaborasi" className="w-full max-w-md rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Mitra - Satu Baris */}
                <div className="w-full flex justify-center items-center mt-12">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                        className="w-full"
                    >
                        {mitraList.map((mitra, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center items-center">
                                    <div className="flex flex-col items-center bg-white shadow-xl hover:shadow-2xl rounded-lg transition-transform transform hover:scale-105 p-6">
                                        <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full mb-4 overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300">
                                            <img
                                                src={mitra.logo}
                                                alt={mitra.name}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        <p className="text-gray-800 font-semibold text-center">{mitra.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* CTA - Ajakan Kolaborasi */}
                <div className="text-center mt-12">
                    <h3 className="text-2xl font-bold text-gray-900">Ingin Bergabung Sebagai Mitra?</h3>
                    <p className="text-gray-600 mt-2">Dukung petani kopi Indonesia dengan kolaborasi yang bermanfaat.</p>
                    <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        Hubungi Kami
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Kolaborasi;
