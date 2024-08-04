import React from "react";
import Front from "../../components/Front/front";
import JoinBox from "../../components/JoinBox/JoinBox";

const JoinUs = () => {
  const joinBoxes = [
    {
      title: "Stammerer",
      text: "We want you to overcome your stammer.",
    },
    {
      title: "Volunteer",
      text: "We want you to overcome your stammer.",
    },
    {
      title: "Speech Therapist",
      text: "We want you to overcome your stammer.",
    },
    {
      title: "Researcher",
      text: "We want you to overcome your stammer.",
    },
    {
      title: "Organization",
      text: "We want you to overcome your stammer.",
    },
  ];
  return (
    <div className="bg-[#17372F]">
      <Front title="Join Us" />
      <div className="py-[6rem] sm:py-[8rem] px-[1.25rem] sm:px-[3rem]">
        <h1 className="text-[40px] sm:text-[64px] text-white font-medium font-poppins mb-5">
          Who Are <span className="text-[#C3F499]">You</span>?
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {
            joinBoxes.map((box, index) => (
              <JoinBox key={index} title={box.title} text={box.text}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
