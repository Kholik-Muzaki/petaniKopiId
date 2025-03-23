import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Keunggulan from "../components/Keunggulan";
import Kolaborasi from "../components/Kolaborasi";
import Navbar from "../components/Navbar";
import RekomendasiProduk from "../components/RekomendasiProduk";
import Testimoni from "../components/Testimoni";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <Keunggulan />
            <RekomendasiProduk />
            <Testimoni />
            <Kolaborasi />
            <Footer />
        </>
    )
}

export default Dashboard;