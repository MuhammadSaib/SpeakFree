import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ArticleBox = ({ title, text, imgSrc }) => {
  return (
    <div class="rounded-lg overflow-hidden max-w-sm mx-auto h-[fit-content]">
      <img
        src={imgSrc}
        alt="Journal Image"
        class="w-full h-1/2 object-cover rounded-lg"
      />
      <div class="py-4">
        <h2 class="text-xl font-semibold mb-2">{title}</h2>
        <p class="text-gray-700 mb-4">{text}</p>
        <a href="#" class="text-[#0C8F6F] flex items-center no-underline font-medium">
          Read more
          <span className="text-[16px] h-[30px] w-[30px] flex justify-center items-center bg-[#0C8F6F] text-white rounded-[50%] ml-2">
          <MdArrowOutward />
        </span>
        </a>
      </div>
    </div>
  );
};

export default ArticleBox;
