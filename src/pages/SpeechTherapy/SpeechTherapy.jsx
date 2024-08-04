import React from "react";
import Front from "../../components/Front/front";
import classes from "./SpeechTherapy.module.css";
import TestimonialBox from "../../components/TestimonialBox/TestimonialBox";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";

const SpeechTherapy = () => {
  return (
    <div className="bg-[#c3f499]">
      <Front title="Speech Therapy" />
      <div className="text-center py-[5rem]">
        <h1 className="text-[#242424] text-[40px] sm:text-[64px] font-medium">Testimonials</h1>
        <p className="text-[#242424D9] text-[20px] sm:text-[32px] mt-[1.5rem] mb-[5rem] mx-3">
          Hear from members who found their voice with us
        </p>
        <div>
          {/* <TestimonialBox /> */}
          <TestimonialSlider/>
        </div>
      </div>
    </div>
  );
};

export default SpeechTherapy;
