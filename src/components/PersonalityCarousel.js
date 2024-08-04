import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';


import { FaInfoCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PersonalityCarousel = ({ personalities, team, bgColor, textColor, cartColor, title, titleColor }) => {
  const [numb, setNumb] = useState(0);
  useEffect(() => {
    if (personalities) {
      setNumb(4);
    }
    if (team) {
      setNumb(3);
    }
  }, [])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });
  var settings = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: windowWidth > 768 ? numb : (windowWidth === 768 ? 3 : 1),
    slidesToScroll: windowWidth > 768 ? 1 : (windowWidth === 768 ? 1 : 1),
  };
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 1, position: "absolute", left: '10px', top: "50%", transform: "translateY(-50%)" }}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 1, position: "absolute", right: '10px', top: "50%", transform: "translateY(-50%)" }}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  }

  return (
    <div className="container-fluid pb-5 pt-5" style={{ position: 'relative', backgroundColor: bgColor, borderRadius: team ? '40px' : '0', marginBottom: '-35px' }}>
      <div className=" font-family mb-5 text-center pt-5 pb-5 title-font" style={{ color: titleColor, fontWeight: 500 }}>
        {title}
      </div>
      <div className="container pb-5">
        <div className="row pt-2 justify-content-center">
          <div className="col-12">
            <Slider {...settings}>
              {personalities && personalities.map((personality, index) => (
                <div className='row m-0 p-0justify-content-center' key={index}>
                  <div className="" style={{ backgroundColor: cartColor, borderRadius: '20px' }}>
                    <div className="py-3">
                      <img src={personality.img} style={{ borderRadius: '20px' }} className='img-fluid' alt="" />
                      <div className="row mt-2">
                        <div className="col-6">
                          <p className="p-0 m-0 " style={{ color: textColor }}>{personality.name}</p>
                          <p className="p-0 m-0 " style={{ color: textColor }}>{personality.description}</p>
                        </div>
                        <div className="text-end col-6 pt-3" style={{ color: textColor }}>
                          <FaInfoCircle />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {team && team.map((personality, index) => (
                <div className='row m-0 p-0justify-content-center' key={index}>
                  <div className="p-0" style={{ backgroundColor: cartColor, borderRadius: '20px' }}>
                    <div className="">
                      <img src={personality.img} style={{ borderRadius: '20px' }} className='img-fluid' alt="" />
                    </div>
                  </div>
                  <div className="text-center mt-3" style={{ color: textColor }}>
                    {personality.name}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PersonalityCarousel;
