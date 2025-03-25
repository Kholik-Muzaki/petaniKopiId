import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import image from "../image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import * as Aos from "aos";

const produkRekomendasi = [
    {
        image: image.pupuk,
        title: "Pupuk Organik Premium",
        description: "Meningkatkan kesuburan tanah dan mempercepat pertumbuhan tanaman kopi.",
    },
    {
        image: image.bibit,
        title: "Bibit Kopi Unggul",
        description: "Bibit berkualitas tinggi untuk hasil panen yang lebih optimal.",
    },
    {
        image: image.drone,
        title: "Alat Pertanian Modern",
        description: "Meningkatkan efisiensi kerja petani dalam merawat kebun kopi.",
    },
    {
        image: image.insektisida,
        title: "Insektisida Ramah Lingkungan",
        description: "Melindungi tanaman kopi dari hama tanpa merusak ekosistem.",
    },
];

const RekomendasiProduk = () => {
    useEffect(() => {
            Aos.init({
                duration: 3000,
                once: false,
            });
        }, []);
    return (
        <div data-aos="fade-up">
            <section className="py-16 px-5 lg:px-20 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Bagian Kiri - Deskripsi */}
                <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                        Rekomendasi <span className="text-green-500">Produk</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Dapatkan produk terbaik untuk meningkatkan hasil panen kopi.
                        Rekomendasi ini dibuat berdasarkan kebutuhan utama petani kopi!
                    </p>
                    <ul className="mt-6 space-y-4 text-gray-700">
                        <li className="flex items-center">
                            ✅ Pupuk organik dan nutrisi berkualitas tinggi.
                        </li>
                        <li className="flex items-center">
                            ✅ Bibit kopi unggulan yang tahan hama.
                        </li>
                        <li className="flex items-center">
                            ✅ Alat pertanian modern untuk efisiensi kerja.
                        </li>
                        <li className="flex items-center">
                            ✅ Perlindungan tanaman dengan pestisida alami.
                        </li>
                    </ul>
                </div>

                {/* Bagian Kanan - Carousel Modern */}
                <div className="relative w-full">
                    <Swiper
                        modules={[Autoplay, Navigation, EffectCoverflow]}
                        spaceBetween={30}
                        slidesPerView={1.3}
                        centeredSlides={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        effect="coverflow"
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        coverflowEffect={{
                            rotate: 20,
                            stretch: 0,
                            depth: 150,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        className="w-full h-96 rounded-lg overflow-hidden"
                    >
                        {produkRekomendasi.map((produk, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="w-full h-full bg-cover bg-center flex flex-col justify-end p-6 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                                    style={{
                                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${produk.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="bg-black/50 p-4 rounded-lg">
                                        <h3 className="text-2xl font-semibold">{produk.title}</h3>
                                        <p className="text-sm mt-2">{produk.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Tombol Navigasi */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                        <button className="swiper-button-prev p-3 rounded-full">
                            <FaArrowLeft className="text-gray-600 text-lg" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                        <button className="swiper-button-next p-3 rounded-full">
                            <FaArrowRight className="text-gray-600 text-lg" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
        </div>
        
    );
};

export default RekomendasiProduk;
