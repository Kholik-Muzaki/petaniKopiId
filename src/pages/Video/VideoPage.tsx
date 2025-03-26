import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import { videoData } from "../../data/data";
import image from "../../image";

const VideoPage: React.FC = () => {
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
                    {categories.map(category => (
                        <VideoList
                            key={category}
                            category={category}
                            videos={videoData.filter(video => video.category === category)}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VideoPage;
