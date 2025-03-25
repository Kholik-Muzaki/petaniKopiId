
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
            <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[100vh] relative">
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
                                <div className="absolute inset-0 bg-black/50"></div>
                                <div className="relative text-center text-white px-5">
                                    <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                                    <p className="text-base md:text-lg mt-3">{slide.subtitle}</p>
                                    <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                        <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
                                            Pelajari Lebih Lanjut
                                        </button>
                                        <button className="border border-green-500 px-6 py-3 rounded-md text-green-500 hover:bg-green-500 hover:text-white transition">
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
