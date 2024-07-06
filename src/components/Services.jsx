import React from 'react'
import serv1 from "../assets/services/serv1.png"
import serv2 from "../assets/services/serv2.png"
import serv3 from "../assets/services/serv3.png"
import serv4 from "../assets/services/serv4.png"
import serv5 from "../assets/services/serv5.png"
import serv6 from "../assets/services/serv6.png"
import serv7 from "../assets/services/serv7.png"
import serv8 from "../assets/services/serv8.png"
import serv9 from "../assets/services/serv9.png"
function Services() {
  return (
    <>
    <div className="container-fluid p-5">
        <div className='container'>
            <div className="row ">
                <div className="col-lg-5 d-flex justify-content-center align-items-center">
                   <div >
                        <span style={{fontSize:"20px"}} className='fw-bolder'>Good Services and better</span>
                        <br />
                        <span style={{fontSize:"20px"}} className='fw-bolder'>health by our specialists</span>
                        <p className='text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a provident, quod nobis ipsa cupiditate odio similique</p>
                   </div>
                </div>
                <div className="col-lg 4 me-2">
                    <div className="row mb-3">
                        <div className="col-4 p-0"></div>
                        <div className="col-4 d-flex justify-content-end align-items-end p-1">
    
                        <img  className='img-fluid' src={serv1} alt="" />
                       
                        </div>
                        <div className="col-4 p-1 service-box">
    
                         <img src={serv2} className='img-fluid h-100' alt="" />
                         <img src={serv3} className='img-fluid h-75 serv-img' alt="" />
                        
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className='col-12 p-0'><img className='img-fluid mb-3' src={serv4} alt="" /></div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row mb-3 ">
                        <div className='col-12 p-0 ms-'><img className='img-fluid' src={serv5} alt="" /></div>
                    </div>
                    <div className="row">
                    
                        <div className="col-4 p-0 ms- service-box">
                        {/* <img src={serv6} className='img-fluid h-100' alt="" />
                        <img src={serv8}  className='w-50 h-75 w serv-img' alt="" /> */}
                       <img className='img-fluid' src={serv9} alt="" />
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-end p-0 ms-2">
    
                        <img  className='img-fluid' src={serv7} alt="" />
                       
                        </div>
                        <div className="col-4 p-1">
    
                      
                        
                        </div>
                       
                    
                    </div>
                    {/* <div className="row">
                        <img className='img-fluid' src={serv5} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services