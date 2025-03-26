import React from "react";

interface VideoCardProps {
    title: string;
    link: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, link }) => {
    return (
        <div className="relative group overflow-hidden rounded-xl shadow-md bg-white transition duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative w-full h-52">
                <iframe
                    className="w-full h-full rounded-t-xl"
                    src={link}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-300 hover:bg-green-600 hover:shadow-md"
                >
                    ▶ Tonton Sekarang
                </a>
            </div>
        </div>
    );
};

export default VideoCard;
