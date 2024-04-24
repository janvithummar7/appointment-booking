import React, { useState } from 'react'
import Header from './Header'
import Back from "../img/back 1.png"
import { NavLink } from 'react-router-dom'
import Progress from './Progress'
import axios from 'axios'

const Six = () => {


    var time = sessionStorage.getItem("selectTime");
    var date = sessionStorage.getItem("selectedDate");
    var selectAddress = sessionStorage.getItem("address")
    var zipcode = sessionStorage.getItem("zipcode")
    var city = sessionStorage.getItem("city")
    var selectOption = sessionStorage.getItem("selectedOption")
    var doctorName = sessionStorage.getItem("doctorName")


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        data: '',
        number: '',
        notes: '',
    })

    const handleInputChange = (e) => {
        
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });

    };

    const handleSubmit = async(e) => {

            try{
                await axios.post('http://localhost:3001/book',{formData})
            

        sessionStorage.setItem('formData', JSON.stringify(formData));


        setFormData({
            name: '',
            email: '',
            date: '',
            number: '',
            notes: ''
        });
        alert("Sucess")
        }
        catch (error) {
           
            alert('An error occurred.');
            }

    };

    const activeSteps = 5;


    return (



        <div>
            <div className="container-fluid p-0 m-0">
                <Header />
               <Progress activeSteps={activeSteps} />
                <div className="secondary-bg p-4 p-md-5 mt-5">
                    <h4 className="primary-text-clr">
                        You are taking appointment for {selectOption} | Orthodontic Treatment <br /> <br />

                        {selectAddress} {city}  {zipcode} <br /> <br />

                        {doctorName} | 60 Min
                    </h4>


                </div>
                <div>
                    <h4 className='text-center pt-5 mb-4 mb-md-5'>
                        Enter Your Information
                        <div className="d-flex justify-content-center">
                            <div className="primary-line mt-1"></div>
                        </div>
                    </h4>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-7 d-flex justify-content-lg-center">
                            <div
                                className="row ms-0 ms-md-4 my-4 my-md-0 ms-lg-0 align-items-center   justify-content-md-around justify-content-evenly">
                                <div className="d-flex col-6 pe-5 w-50 align-items-center justify-content-evenly">
                                    <h2 className="fs-exlarge">
                                        02
                                    </h2>
                                    <h3 className="primary-text-clr fs-nov ms-3 ">
                                        {date}
                                    </h3>
                                </div>
                                <div className="W-50 col-6">
                                    <h1 className="ms-4 ps-0 ps-md-5 fs-time ms-md-0">
                                        Time <br />
                                        {time}
                                    </h1>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-10 col-xl-7 col-sm-12">
                            <div className="container justify-content-center">
                                <form name="form">
                                    <div className="mb-2 mb-md-4 d-flex flex-column flex-md-row">
                                        <input type="text" name="name"
                                            className="text-field w-100 mobile-width tab-width-form mb-3 mb-lg-0 me-0 me-md-5 p-3"
                                            id="name" value={formData.name} onChange={handleInputChange} placeholder="Client's Full Name*" />
                                        <input type="email" name="email"
                                            className="text-field w-100 p-3 mb-3 mb-lg-0 tab-width-form mobile-width" value={formData.email} onChange={handleInputChange} id="email"
                                            placeholder="Email"  />
                                    </div>
                                    <div className="mb-2 mb-md-4 d-flex flex-column flex-md-row">
                                        <input type="date" name="date"
                                            className="text-field w-100 me-0 me-md-5 p-3 mb-3 mb-lg-0 tab-width-form mobile-width"
                                            id="date" value={formData.date} onChange={handleInputChange} placeholder="Date Of Birth*" />
                                        <input type="tel" name="number"
                                            className="text-field w-100 p-3 mb-3 mb-lg-0 tab-width-form mobile-width" id="number" value={formData.number} onChange={handleInputChange}
                                            placeholder="Mobile Number" />
                                    </div>
                                    <input type="text" name="notes"
                                        className="text-field pb-5 me-0 me-md-5 mobile-width tab-width-form mb-3 mb-lg-0 p-3 w-100"    value={formData.notes}
                                        onChange={handleInputChange}
                                        id="notes" placeholder="Note / Message*" />

                                    <div className="d-flex mt-4 align-items justify-content-center">
                                        <NavLink  to = "/thankyou">
                                        <input className="primary-bg ms-4 fw-bold border-0 px-4 py-3 rounded-3" onClick={handleSubmit} type='submit'/>                                    
                                        </NavLink>
                                    </div>
                                    <p id="errorMessages" className="text-danger text-center fw-bold mt-3"></p>
                                </form>

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
                                    <a href="./fifth" className="d-flex px-3 text-dark text-decoration-none  align-items-center justify-content-center">
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
    )
}

export default Six