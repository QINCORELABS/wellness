import React from 'react'
import plus from "../assets/plus.png"
function Footer() {
  return (
    <>
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-lg-4">
                <div className="d-flex gap-3 align-items-center mb-3">
                    <img src={plus} alt="" />
                    <span style={{color:"#79B142"}}>Get Appointment</span>
                </div>
                <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iusto nostrum illo amet dicta earum ipsa temporibus at? Ipsum explicabo maiores minus dolor perferendis quasi at dicta exercitationem possimus. Harum.</p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
            <span style={{color:"#79B142"}} className='mb-5'>Quick Menu</span>
            <a href="" style={{textDecoration:"none",color:"black"}}> Home</a>
            <a href="" style={{textDecoration:"none",color:"black"}}> About</a>
            <a href="" style={{textDecoration:"none",color:"black"}}> Our Team</a>
            <a href="" style={{textDecoration:"none",color:"black"}}> Booking</a>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
            <span style={{color:"#79B142"}} className='mb-5'>Contact Us</span>
           <div className='flex flex-column'>
                <p><i class="fa-solid fa-location-dot"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><i class="fa-solid fa-phone"></i>+91000000000</p>
             <p>   <i class="fa-regular fa-envelope"></i>abc@gmail.com</p>
           </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer