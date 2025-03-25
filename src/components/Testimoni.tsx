import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import image from "../image";
import { useEffect } from "react";
import * as Aos from "aos";
const testimoniPetani = [
    {
        image: image.hamid,
        name: "Nur Hamid",
        location: "Trimulyo, Lampung Barat",
        quote: "Dulu hasil panen saya kurang optimal, tetapi setelah menggunakan teknik yang dipelajari dari PetaniKopi.id, produktivitas meningkat 40%!",
    },
    {
        image: image.maslatif,
        name: "Latif Mansyur",
        location: "Trimulyo, Lampung Barat",
        quote: "Dengan pupuk organik dan cara budidaya modern yang saya pelajari, kualitas kopi saya meningkat pesat dan harga jual lebih tinggi.",
    },
    {
        image: image.masiwan,
        name: "Gunawan",
        location: "Trimulyo, Lampung Barat",
        quote: "Dulu saya kesulitan melawan hama, tapi setelah mengikuti panduan dari PetaniKopi.id, saya bisa menjaga tanaman tetap sehat!",
    },
];

const Testimoni = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: false,
        });
    }, []);
    return (
        <div data-aos="fade-up">
            <section className="py-16 px-5 lg:px-20 bg-white text-gray-800">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Kisah Sukses <span className="text-green-500">Petani Kopi</span></h2>
                    <p className="mt-3 text-gray-600">Cerita nyata dari para petani yang berhasil meningkatkan hasil panen mereka!</p>
                </div>

                {/* Carousel Testimoni */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="w-full max-w-4xl mx-auto"
                >
                    {testimoniPetani.map((petani, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <img src={petani.image} alt={petani.name} className="w-24 h-24 rounded-full object-cover border-4 border-green-500 shadow-md" />
                                <h3 className="text-xl font-semibold mt-4">{petani.name}</h3>
                                <p className="text-sm text-gray-600">{petani.location}</p>
                                <p className="mt-4 text-gray-700 text-center italic">“{petani.quote}”</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>

    );
};

export default Testimoni;
