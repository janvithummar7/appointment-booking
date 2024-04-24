import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import First from './First';
import Second from "./Second"
import Third from './Third';
import Four from './Four';
import Fifth from './Fifth';
import Six from './Six';
import Thankyou from './Thankyou';



const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<First />} />
                <Route path="/second" element={<Second />} />
                <Route path='/third' element={<Third />} />
                <Route path='/four' element={<Four />} />
                <Route path='/fifth' element={<Fifth />} />
                <Route path='/six' element={<Six />} />
                <Route path='/thankyou' element={<Thankyou />} />
            </Routes>
        </BrowserRouter>
    </div>  
  )
}

export default Layout