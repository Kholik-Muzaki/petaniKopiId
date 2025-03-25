import AiChat from "../../components/AiChat";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const TanyaAI = () => {
    return (
        <>
            <Navbar />
            <section className="py-16 px-5 mt-10 lg:px-20 bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center">
                <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
                    Tanya AI tentang Dunia Kopi ☕
                </h2>
                <p className="text-gray-600 text-center mb-6">
                    Dapatkan jawaban cepat seputar pertanian kopi, teknik budidaya, dan banyak lagi!
                </p>
                <AiChat />
            </section>
            <Footer />
        </>
    );
};

export default TanyaAI;
