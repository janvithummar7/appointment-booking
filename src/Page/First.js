import React from 'react'
import { NavLink } from 'react-router-dom'
import Child from "../img/child.png"
import Adult from "../img/man.png"
import Header from './Header'
import Progress from './Progress'

const First = () => {

    const handleOptionClick = (option) => {
        sessionStorage.setItem('selectedOption', option);
        console.log(option)
      };
      const activeSteps = 0;




    return (
        <div>
            <div className="container-fluid  m-0 p-0">
               <Header />
               <Progress activeSteps={activeSteps}/>
                <div className='mb-5'>
                    <h4 className='text-center pt-4'>
                        You are taking appointment for
                        <div className="d-flex justify-content-center">
                            <div className="primary-line mt-3"></div>
                        </div>
                    </h4>
                </div>

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-2 col-6 col-lg-3 col-md-4">
                            <div className="primary-bg d-flex flex-column align-items-center justify-content-center rounded py-3">
                                <NavLink to="/second" onClick={() => handleOptionClick('Child / Teen')} className="text-decoration-none text-dark">
                                <img src={Child} height="100" className="flt" width="100" alt="" />
                                <h6 className="fw-bold mt-3">
                                    Child / Teen
                                </h6>
                                </NavLink>

                            </div>
                        </div>
                        <div className="col-xl-2 col-6 col-lg-3 col-md-4">
                            <div className="primary-bg d-flex flex-column align-items-center justify-content-center rounded py-3">
                                <NavLink to="/second"  onClick={() => handleOptionClick('Adult')} className="text-decoration-none text-dark">
                                    <img src={Adult} height="100" width="100" alt="" />
                                    <h6 className="fw-bold text-center mt-3">
                                        Adult
                                    </h6>
                                </NavLink>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4  mt-md-5 ps-0">
                    <div className="row align-items-center bd-top justify-content-between ">
                        <div className="col-12 col-md-10 f-text  pt-2 fw-bold text-start ">Copyright © 2022 Shosmile
                            Orthodontics. All rights
                            reserved.
                        </div>
                        <div
                            className="col-md-2 col-12 m-0 pt-2 p-0 d-flex justify-content-center justify-content-md-between gap-3 gap-md-0 mt-2 mt-md-0">
                            <a href="https://www.facebook.com/">
                                <i className="fa-brands fa-facebook fa text-dark"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="fa-brands fa-instagram text-dark fa"></i>
                            </a>
                            <a href="https://twitter.com/">
                                <i className="fa-brands fa-twitter text-dark fa"></i>
                            </a>
                            <a href="https://www.linkedin.com/">
                                <i className="fa-brands fa-linkedin text-dark fa"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First