import React, { useState } from "react";
import { Navbar, Button, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'; // Importing a hamburger menu icon
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Photos/logo.png';
import '../CSS/nav.css';

const CustomNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <Navbar expand="md" className="navbar pt-lg-3 pb-lg-3 rounded-bottom-4" fixed="top">
                <Container className="d-flex align-items-center justify-content-between">
                    <div className="col-5 col-md-3 col-lg-2">
                        <img src={logo} width={40} height={40} alt="Logo" className="rounded-circle" />
                        <span className="ms-2 mt-md-3 logo-color">SpeakFree</span>
                    </div>
                    <Nav className="d-none d-md-flex align-items-center justify-content-center col-md-7 col-lg-8 mt-md-2 mt-lg-0">
                        <ul className="d-flex align-items-center justify-content-center list-unstyled mb-2">
                            <li className="ms-md-2 me-md-2 ms-lg-4 me-lg-4 mt-lg-1"><Link to="/" className="text-white link-unstyled">Home</Link></li>
                            <li className="ms-md-2 me-md-2 ms-lg-4 me-lg-4 mt-lg-1"><Link to="/about-us" className="text-white link-unstyled">About Us</Link></li>
                            <li className="ms-md-2 me-md-2 ms-lg-4 me-lg-4 mt-lg-1"><Link to="/resources" className="text-white link-unstyled">Resources</Link></li>
                            <li className="ms-md-2 me-md-2 ms-lg-4 me-lg-4 mt-lg-1"><Link to="/partners" className="text-white link-unstyled">Partners</Link></li>
                            <li className="ms-md-2 me-md-2 ms-lg-4 me-lg-4 mt-lg-1"><Link to="/join" className="text-white link-unstyled">Join Us</Link></li>
                        </ul>
                    </Nav>
                    <div className="col-4 col-md-2 col-lg-2 d-flex align-items-center justify-content-end">
                        <Button className="btnNav rounded-5 btn-sm">Contact Us</Button>
                    </div>
                    <div className="col-3 d-md-none d-flex align-items-center justify-content-center">
                        <Button onClick={toggleMenu} className="btn-sm btnNav hamburger ">
                            <BiMenu size={24} />
                        </Button>
                    </div>
                </Container>
                {isOpen && (
                    <Container className="d-md-none p-0 pt-2 ">
                        <Nav className="d-flex align-items-center justify-content-center bg-dark text-white w-100">
                            <Link to="/" className="link-unstyled ">Home</Link>
                            <Link to="/about-us" className="link-unstyled ">About Us</Link>
                            <Link to="/resources" className="link-unstyled">Resources</Link>
                            <Link to="/partners" className="link-unstyled">Partners</Link>
                            <Link to="/joinus" className="link-unstyled">Join Us</Link>
                        </Nav>
                    </Container>
                )}
            </Navbar>
        </header>
    );
};

export default CustomNavbar;
