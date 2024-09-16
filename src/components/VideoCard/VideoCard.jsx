import React from "react";

const VideoCard = ({ title, source, videoUrl, thumbnail, onVideoClick }) => {
  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer"
      onClick={() => onVideoClick(videoUrl)}
    >
      <div className="bg-black rounded-lg overflow-hidden">
        <div className="relative pt-[56.25%]">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #000000 -50%, rgba(0, 0, 0, 0) 142.1%), url('/assets/resources/2.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
           }}
          >
            <svg
              className="w-16 h-16 text-black bg-white rounded-[50%]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 8l6 4-6 4V8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500">{source}</p>
      </div>
    </div>
  );
};

export default VideoCard;
