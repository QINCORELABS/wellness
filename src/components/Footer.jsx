import React from 'react'
import plus from "../assets/plus.png"
import arrow from "../assets/direction.png"
function Footer() {
  return (
    <>
    <div id='contact' style={{backgroundColor:"#2D90C0"}} className="container-fluid p-0">
       <div className='container'>
          <div className="row">
              <div className="col-lg-4 d-flex p-4 flex-column justify-content-between mt-5">
                <div className='callTo'>
                    <div className="d-flex  gap-3 align-items-center  mb-3">
                        <img src={plus} alt="" />
                        <span style={{color:"#fff"}} className='fw-semibold'>Call to Action:</span>
                    </div>
                    <p style={{textAlign:"justify",color:"#fff"}}>Ready to start your journey towards mental wellness? Book your appointment with Wellness Whisperer today and take the first step towards a healthier, happier you.</p>
                </div>
             
                    <div className='social'>
                  <h6 className='text-light ms-2 social-icons'>Our Social Channel</h6>
                  <div style={{fontSize:"35px"}} className="d-flex gap-4 p-2 social-icons align-items-centerd">
                    <a target='_blank' style={{textDecoration:"none",color:"#fff"}}  href="https://m.facebook.com/profile.php?mibextid=LQQJ4d"><i class="fa-brands fa-facebook"></i></a>
                    <a target='_blank' style={{textDecoration:"none",color:"#fff"}} href="https://www.instagram.com/thewellness.whisperer?igsh=ZzZxbXhoaDVraXc2&utm_source=qr"><i class="fa-brands fa-instagram fa-solid"></i></a>
                    <a target='_blank' style={{textDecoration:"none",color:"#fff"}} href="https://www.linkedin.com/in/gadhap?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i class="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
             
              </div>
             
              <div className="col-lg-4 d-md-flex flex-column align-items-center text-light mt-5 quick">
              <span style={{color:"#fff"}} className='mb-4 mt-4 fw-semibold'>Quick Menu</span>
              <a href="#intro-section" className='mb-1' style={{textDecoration:"none",color:"#fff"}}> Home</a>
              <a href="#about" className='mb-1' style={{textDecoration:"none",color:"#fff"}}> About</a>
              <a href="#team" className='mb-1' style={{textDecoration:"none",color:"#fff"}}> Our Team</a>
              <a href="#book" style={{textDecoration:"none",color:"#fff"}}> Booking</a>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center mt-md-5">
              <span style={{color:"#fff"}} className='mb-4 mt-4 fw-semibold'>Contact Us</span>
             <div className='flex flex-column text-light align-items-center '>
               <div className='d-flex'>
               <i class="fa-solid fa-location-dot me-3 p-1"></i>
                 <div>
                  <p><span className='fw-bolder'>Kaloor:</span> Our main branch offering a full range of services in a central and easily accessible location.</p>
                     <p>Alpha ENT Head & Neck ResearcInstitute,Opp. BSNL Microwave Station, Deshabhimani Road,Kaloor P.O,
                     Kochi - 682017</p>
                   <a href='https://maps.app.goo.gl/2ez4YyxqPPn58RWWA' target='_blank'>  <button className='btn btn-light rounded p-2 fw-semibold mb-3' ><img width={"25px"} className='me-1 img-fluid' src={arrow} alt=""/>Get Direction</button></a>
                     <p><span className='fw-bolder'>Fort Kochi:</span> Our newly opened branch providing the same exceptional care in a serene and historic setting.
                     </p>
                     
                     <p>Alpha LifeKlin Polyclinic, Opp. Chullickal Corp. Library,
                     Moulana Azad Road, Thoppumpady P.O Kochi - 682005</p>

                    <a href='https://maps.app.goo.gl/5YXqH5JxTYGphGSU9' target='_blank'> <button className='btn btn-light rounded p-2 fw-semibold mb-3' ><img width={"25px"} className='me-1 img-fluid' src={arrow} alt=""/>Get Direction</button></a>
                 </div>
               </div>
                  <p className='mb-01'><i class="fa-solid fa-phone me-3"></i>+91 8075635483</p>
                  <a style={{textDecoration:"none",color:"#fff ",fontSize:"16px"}} target='_blank' href='https://wa.me/918075635483'><i class="fa-brands fa-whatsapp fa-solid me-3"></i> Whatsapp Us (Click Here)</a>
               <p className='mt-2'><i class="fa-regular fa-envelope fa-solid me-3"></i>Wellnesswhisp@gmail.com</p>
             </div>
              </div>
          </div>
          

       </div>
    <hr className='mb-1' style={{color:"#fff",fontSize:"5px"}} />
    <div style={{color:"#fff",fontSize:"10px"}} className="container d-flex justify-content-between align-items-center p-2">
      <span>© 2024 wellness whisperer Inc. All rights reserved.</span>
      <a href='https://www.qincore.in/' style={{textDecoration:"none",color:"#fff"}} target='_blank'><span>Designed & Developed by Qincore Labs</span></a>
    </div>
    </div>
 
    </>
  )
}

export default Footer