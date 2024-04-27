import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './carousel.css';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const startAutoMove = () => {
    const id = setInterval(() => {
      nextSlide();
    }, 10000); // Adjust the interval time (in milliseconds) as needed
    setIntervalId(id);
  };

  const stopAutoMove = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    startAutoMove();
    return () => {
      if (intervalId) {
        stopAutoMove();
      }
    };
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} style={{ backgroundColor: slide.bgColor }} className={`min-height pt-3  carousel-item ${index === currentSlide ? 'active' : ''}`}>
            <div className="slide-content container position-relative ">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="row pt-5">
                           <div className="col-lg-8 col-xl-8 col-md-7 col-sm-12 col-12 pt-3">
                               <h2 style={{ color: slide.textColor }}>{slide.title}</h2>
                               <p style={{ color: slide.textColor }} className='font-28'>{slide.description1}</p>
                               <p style={{ color: slide.textColor }} className='font-28'>{slide.description2}</p>
                            </div>
                            <div className="pt-3 col-lg-4 col-xl-4 col-md-4 col-sm-12 justify-content-center col-12">
                                <div className="row justify-content-center">
                                    <div className="col-11">
                                        {slide.flag && <div className="d-flex rotate-neg-5">
                                            <div className="m-0 p-0  position-relative ">
                                               <img src={slide.img1} width="200px" height="180px"  className='z-index-1 border-white border-radius ' alt="" />  
                                                <div className="m-0 p-0 position-absolutee z-index-neg ">
                                                   <img src={slide.img2}  width="150px" height="130px"  className='border-white border-radius'   alt="" />
                                               </div>  
                                            </div>
                                        </div>}
                                        {!slide.flag && <div className="rotate-5 d-flex">
                                            <div className="m-0 p-0  position-relative" >
                                                <img src={slide.img2}  width="150px" height="130px"  className='border-white border-radius'   alt="" />  
                                                <img src={slide.img1} width="200px" height="180px"  className='z-index-1 border-white border-radius position-absolute-2' alt="" />    
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                            <div className="dots">
                            {slides.map((_, index) => (
                                    <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        ))}
      
      </div>
    </div>
  );
};
export default Carousel;
