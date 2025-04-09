import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { videoData } from "../../data/data";
import image from "../../image";

// Lazy loading untuk VideoList
const VideoList = lazy(() => import("../../components/VideoList"));

const VideoPage = () => {
    const { pathname } = useLocation();

    // Scroll otomatis ke atas saat halaman berubah
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Cek jika videoData kosong
    if (!videoData || videoData.length === 0) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
                    <h2 className="text-2xl font-bold text-gray-700">Tidak ada video tersedia</h2>
                </div>
                <Footer />
            </>
        );
    }

    // Ambil kategori unik dari videoData
    const categories = [...new Set(videoData.map(video => video.category))];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                <header
                    className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${image.hero || "/default-header.jpg"})` }}
                >
                    <h1 className="relative text-5xl font-extrabold text-white text-center drop-shadow-lg">
                        Edukasi Video
                    </h1>
                </header>

                <div className="container mx-auto px-6 py-16">
                    <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
                        {categories.map(category => (
                            <VideoList
                                key={category}
                                category={category}
                                videos={videoData.filter(video => video.category === category)}
                            />
                        ))}
                    </Suspense>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VideoPage;
