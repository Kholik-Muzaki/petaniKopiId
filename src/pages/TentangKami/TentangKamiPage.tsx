import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutUs from "../../components/AboutUs";
import OurTeam from "../../components/OurTeam";

const TentangKamiPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({ duration: 2000, once: false });
    }, [pathname]);

    return (
        <>
            <Navbar />

            {/* Hero Section with Background Image */}
            <section className="relative py-32 px-5 lg:px-20 bg-gradient-to-r from-green-500 to-green-700 text-center text-white" data-aos="fade-up">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("path-to-your-image.jpg")' }}></div>
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
                    Tentang <span className="text-yellow-300">PetaniKopi</span>.id
                </h1>
                <p className="text-lg lg:text-xl max-w-3xl mx-auto">
                    Platform digital yang membantu petani kopi Indonesia bertumbuh lewat teknologi, komunitas, dan edukasi.
                </p>
            </section>

            {/* About Us Section */}
            <AboutUs />

            {/* Our Team Section */}
            <OurTeam />

            {/* CTA Akhir */}
            <section className="py-20 px-5 lg:px-20 bg-green-600 text-white text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-4">Mari Bangun Masa Depan Petani Kopi Indonesia</h2>
                <p className="text-lg mb-6 max-w-xl mx-auto">
                    Kolaborasi Anda dapat memberikan dampak besar bagi kehidupan petani dan kualitas kopi Nusantara.
                </p>
                <button className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                    Mulai Sekarang
                </button>
            </section>

            <Footer />
        </>
    );
};

export default TentangKamiPage;
