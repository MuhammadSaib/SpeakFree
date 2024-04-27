import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaInfoCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PersonalityCarousel = ({ personalities }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });
var settings = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: windowWidth > 768 ? 4 : (windowWidth === 768 ? 3 : 1),
    slidesToScroll:windowWidth > 768 ? 1 : (windowWidth === 768 ? 1 : 1), 
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
    <div className="container-fluid pb-5 pt-5" style={{backgroundColor: '#1E1E1E'}}>
    <div className="mt-5 font-family mb-5 text-center pt-5 pb-5" style={{color:'#D9D6C0',fontWeight:500,fontSize:'46px'}}>
        Famous Personalities that stutter
    </div>
    <div className="container">
        <div className="row pt-5 justify-content-center">
        <div className="col-12">
            <Slider {...settings}>
                {personalities.map((personality,index)=>(
                <div className='row m-0 p-0justify-content-center'>
                 <div className="" style={{ backgroundColor: '#353535', borderRadius: '20px' }}>
                    <div className="py-3">
                    <img src={personality.img} style={{ borderRadius: '20px' }} className='img-fluid' alt="" />
                    <div className="row mt-2">
                        <div className="col-6">
                        <p className="p-0 m-0 text-white">{personality.name}</p>
                        <p className="p-0 m-0 text-white">{personality.description}</p>
                        </div>
                        <div className="text-end text-white col-6 pt-3">
                          <FaInfoCircle />
                        </div>
                    </div>
                    </div>
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
