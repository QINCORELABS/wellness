import React from 'react'
import plus from "../assets/plus.png"
function Footer() {
  return (
    <>
    <div id='contact' style={{backgroundColor:"#2D90C0"}} className="container-fluid p-5">
       <div className='container'>
          <div className="row">
              <div className="col-lg-4">
                  <div className="d-flex gap-3 align-items-center mb-3">
                      <img src={plus} alt="" />
                      <span style={{color:"#fff"}} className='fw-semibold'>Call to Action:</span>
                  </div>
                  <p style={{textAlign:"justify",color:"#fff"}}>Ready to start your journey towards mental wellness? Book your appointment with Wellness Whisperer today and take the first step towards a healthier, happier you.</p>
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
               <div className='d-flex'>
               <i class="fa-solid fa-location-dot me-3 p-1"></i>
                 <div>
                     <p>Alpha ENT Head & Neck ResearcInstitute,Opp. BSNL Microwave Station, Deshabhimani Road,Kaloor P.O,
                     Kochi - 682017</p>
                     <p>Alpha LifeKlin Polyclinic, Opp. Chullickal Corp. Library,Moulana Azad Road, Thoppumpady P.O Kochi - 682005</p>
                     <p>Kaloor: Our main branch offering a full range of services in a central and easily accessible location.</p>
                     <p>Fort Kochi: Our newly opened branch providing the same exceptional care in a serene and historic setting.</p>
                 </div>
               </div>
                  <p><i class="fa-solid fa-phone me-3"></i>8075635483</p>
               <p>   <i class="fa-regular fa-envelope me-3"></i>Wellnesswhisp@gmail.com</p>
             </div>
              </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default Footer