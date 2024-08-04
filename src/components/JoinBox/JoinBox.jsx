import React from "react";
import { MdArrowOutward } from "react-icons/md";

const JoinBox = ({ title, text }) => {
  return (
    <div
      className="group bg-[#103731] text-white p-6 w-full rounded-[30px] h-[200px] hover:border-[#d9f99d] hover:border-2"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 142.1%), url('/assets/join.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        position: "relative",
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold group-hover:text-[#C3F499]">
            {title}
          </h2>
          <p className="mt-2 text-sm group-hover:text-[#C3F499D9]">{text}</p>
        </div>
      </div>
      <a
        href="#"
        className="group-hover:text-[#C3F499] inline-block mt-4 text-[#fff] py-2 px-4 rounded-full font-bold ml-2 no-underline absolute left-[10%] bottom-[4%]"
      >
        JOIN US
      </a>
      <div
        className="arrow h-[50px] w-[50px] flex justify-center items-center bg-white group-hover:!bg-[#C3F499] absolute left-0 bottom-0 rounded-bl-[27px]"
      >
        <span className="text-[24px] text-black">
          <MdArrowOutward />
        </span>
      </div>
    </div>
  );
};

export default JoinBox;
