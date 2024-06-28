import React from 'react'
import serv1 from "../assets/serv1.png"
import serv2 from "../assets/ser2.png"
import serv3 from "../assets/ser3.png"
import serv4 from "../assets/ser4.png"
import serv5 from "../assets/ser5.png"

function Services() {
  return (
    <>
    <div className="container-fluid p-3">
        <div className="row ">
            <div className="col-lg-5 d-flex justify-content-center align-items-center">
               <div >
                    <span style={{fontSize:"20px"}} className='fw-bolder'>Good Services and better</span>
                    <br />
                    <span style={{fontSize:"20px"}} className='fw-bolder'>health by our specialists</span>
                    <p className='text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a provident, quod nobis ipsa cupiditate odio similique</p>
               </div>
            </div>
            <div className="col-lg 4">
                <div className="row mb-3">
                    <div className="col-md-3"></div>
                    <div className="col-md-9 d-flex justify-content-end align-items-end">
                    <img className='img-fluid' src={serv1} alt="" />
                    </div>
                   
                </div>
                <div className="row">
                    <img className='img-fluid' src={serv2} alt="" />
                </div>
            </div>
            <div className="col-lg-3">
                <div className="row mb-3">
                    <img className='img-fluid' src={serv3} alt="" />
                </div>
                <div className="row mb-3">
                    <img className='img-fluid' src={serv4} alt="" />
                </div>
                <div className="row">
                    <img className='img-fluid' src={serv5} alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services