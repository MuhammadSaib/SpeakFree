// import React from 'react';

// const VideoModal = ({ videoUrl, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//       <div className="relative w-full h-full max-w-4xl max-h-96">
//         <button
//           className="absolute top-2 right-2 text-white text-3xl"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <video src={videoUrl} controls autoPlay className="w-full h-full" />
//       </div>
//     </div>
//   );
// };

// export default VideoModal;

import React from "react";
import ReactPlayer from "react-player";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    // <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1050]">
    //   <div className="relative w-full h-full max-w-screen-lg max-h-screen">
    //     <div className="absolute top-[15%] right-[10%] bg-[#242424] w-[40px] h-[40px] rounded-[50%] text-white text-3xl focus:outline-none flex items-center justify-center">
    //       <button
    //         className="focus:outline-none"
    //         onClick={onClose}
    //       >
    //         &times;
    //       </button>
    //     </div>
    //     <div className="w-full h-full flex items-center justify-center">
    //       <ReactPlayer
    //         url={videoUrl}
    //         controls
    //         playing
    //         className="w-full h-full"
    //       />
    //     </div>
    //   </div>
    // </div>


    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1050]">
          <div className="relative max-w-[100%] flex items-center justify-center">
            <div className="absolute top-[-13%] right-[1%] bg-[#242424] w-[40px] h-[40px] rounded-[50%] text-white text-3xl focus:outline-none flex items-center justify-center">
              <button className="focus:outline-none" onClick={onClose}>
                &times;
              </button>
            </div>
            <ReactPlayer
              url={videoUrl}
              controls
              playing
            />
          </div>
    </div>
  );
};

export default VideoModal;
