import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../image";
import { useEffect } from "react";
import * as Aos from "aos";

// Data Slide - Fokus ke Petani Kopi
const slides = [
    {
        image: image.hero1,
        title: "Meningkatkan Produktivitas Kopi",
        subtitle: "Gunakan teknik modern & pupuk unggulan untuk hasil panen terbaik.",
    },
    {
        image: image.hero2,
        title: "Kiat Sukses Petani Kopi",
        subtitle: "Pelajari cara mengatasi hama, meningkatkan kualitas biji kopi, dan strategi pemasaran.",
    },
    {
        image: image.hero3,
        title: "Rekomendasi Produk Unggulan",
        subtitle: "Temukan pupuk organik, alat pertanian, dan teknologi terbaru untuk petani kopi.",
    },
];

const HeroSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: false,
        });
    }, []);
    return (
        <div data-aos="fade-up">
            <div data-aos="fade-up">
                <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[100vh] relative overflow-hidden">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation
                        className="w-full h-full"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/30"></div>
                                    <div className="relative text-center text-white px-6 md:px-10 py-14 lg:py-20">
                                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-tight md:leading-snug lg:leading-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="text-sm md:text-base lg:text-lg mt-4 opacity-90">
                                            {slide.subtitle}
                                        </p>
                                        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                            <button className="bg-green-700 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-green-800 focus:ring-4 focus:ring-green-300">
                                                Pelajari Lebih Lanjut
                                            </button>
                                            <button className="border-2 border-green-700 px-8 py-4 rounded-lg text-white-700 transition-all duration-300 hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-green-300">
                                                Cek Produk Unggulan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
