import React from "react";
import "./TestimonialBox.css";

const TestimonialBox = () => {
  return (
    // <div>
    //   <p>“A wonderful journey throughout. SpeakFree has really helped me improve my speech.”</p>
    //   <div className="namebox">
    //     <h5>Nicolas Cage</h5>
    //     <p>Member</p>
    //   </div>
    // </div>
    <div class="testimonial-box">
      <div class="testimonial-text">
        "A wonderful journey throughout. SpeakFree has really helped me improve
        my speech."
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officiis? */}
      </div>
      <div class="member-name">
        Nicolas Cage
        <p class="member-role">Member</p>
      </div>
    </div>
  );
};

export default TestimonialBox;
