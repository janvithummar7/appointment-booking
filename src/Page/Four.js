import React from 'react'
import { useRef , useEffect } from 'react'
import Header from './Header'
import Back from "../img/back 1.png"
import Braces from "../img/braces.png"
import Video from "../img/video-call 1.png"
import Arrow from "../img/next 1.png"
import { NavLink } from 'react-router-dom'
import Progress from './Progress'

const Four = () => {

    const divRefs = useRef([]);
    useEffect(() => {
        const getSlot = sessionStorage.getItem("selectSlot");
        console.log("selectSlot : ", getSlot);
    }, []);

    const handleOnClick = (e, refIndex) => {
        const slotText = divRefs.current[refIndex].innerText;
        sessionStorage.setItem("selectSlot", slotText);
        console.log(divRefs.current[refIndex].innerText);
    };

    const activeSteps = 3;

    return (
        <div>
            <div className="container-fluid">
                <div className="position-relative">
                    <Header />
                    <Progress activeSteps={activeSteps} />
                    <div>
                        <h4 className='text-center pt-4 mb-5'>
                            Book Your Slot
                            <div className="d-flex justify-content-center">
                                <div className="primary-line mt-1"></div>
                            </div>
                        </h4>
                    </div>
                    <div className="container">
                        <div className="row mb-4 align-items-center justify-content-md-around">
                            <div className="col-lg-8 col-8 col-md-8  position-relative">
                                <NavLink to="/fifth" className="text-dark text-decoration-none">
                                    <div className="primary-bg p-2  p-lg-4 rounded">
                                        <div className="row align-items-center pb-2 pb-md-0 ">
                                            <div className="col-lg-2 col-md-3 col-4">
                                                <img src={Braces} className="img-slot border-last pe-2 pe-lg-3" alt="" />
                                            </div>
                                            <div className="col-lg-10 col-8 m-0 p-0">
                                                <h3 className="fs-four ps-0 ps-lg-4" ref={(ref) => (divRefs.current[0] = ref)} onClick={(e) => handleOnClick(e, 0)}>Clear Aligner Initial Placement</h3>
                                                <h5 className="my-3 fs-bottom ps-0  ps-lg-4 d-none d-md-block">
                                                    Get your attachments placed and your aligners!
                                                </h5>
                                                <div className="arrow-img position-absolute next-pos">
                                                    <img src={Arrow} className="img-fluid " alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-block d-md-none py-2 border-2 border-t">
                                            <p className="pb-0 mb-0 font-bt" ref={(ref) => (divRefs.current[1] = ref)} onClick={(e) => handleOnClick(e, 1)}>Get your attachment placed and your aligners!</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-xl-2 col-md-3 col-4">
                                <div className="primary-bg py-1 py-lg-3 px-1 px-md-3 text-center rounded">
                                    <NavLink to="/fifth" className="text-dark text-decoration-none">
                                        <h4 className="border-b pb-2 book-head">
                                            Book Now
                                        </h4>
                                        <h5 className="book-bottom">
                                            60 Min | Free
                                        </h5>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-md-around">
                            <div className="col-lg-8 col-8 col-md-8  position-relative">
                                <NavLink to="/fifth" className="text-dark text-decoration-none">
                                    <div className="primary-bg p-2  p-lg-4 rounded" ref={(ref) => (divRefs.current[1] = ref)} onClick={(e) => handleOnClick(e, 1)}>
                                        <div className="row align-items-center pb-2 pb-md-0 ">
                                            <div className="col-lg-2 col-md-3 col-4">
                                                <img src={Video} className="img-slot border-last pe-2 pe-lg-3" alt="" />
                                            </div>
                                            <div className="col-lg-10  col-8 m-0 p-0">
                                                <h3 className="fs-four ps-0 ps-lg-4">Progress Virtual Appointment</h3>
                                                <h5 className="my-3 fs-bottom ps-0  ps-lg-4 d-none d-md-block">
                                                    Follow-up virtual appointment for
                                                    your Aligners.
                                                </h5>
                                                <div className="arrow-img position-absolute next-pos">
                                                    <img src={Arrow} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-block d-md-none py-2 border-2 border-t">
                                            <p className="pb-0 mb-0 font-bt">Get your attachment placed and your aligners!</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-xl-2 col-md-3 col-4">
                                <div className="primary-bg py-1 py-lg-3 px-1 px-md-3 text-center rounded">
                                    <NavLink to="/fifth" className="text-dark text-decoration-none">
                                        <h4 className="border-b pb-2 book-head">
                                            Book Now
                                        </h4>
                                        <h5 className="book-bottom">
                                            60 Min | Free
                                        </h5>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section id="footer" className="mt-5">
                        {/* <!-- className For Desktop Back Button -->
    
                <!-- desktop-right for position Right
                desktop-left for position Left
                desktop-bottom for position Bottom
                desktop-top for position Top --> */}
                        <hr className="opacity-100" />
                        <div className="container-fluid  ps-0">
                            <div className="row align-items-center justify-content-between">
                                <div
                                    className="col-2 back-btn px-2 py-1 d-flex align-items-center rounded-2">
                                    <div className="position-absolute desktop-left primary-bg rounded  py-1">
                                        <a href="./third" className="d-flex px-3 text-dark text-decoration-none  align-items-center justify-content-center">
                                            <img src={Back} alt="back-logo" className="img-fluid" />
                                            <span className="ms-2  fw-bold">Back</span>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="col-12 col-md-7 f-text  pt-2 fw-bold text-center  align-items-center d-flex justify-content-center">
                                    <p className="text-center">Copyright © 2022 Shosmile Orthodontics. All rights
                                        reserved.</p>
                                </div>
                                <div
                                    className="col-md-2 col-lg-1 col-12 m-0 p-0 d-flex justify-content-center mb-0 align-items-center justify-content-md-end gap-3 gap-md-3 mt-2 mt-md-0">
                                    <a href="https://www.facebook.com/">
                                        <i className="fa-brands fa-facebook fa  text-dark"></i>
                                    </a>
                                    <a href="https://www.instagram.com/">
                                        <i className="fa-brands fa-instagram text-dark fa "></i>
                                    </a>
                                    <a href="https://twitter.com/">
                                        <i className="fa-brands fa-twitter text-dark fa "></i>
                                    </a>
                                    <a href="https://www.linkedin.com/">
                                        <i className="fa-brands fa-linkedin text-dark fa "></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        </div>
    )
}

export default Four