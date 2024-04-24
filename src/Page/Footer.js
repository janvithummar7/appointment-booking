import React from 'react' 
import Back from "../img/back 1.png"

const Footer = () => {
    return (
        <div>
            <hr class="opacity-100" />
            <div class="container-fluid  ps-0">
                <div class="row align-items-center justify-content-between">
                    <div
                        class="col-2 back-btn px-2 py-1 d-flex align-items-center rounded-2">
                        <div class="position-absolute desktop-left primary-bg rounded  py-1">
                            <a href="fisrt.html" class="d-flex px-3 text-dark text-decoration-none  align-items-center justify-content-center">
                                <img src={Back} alt="back-logo" class="img-fluid" />
                                <span class="ms-2  fw-bold">Back</span>
                            </a>
                        </div>
                    </div>
                    <div
                        class="col-12 col-md-7 f-text  pt-2 fw-bold text-center  align-items-center d-flex justify-content-center">
                        <p class="text-center">Copyright © 2022 Shosmile Orthodontics. All rights
                            reserved.</p>
                    </div>
                    <div
                        class="col-md-2 col-lg-1 col-12 m-0 p-0 d-flex justify-content-center mb-0 align-items-center justify-content-md-end gap-3 gap-md-3 mt-2 mt-md-0">
                        <a href="https://www.facebook.com/">
                            <i class="fa-brands fa-facebook fa  text-dark"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                            <i class="fa-brands fa-instagram text-dark fa "></i>
                        </a>
                        <a href="https://twitter.com/">
                            <i class="fa-brands fa-twitter text-dark fa "></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <i class="fa-brands fa-linkedin text-dark fa "></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer