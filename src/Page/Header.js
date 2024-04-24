import React from 'react'
import Back from "../img/back 1.png"
import Logo from "../img/logo.png"


const Header = () => {
  return (
    <div>
        <div class="container-fluid m-0 p-0 d-flex flex-md-row flex-column my-4 w-100 pe-3 pe-lg-0">
                    <div class=" back-btn-header d-block d-md-none  px-2 py-1 d-flex align-items-center rounded-2">
                        <a href="fisrt.html"
                            class="rounded-circle  primary-bg d-flex align-items-center justify-content-center">
                            <img src={Back} alt="back-logo" class="img-fluid" />
                            {/* <!-- <span class="ms-2 fw-bold">Back</span> --> */}
                        </a>
                    </div>
                    <div class="container d-flex justify-content-center align-items-center mb-3 mb-md-0  w-50">
                        <img src={Logo} alt="logo-img" class="avatar-sm-child logo-img" />
                    </div>
                    <div class="w-100 d-flex primary-bg p-2 p-lg-0 gx-0  rounded border border-end-0 border-2 border-dark">
                        <div class=" d-flex flex-column align-items-start justify-content-center">
                            <h2 class=" ms-3 ts fw-bold">Welcome to Shosmile Orthodontics</h2>
                            <h5 class=" ms-3 my-2 font-size">
                                Schedule a 30 min one-to-one visit or Free Appointment with Dr.
                                Deborah Solomon.
                            </h5>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Header