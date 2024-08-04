import React from "react";

const ResearchPaperBox = ({ title, author, date, imgSrc }) => {
  return (
    <div class="space-y-4 mb-4 md:max-w-[100%] max-w-sm mx-auto">
      <div class="border-[#242424] border-1 rounded-[16px] flex flex-col md:flex-row">
        <div class="flex-shrink-0 md:mb-0 md:mr-4 w-[100%] md:w-[180px] h-[187px]">
          <img src={imgSrc} class="h-full w-full object-cover md:rounded-[15px] rounded-tl-[15px] rounded-tr-[15px]" />
        </div>
        <div class="flex-1 flex flex-col justify-around p-2 md:p-0">
          <div class="flex flex-col md:flex-row justify-between mb-2">
            <h3 class="text-lg font-semibold text-gray-800">{title}</h3>
            <div class="text-gray-500 text-sm text-right md:ml-4 mr-2">
              <p>{date}</p>
            </div>
          </div>
          <p class="text-gray-500 text-sm">By {author}</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperBox;
