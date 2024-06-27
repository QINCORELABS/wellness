import React from 'react'
import introbg from "../assets/introbg.png"
import introdoc from "../assets/introdoc.png"
function Intro() {
  return (
    <>
    <div  className="container-fluid intro">
       <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
          <h1 style={{color:"#79B142",fontSize:"60px"}} className='fw-bold'>We Provide</h1>
          <h1 style={{color:"#007BCD",fontSize:"60px"}} className='fw-bold'>Health Care</h1>
          <h1 style={{color:"#79B142",fontSize:"60px"}} className='fw-bold'> Oppurtunity to all</h1>
         <div> <button className='btn btn-primary border rounded mt-4'>Book Now </button></div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center p-5">

           <div style={{backgroundColor:"#E4F0EE",width:"400px",height:"400px"}} className='rounded-circle d-flex justify-content-center align-items-center p-3'> <img width={"80%"} className='img-fluid' src={introdoc} alt="" /></div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Intro