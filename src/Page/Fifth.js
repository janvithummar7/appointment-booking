import { useState, useRef , useEffect } from 'react'
// import React {useState} from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';
import Group from "../img/Group.png"
import Back from "../img/back 1.png"
import Progress from './Progress';

const Fifth = () => {

  var time = sessionStorage.getItem("selectTime");
  var date = sessionStorage.getItem("selectedDate");
  var selectAddress = sessionStorage.getItem("address")
  var zipcode = sessionStorage.getItem("zipcode")
  var city = sessionStorage.getItem("city")
  var selectOption = sessionStorage.getItem("selectedOption")
  var doctorName = sessionStorage.getItem("doctorName")

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const prevMonth = () => {
      setCurrentMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
      );
    };
    const nextMonth = () => {
      setCurrentMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
      );
    };
    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };
    const handleDateClick = (day) => {
      setSelectedDate(day);
      // Store selected date in session storage
      const selectedDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      sessionStorage.setItem("selectedDate", selectedDate.toDateString());
    };
    const renderDays = () => {
      const daysInMonth = getDaysInMonth(
        currentMonth.getFullYear(),
        currentMonth.getMonth()
      );
      const firstDayOfWeek = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        1
      ).getDay();
      const days = [];
      // Render empty cells for previous month's days
      for (let i = 0; i < firstDayOfWeek; i++) {
        days.push(<div key={`prev-${i}`} className="day empty"></div>);
      }
      // Render cells for current month's days
      for (let i = 1; i <= daysInMonth; i++) {
        const isSelected = selectedDate === i;
        const dayClassName = isSelected ? "day selected" : "day";
        days.push(
          <div
            key={`curr-${i}`}
            className={dayClassName}
            onClick={() => handleDateClick(i)}
          >
            {i}
          </div>
        );
      }
      return days;
    };

    const divRefs = useRef([]);
    useEffect(() => {
        const getTime = sessionStorage.getItem("selectTime");
        console.log("selectTime : ", getTime);
    }, []);

    const handleOnClick = (e, refIndex) => {


        const timeText = divRefs.current[refIndex].innerText;
        sessionStorage.setItem("selectTime", timeText);
        console.log(divRefs.current[refIndex].innerText);
      
    };

    const activeSteps = 4; 


  return (
    <div>
          <div className="container-fluid p-0">
            <div className="position-relative">
                <Header />
               <Progress activeSteps={activeSteps} />
                <div className="secondary-bg p-4 p-md-5 mt-5">
                <h4 className="primary-text-clr">
                You are taking appointment for {selectOption} | Orthodontic Treatment <br /> <br/>

               {selectAddress} {city}  {zipcode} <br /> <br />

                {doctorName} | 60 Min
            </h4>
        
                </div>
                <div className="container d-flex flex-column flex-md-row justify-content-evenly">
          <div className="mt-5  h-100 d-flex flex-column align-items-center">
            <h5 className="mb-3 fw-bolder justify-content-between">
              Choose A Date
            </h5>
            <div className="calendar">
              <div className="header">
                <button id="previous" className="date-btn" onClick={prevMonth}>
                  &#8249;
                </button>
                <div className="current-month">
                  {currentMonth.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <button id="next" className="date-btn" onClick={nextMonth}>
                  &#8250;
                </button>
              </div>
              <div className="weekdays">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>
              <div className="days">{renderDays()}</div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <h5 className="mb-4 fw-bolder">Pick a Time</h5>
            <div className="d-flex py-5  flex-column justify-content-center">
              <div className="d-flex flex-wrap justify-content-between">
                <NavLink to="/six" className="time-bg text-dark text-decoration-none hov py-2 rounded-3 px-5" ref={(ref) => (divRefs.current[0] = ref)}   onClick={(e) => handleOnClick(e, 0)}>09.15</NavLink>
                <NavLink to="/six" className="time-bg text-dark text-decoration-none hov px-5 rounded-3 py-2" ref={(ref) => (divRefs.current[1] = ref)}   onClick={(e) => handleOnClick(e, 1)}>09:30</NavLink>
              </div>
              <div className="d-flex mt-4 flex-wrap justify-content-between">
                <NavLink to="/six" className="time-bg text-dark text-decoration-none hov py-2 rounded-3 px-5" ref={(ref) => (divRefs.current[2] = ref)}   onClick={(e) => handleOnClick(e, 2)}>10:30</NavLink>
                <NavLink to="/six" className="time-bg text-dark text-decoration-none hov px-5 rounded-3 py-2" ref={(ref) => (divRefs.current[3] = ref)}   onClick={(e) => handleOnClick(e, 3)}>11:00</NavLink>
              </div>
              <div className="d-flex mt-4 flex-wrap justify-content-between">
                <NavLink to="/six" className="time-bg text-dark text-decoration-none hov py-2 rounded-3 px-5" ref={(ref) => (divRefs.current[4] = ref)}   onClick={(e) => handleOnClick(e, 4)}>11:30</NavLink>
                <NavLink to="/six" className="time-bg text-dark text-decoration-none hov px-5 rounded-3 py-2" ref={(ref) => (divRefs.current[5] = ref)}   onClick={(e) => handleOnClick(e, 5)}>02:00</NavLink>
              </div>
              <div className="mt-4">
                <img src={Group} className="me-2 img-fluid" alt="group-img" />
                <span>All Times are in Eastern Time - US & Canada</span>
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
                                    <a href="./four" className="d-flex px-3 text-dark text-decoration-none  align-items-center justify-content-center">
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

export default Fifth