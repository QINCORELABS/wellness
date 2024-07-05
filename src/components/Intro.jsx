import React from 'react'

import intropic from "../assets/client/intropic.png"
function Intro() {
  return (
    <>
    <div id='intro-section' className="container-fluid intro">
       <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
          <h1 style={{color:"#79B142",fontSize:"60px"}} className='fw-semibold'>We Provide</h1>
          <h1 style={{color:"#007BCD",fontSize:"60px"}} className='fw-semibold'>Health Care</h1>
          <h1 style={{color:"#79B142",fontSize:"60px"}} className='fw-semibold'> Oppurtunity to all</h1>
         <div> <button style={{backgroundColor:"#3DB3D1",color:"#fff"}} className='btn border rounded mt-4 p-3 ps-4 pe-4'>Book Now </button></div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center p-5">

           <div style={{background:"#E4F0EE",width:"500px",height:"500px"}} className='rounded-circle d-flex justify-content-center align-items-center p-3'>
            <div style={{background:"linear-gradient(180deg, rgba(61,179,209,1) 0%, rgba(70,123,18,1) 100%)",height:"90%",width:"90%"}} className='rounded-circle d-flex flex-column align-items-center p-3 pb-0 mt-0 overflow-hidden'>
                   <img height={"95%"} className='mt-4' src={intropic} alt="" />
            </div>
            
             </div>
        </div>
       </div>
    </div>
    </>
  )
}
{/* <img width={"80%"} className='img-fluid' src={introdoc} alt="" /> */}
export default Intro