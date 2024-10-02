import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/Home/home.css';
import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';

const Front = ({flag, title}) => {
    return (
        // Pakistan’s FirstOrganizationfor Stammering Awareness & Research
                    
        <Container fluid className="row bgimg mt-4 mt-lg-5 m-0 p-0  ">
            {flag && <div className="col-12 mt-5 pt-5 font-family ">
                <div className="row">
                    <div className="col-12 ps-md-5 mt-md-4 pt-md-4 txtcolor0">
                        Welcome to <span className="text-white txtstyle0">SpeakFree</span>
                    </div>
                    <div className="col-12 ps-md-5 mt-5 mb-5 text-white txtstyle2">
                        Pakistan’s <span className="txtcolor2 txtstyle0">First</span> Organization <br />for Stammering Awareness<br /> & Research
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 mb-5 pb-5">
                        <div className="row ms-md-3 ms-lg-2">
                            <div className="col-4 col-md-3 col-lg-3 ms-lg-3 ">
                                <Button className="btnDonate rounded-5 text-black position-relative">Donate
                                    <span className="circle1"></span>
                                </Button>
                            </div>
                            <div className="col-4 col-md-3 col-lg-2 ms-3 ms-md-3 ms-lg-4 ms-xl-0">
                                <Button className="btnJoinUs rounded-5 text-white position-relative">Join Us
                                    <span className="circle2"></span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {!flag && <div className=" font-family text-center h1 mt-5 pt-5 pb-5 font-size" >
                <div className="container-fluid mt-5 mb-5 pt-5 pb-5">
                    <div className="container pt-5 mt-5 pb-5 mb-5 text-white">
                       {title}
                    </div>
                </div>
            </div>}
        </Container>
    );
};

export default Front;
