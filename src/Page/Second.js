import Header from './Header'
import Back from "../img/back 1.png"
import { NavLink } from 'react-router-dom'
import Location from "../img/location.png"
// import { useEffect } from 'react'
import Progress from './Progress'



const Second = () => {

    const handleDivClick = (divData) => {
        const div = document.createElement("dName");
        div.innerHTML = divData;
        const text = div.textContent || div.innerText;
        sessionStorage.setItem("doctorName", text);
    };

    const handleDivClick2 = (divData) => {
        const div = document.createElement("dName2");
        div.innerHTML = divData;
        const text = div.textContent || div.innerText;
        sessionStorage.setItem("doctorName", text);
    };

    const handleDivClick3 = (divData) => {
        const div = document.createElement("address");
        div.innerHTML = divData;
        const text = div.textContent || div.innerText;
        sessionStorage.setItem("address", text);
    };

    const handleaddress = (divData) => {
        const div = document.createElement("address2");
        div.innerHTML = divData;
        const text = div.textContent || div.innerText;
        sessionStorage.setItem("address", text);
    };

    const handleCity = (divData) => {
        const div = document.createElement("city");
        div.innerHTML = divData;
        const text = div.textContent || div.innerText;
        sessionStorage.setItem("city", text);
    };

    const handlecity2 = (divData) => {
        const div = document.createElement("city2");
        div.innerHTML = divData;
        const text = div.textContent || div.innerText;
        sessionStorage.setItem("city", text);
    };
    
    const handleZip = (divData) => {
        const div = document.createElement("zipcode");
        div.innerHTML = divData;
        const text = div.textContent || div.innerText;
        sessionStorage.setItem("zipcode", text);
    };

    const handleZip2 = (divData) => {
        const div = document.createElement("zipcode2");
        div.innerHTML = divData;
        const text = div.textContent || div.innerText;
        sessionStorage.setItem("zipcode", text);
    };
    const activeSteps = 1;



    return (
        <div>
            <div className="container-fluid">
                <div className="positon-relative">
                    <Header />
                   <Progress activeSteps={activeSteps} />
                    <div className='mb-5'>
                        <h4 className='text-center pt-4'>
                            Choose a location
                            <div className="d-flex justify-content-center">
                                <div className="primary-line mt-1"></div>
                            </div>
                        </h4>
                    </div>
                    <div className="container">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-md-12 col-lg-10 col-xl-7 col-sm-12">
                                    <NavLink to="/third" className="text-dark text-decoration-none">
                                        <div className="primary-bg p-3 rounded" onClick={() => {handleCity(document.getElementById("city").innerHTML); handleDivClick3(document.getElementById("address").innerHTML); handleZip(document.getElementById("zipcode").innerHTML);}}>
                                            <div className="row align-items-center sess" onClick={() => {handleDivClick(document.getElementById("dName").innerHTML);}}>
                                                <div className="col-6 col-md-4 d-flex flex-md-column justify-content-center align-items-center border-last order-1" >
                                                    <img src={Location} className="loc-img" alt="location" />
                                                    <p className="ms-1 m-0 p-0  mt-md-2 fw-loc-head" id='city'>Los Angeles </p>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-8 order-3 order-md-2">
                                                    <p className="f-loc p-0 m-0 mt-4 mt-md-0 p-md-3 " id='address'>
                                                        Robertson Office Smile Health Orthodontics, <span id='dName'>Dr. Nik</span>  Children Dentistry
                                                    </p>

                                                </div>
                                                <div className="col-6 col-md-12  order-2 order-md-3">
                                                    <p className="loc-des m-0 text-center p-0 mt-2 mt-lg-4">
                                                        1462 S Robertson Blvd, Los Angeles, CA <span id='zipcode'>90035</span> , USA
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>

                            <div className="row mt-4 justify-content-md-center">
                                <div className="col-md-12 col-lg-10 col-xl-7 col-sm-12">
                                    <NavLink to="/third" className="text-dark text-decoration-none">
                                        <div className="primary-bg p-3 rounded" onClick={() => {handlecity2(document.getElementById("city2").innerHTML); handleaddress(document.getElementById("address2").innerHTML); handleZip2(document.getElementById("zipcode2").innerHTML);}}>
                                            <div className="row align-items-center sess" onClick={() => {handleDivClick2(document.getElementById("dName2").innerHTML)}}>
                                                <div className="col-6 col-md-4 d-flex flex-md-column justify-content-center align-items-center border-last order-1">
                                                    <img src={Location} className="loc-img" alt="location" />
                                                    <p className="ms-1 m-0 p-0  mt-md-2 mb-lg-2 fw-loc-head" id='city2'>Beverly Hills</p>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-8 order-3 order-md-2">
                                                    <p className="f-loc p-0 m-0 mt-4 mt-md-0 p-md-3 " id='address2'>
                                                        Beverly Hills Office, Smile Health Orthodontics, <span id='dName2'> Dr Deborah Solomon </span>
                                                    </p>
                                                </div>
                                                <div className="col-6 col-md-12  order-2 order-md-3">
                                                    <p className="loc-des m-0 text-center p-0 mt-2 mb-lg-2 mt-lg-4">
                                                        1462 S Robertson Blvd, Los Angeles, CA <span id='zipcode2'>90035</span>, USA
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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
                                        <NavLink to="/" className="text-decoration-none text-dark">
                                            <img src={Back} alt="back-logo" className="img-fluid" />
                                            <span className=" ms-1 me-2 fw-bold">Back</span>
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

export default Second