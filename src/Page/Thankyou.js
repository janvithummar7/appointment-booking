import { useEffect , useState } from 'react'
import Check from '../img/check-mark-icon-15.jpg'
import Header from './Header'

const Thankyou = () => {

    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const storedData = sessionStorage.getItem('formData');
    
        if (storedData) {
          const data = JSON.parse(storedData);
          console.log(data); 
        }
      }, []);

      let form_details = JSON.parse(sessionStorage.getItem("formData"));
      var selectOption = sessionStorage.getItem('selectedOption');
      var selectedDate = sessionStorage.getItem('selectedDate');
      var selectTime  = sessionStorage.getItem('selectTime');
      var selectcatagory = sessionStorage.getItem('selectedCatagory')
      var selectSlot = sessionStorage.getItem('selectSlot')
      var address = sessionStorage.getItem('address') 
      var city = sessionStorage.getItem('city') 
      var zipcode = sessionStorage.getItem('zipcode')


      
    // var data = sessionStorage.getItem('formData')

    return (
        <div>
            <div class="container-fluid">
                <Header />
                <div class="container bs">
                    <div class="row flex-column-reverse  flex-md-row">
                        <div class="col-lg-8 col-xl-9 col-md-7 col-12 p-4">
                            <h3 class="border-bottom border-dark border-2 d-inline-block fw-bold "> Personal Details </h3>
                            <div class="row ps-3 align-items-center mt-3">
                                <h5 class="col-4 p-0 m-0 col-md-3 col-lg-2 col-xxl-1 fw-bold text-start">Name : </h5>
                                <h6 class="col-8 ps-4 m-0 col-md-9 col-lg-10 col-xxl-11 text-start ">{form_details.name}</h6>
                            </div>
                            <div class="row ps-3 align-items-center mt-3">
                                <h5 class="col-3 p-0 m-0 col-md-3 col-lg-2 col-xl-1 fw-bold text-start">Email : </h5>
                                <h6 class="col-5 ps-4 m-0 col-md-9 col-lg-10 col-xxl-11 text-start ">{form_details.email}</h6>
                            </div>
                            <div class="row ps-3 align-items-center mt-3">
                                <h5 class="col-4 p-0 m-0 col-md-3 col-lg-2 col-xl-1 fw-bold text-start">DOB : </h5>
                                <h6 class="col-8 ps-4 m-0 col-md-9 col-lg-10 col-xxl-11 text-start ">{form_details.date}</h6>
                            </div>
                            <div class="row ps-3 align-items-center mt-3">
                                <h5 class="col-4 p-0 m-0 col-md-2 col-lg-3 col-xl-1 fw-bold text-start">Mobile: </h5>
                                <h6 class="col-8 ps-4 m-0 col-md-10 col-lg-9 col-xxl-11 text-start ">{form_details.number}</h6>
                            </div>

                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-5 col-12 p-0 m-0 d-md-flex">
                            <div class="primary-bg p-3 text-center ">
                                <div class="my-2">
                                    <img src={Check} height="80" width="80" alt="" />
                                </div>
                                <h2 class="text-center">Congratulations</h2>
                                <h6>Your Appointment  is Successfully Booked</h6>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="container bs bg-white my-4">
                    <div class="p-1 p-md-4">
                        <h3 class="text-decoration-underline fw-bold">Appointment Details</h3>
                        <div class="row ps-3 align-items-center mt-4">
                            <h5 class="col-8 p-0 m-0 col-md-4 col-lg-3 col-xxl-2 fw-bold text-start">Appointment For: </h5>
                            <h6 class="col-2 ps-4 m-0 col-md-6 col-lg-9 col-xxl-10 text-start ">{selectOption}</h6>
                        </div>
                        <div class="row ps-3 align-items-center mt-3">
                            <h5 class="col-8 p-0 m-0 col-md-4 col-lg-3 col-xxl-2 fw-bold text-start">Appointment Date: </h5>
                            <h6 class="col-4 ps-4 m-0 col-md-6 col-lg-9 col-xxl-10 text-start ">{selectedDate}</h6>
                        </div>
                        <div class="row ps-3 align-items-center mt-3">
                            <h5 class="col-8 p-0 m-0 col-md-4 col-lg-3 col-xxl-2 fw-bold text-start">Appointment Time :</h5>
                            <h6 class="col-4 ps-4 m-0 col-md-6 col-lg-9 col-xxl-10 text-start ">{selectTime}</h6>
                        </div>
                        <div class="row ps-3 align-items-center mt-3">
                            <h5 class="col-7 p-0 m-0 col-md-4 col-lg-3 col-xxl-2 fw-bold text-start">Consultancy For :</h5>
                            <h6 class="col-5 ps-4 m-0 col-md-6 col-lg-9 col-xxl-10 text-start ">{selectcatagory}</h6>
                        </div>
                        <div class="row ps-3 align-items-center mt-3">
                            <h5 class="col-7 p-0 m-0 col-md-4 col-lg-3 col-xxl-2 fw-bold text-start">Align Placement:  </h5>
                            <h6 class="col-5 ps-4 m-0 col-md-6 col-lg-9 col-xxl-10 text-start ">{selectSlot}</h6>
                        </div>
                        <div class="row ps-3 align-items-center mt-3">
                            <h5 class="col-5 p-0 m-0 col-md-4 col-lg-3 col-xxl-2 fw-bold text-start">Full Address :</h5>
                            <h6 class="col-7 ps-4 m-0 col-md-6 col-lg-9 col-xxl-10 text-start ">{address}</h6>
                        </div>
                        <div class="row ps-3 align-items-center mt-3">
                            <h5 class="col-4 p-0 m-0 col-md-4 col-lg-3 col-xxl-2 fw-bold text-start">Location:</h5>
                            <h6 class="col-8 ps-4 m-0 col-md-6 col-lg-9 col-xxl-10 text-start ">{city}, USA</h6>
                        </div>
                        <div class="row ps-3 align-items-center mt-3">
                            <h5 class="col-5 p-0 m-0 col-md-4 col-lg-3 col-xxl-2 fw-bold text-start">Zip Code :</h5>
                            <h6 class="col-3 ps-4 m-0 col-md-6 col-lg-9 col-xxl-10 text-start ">{zipcode}</h6>
                        </div>
                        {/* <button onClick={handleClick}>mail</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thankyou