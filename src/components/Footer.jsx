import React from 'react'
import plus from "../assets/plus.png"
function Footer() {
  return (
    <>
    <div id='contact' style={{backgroundColor:"#2D90C0"}} className="container-fluid p-5">
        <div className="row">
            <div className="col-lg-4">
                <div className="d-flex gap-3 align-items-center mb-3">
                    <img src={plus} alt="" />
                    <span style={{color:"#fff"}} className='fw-semibold'>Get Appointment</span>
                </div>
                <p style={{textAlign:"justify",color:"#fff"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iusto nostrum illo amet dicta earum ipsa temporibus at? Ipsum explicabo maiores minus dolor perferendis quasi at dicta exercitationem possimus. Harum.</p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center text-light">
            <span style={{color:"#fff"}} className='mb-4 mt-4 fw-semibold'>Quick Menu</span>
            <a href="#intro-section" className='mb-1' style={{textDecoration:"none",color:"#fff"}}> Home</a>
            <a href="#about" className='mb-1' style={{textDecoration:"none",color:"#fff"}}> About</a>
            <a href="#team" className='mb-1' style={{textDecoration:"none",color:"#fff"}}> Our Team</a>
            <a href="#book" style={{textDecoration:"none",color:"#fff"}}> Booking</a>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
            <span style={{color:"#fff"}} className='mb-4 mt-4 fw-semibold'>Contact Us</span>
           <div className='flex flex-column text-light align-items-center '>
                <p><i class="fa-solid fa-location-dot me-2"></i>Najla,RRA 34, Erattakulangara Road,Cochin,Ernakulam,
                682012</p>
                <p><i class="fa-solid fa-phone me-2"></i>+8075635483</p>
             <p>   <i class="fa-regular fa-envelope me-2"></i>dr-gadha@gmail.com</p>
           </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer