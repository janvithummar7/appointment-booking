import React from 'react'
import { useEffect, useRef } from 'react'
import Braces from "../img/braces.png"
import Dental from "../img/dental-care.png"
import Retainer from "../img/retainer.png"
import Record from "../img/patient 1.png"
import Header from './Header'
import Back from "../img/back 1.png"
import { NavLink } from 'react-router-dom'
import Progress from './Progress'

const Third = () => {


    const divRefs = useRef([]);
    useEffect(() => {
        const getCatagory = sessionStorage.getItem("selectedCatagory");
        console.log("selectedCatagory : ", getCatagory);
    }, []);

    const handleOnClick = (e, refIndex) => {
        const catagoryText = divRefs.current[refIndex].innerText;
        sessionStorage.setItem("selectedCatagory", catagoryText);
        console.log(divRefs.current[refIndex].innerText);
    };


    const activeSteps = 2;



    return (
        <div>
            <div className="container-fluid">
                <div className="position-realtive">
                    <Header />
                    <Progress activeSteps={activeSteps} />
                    <div>
                        <h4 className='text-center pt-4 mb-5'>
                            Chhose a Category
                            <div className="d-flex justify-content-center">
                                <div className="primary-line mt-1"></div>
                            </div>
                        </h4>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <div className="mb-4 rounded-3 p-3  primary-bg">
                                    <NavLink to="/four" className="text-dark text-decoration-none">
                                        <div className="row">
                                            <div className="col-lg-3 col-3">
                                                <div className='border-last'>
                                                    <img src={Braces} className='pe-3 img-fluid' alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-9">
                                                <h3 className="fs-orth" ref={(ref) => (divRefs.current[0] = ref)} onClick={(e) => handleOnClick(e, 0)}>
                                                    Consultations
                                                </h3>
                                                <h4 className='fs-dec pt-2'>
                                                    One to one consulting <br />
                                                    & medical history demonstration
                                                </h4>
                                            </div>
                                        </div>
                                    </NavLink>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4 rounded-3 p-3  primary-bg">
                                    <NavLink to="/four" className="text-dark text-decoration-none">
                                        <div className="row" >
                                            <div className="col-lg-3">
                                                <div className='border-last'>
                                                    <img src={Dental} className='pe-3 img-fluid' alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <h3 className="fs-orth" ref={(ref) => (divRefs.current[1] = ref)} onClick={(e) => handleOnClick(e, 1)}>
                                                    Orthodonic Treatement
                                                </h3>
                                                <h4 className='fs-dec pt-2'>
                                                    Get your treatement from our <br />
                                                    top Skilled  Doctors.
                                                </h4>
                                            </div>
                                        </div>
                                    </NavLink>

                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <div className="mb-4 rounded-3 p-3  primary-bg">
                                    <NavLink to="/four" className="text-dark text-decoration-none">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className='border-last'>
                                                    <img src={Retainer} className='pe-3 img-fluid' alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <h3 className="fs-orth" ref={(ref) => (divRefs.current[2] = ref)} onClick={(e) => handleOnClick(e, 2)}>
                                                    Retainer
                                                </h3>
                                                <h4 className='fs-dec pt-2'>
                                                    Get your teeth an alignment
                                                    <br />
                                                    for life.
                                                </h4>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4 rounded-3 p-3  primary-bg">
                                    <NavLink to="/four" className="text-dark text-decoration-none">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className='border-last'>
                                                    <img src={Record} className='pe-3 img-fluid' alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <h3 className="fs-orth" ref={(ref) => (divRefs.current[3] = ref)} onClick={(e) => handleOnClick(e, 3)}>
                                                    Records
                                                </h3>
                                                <h4 className='fs-dec pt-2'>
                                                    Intra-oral scan, photos, forms
                                                    <br />
                                                    etc.
                                                </h4>
                                            </div>
                                        </div>
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="footer" class="mt-5">
                        {/* <!-- Class For Desktop Back Button -->
    
                <!-- desktop-right for position Right
                desktop-left for position Left
                desktop-bottom for position Bottom
                desktop-top for position Top --> */}
                        <hr className="opacity-100" />
                        <div className="container-fluid  ps-0">
                            <div className="row align-items-center justify-content-between">
                                <div
                                    className="col-2 back-btn px-2 py-1 d-flex align-items-center rounded-2">
                                    <div className="position-absolute btn-nn desktop-left primary-bg rounded  py-1">
                                        <NavLink to="/second" className="d-flex px-3 text-dark text-decoration-none  align-items-center justify-content-center">
                                            <img src={Back} alt="back-logo" className="img-fluid" />
                                            <span className="ms-2  fw-bold">Back</span>
                                        </NavLink>
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

export default Third