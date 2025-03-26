import React from "react";
import VideoCard from "./VideoCard";
import { Video } from "../data/data";

interface VideoListProps {
    category: string;
    videos: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ category, videos }) => {
    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                {category}
                <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-green-500 rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {videos.map(video => (
                    <VideoCard key={video.id} title={video.title} link={video.link} />
                ))}
            </div>
        </div>
    );
};

export default VideoList;
