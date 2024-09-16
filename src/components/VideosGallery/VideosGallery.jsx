// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';

// const VideoGallery = () => {
//   const [playingUrl, setPlayingUrl] = useState('');

//   const videos = [
//     {
//       title: 'Deadpool 3 Trailer (2024)',
//       url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//       source: 'Watchmovies.com'
//     },
//     {
//       title: 'Deadpool 3 "Wolverine vs Sabretooth"',
//       url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//       source: 'Watchmovies.com'
//     },
//     {
//       title: 'Deadpool 3 "Wolverine vs Sabretooth" Trailer (2024)',
//       url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//       source: 'Watchmovies.com'
//     }
//   ];

//   return (
//     <div className="p-6 bg-gray-100">
//       <h2 className="text-2xl font-bold mb-4">Videos</h2>
//       <div className="flex space-x-4">
//         {videos.map((video, index) => (
//           <div key={index} className="w-1/3">
//             <div
//               className="cursor-pointer bg-black text-white flex items-center justify-center h-48"
//               onClick={() => setPlayingUrl(video.url)}
//             >
//               <span className="text-2xl">▶</span>
//             </div>
//             <p className="mt-2 text-sm font-semibold">{video.title}</p>
//             <p className="text-xs text-gray-500">{video.source}</p>
//           </div>
//         ))}
//       </div>
//       {playingUrl && (
//         <div className="mt-6">
//           <ReactPlayer url={playingUrl} controls={true} playing={true} width="100%" height="auto" />
//         </div>
//       )}
//       <div className="mt-4">
//         <a href="#" className="text-blue-600 hover:underline">View More</a>
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;

import React, { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import VideoModal from "../VideoModal/VideoModal";

const videos = [
  {
    title: "Deadpool 3 Trailer (2024)",
    source: "Watchmovies.com",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: '/assets/resources/1.png'
  },
  {
    title: 'Deadpool 3 "Wolverine vs Sabretooth"',
    source: "Watchmovies.com",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: '/assets/resources/1.png'
  },
  {
    title: 'Deadpool 3 "Wolverine vs Sabretooth" Trailer (2024)',
    source: "Watchmovies.com",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: '/assets/resources/1.png'
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="flex flex-wrap -mx-4">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            source={video.source}
            videoUrl={video.videoUrl}
            thumbnail={video.thumbnail}
            onVideoClick={handleVideoClick}
          />
        ))}
      </div>
      {selectedVideo && (
        <VideoModal videoUrl={selectedVideo} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default VideoGallery;
