import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

// Lazy loading untuk komponen yang tidak langsung terlihat
const AboutUs = lazy(() => import("../components/AboutUs"));
const Keunggulan = lazy(() => import("../components/Keunggulan"));
const RekomendasiProduk = lazy(() => import("../components/RekomendasiProduk"));
const Testimoni = lazy(() => import("../components/Testimoni"));
const Kolaborasi = lazy(() => import("../components/Kolaborasi"));

const Dashboard = () => {
    const { pathname } = useLocation();

    // Scroll otomatis ke atas saat halaman berubah
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <HeroSection />

            {/* Suspense digunakan agar loading lebih smooth */}
            <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <AboutUs />
                <Keunggulan />
                <RekomendasiProduk />
                <Testimoni />
                <Kolaborasi />
            </Suspense>

            <Footer />
        </>
    );
};

export default Dashboard;
