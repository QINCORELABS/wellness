import React from 'react'
// import serv1 from "../assets/services/serv1.png"
// import serv2 from "../assets/services/serv2.png"
// import serv3 from "../assets/services/serv3.png"
// import serv4 from "../assets/services/serv4.png"
// import serv5 from "../assets/services/serv5.png"
// import serv6 from "../assets/services/serv6.png"
// import serv7 from "../assets/services/serv7.png"
// import serv8 from "../assets/services/serv8.png"
// import serv9 from "../assets/services/serv9.png"

import service1 from "../assets/services/new/service1.png"
import service2 from "../assets/services/new/service2.png"
import service3 from "../assets/services/new/service3.png"
import service4 from "../assets/services/new/service4.png"
import service5 from "../assets/services/new/service5.png"
import service6 from "../assets/services/new/service6.png"
function Services() {
  return (
    <>
    <div className="container-fluid p-5">
        
            <div className="row ">
                <div className="col-lg-5  d-flex flex-column ">
                   <div className='mb-5' >
                       <h3 className='fw-bolder'>Our Service</h3>
                        
                        <span style={{fontSize:"20px"}} className='fw-bolder'>Wellness Whisperer offers a wide range of mental health services to meet your needs:</span>
                   </div>
                <div className='mb-2 '>
                    <h6 className='fw-bold'>1.Individual Therapy</h6>
                    <p >Personalized sessions to address various mental health concerns using Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT) and Clinical Hypnotherapy for effective mental health management.</p>
                </div>
                <div className='mb-2'> 
                    <h6 className='fw-bold'>2.Psychiatry</h6>
                    <p> Comprehensive psychiatric evaluations and medication management.
		<ul>
		   <li> Couple and Family Therapy</li>
    		<li>Group Therapy</li>
    		<li>Child and Adolescent Therapy</li>
		</ul></p>
                </div>
                <div className='mb-2'>
                    <h6 className='fw-bold'>3.Internship Programs</h6>
                    <p>Hands-on experience and professional development
                    for psychology and social work students.</p>
                    <ul>
                        <li>Workshops and Seminars</li>
                    </ul>
                </div>
                <div> <button style={{backgroundColor:"#3DB3D1",color:"#fff"}} className='btn border rounded mt-4 p-3 ps-4 pe-4'>Book Now </button></div>
                </div>

                {/* previous version */}
                {/* <div className="col-lg 4 me-2">
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
                </div> */}
                {/* <div className="col-lg-3">
                    <div className="row mb-3 ">
                        <div className='col-12 p-0 ms-'><img className='img-fluid' src={serv5} alt="" /></div>
                    </div>
                    <div className="row">
                    
                        <div className="col-4 p-0 ms- service-box">
                      
                       <img className='img-fluid' src={serv9} alt="" />
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-end p-0 ms-2">
    
                        <img  className='img-fluid' src={serv7} alt="" />
                       
                        </div>
                        <div className="col-4 p-1">
    
                      
                        
                        </div>
                       
                    
                    </div>
                    
                </div> */}

                {/* new update */}
    <div className="col-lg-7">
        {/* <div style={{height:"50%",width:"100%"}} className="row">
              <div className="col-2 d-flex flex-column justify-content-end align-items-end">
                <img src={service1} className='' alt="" />
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-end align-items-end">
                <img width={"60%"} src={service2} alt="" />

              </div>
              <div className="col-lg-6">
                <img className='img-fluid' height={"100%"} src={service3} alt="" />
              </div>
        </div> */}
        <div style={{height:"50%",width:"100%"}} className="row d-flex justify-content-start align-items-end">
           <div className='p-0 d-flex justify-content-center align-items-center' style={{width:"20%"}}> <img className='img-fluid '  src={service1} alt="" /></div>
           <div className='p-0' style={{width:"30%"}}> <img className='img-fluid' src={service2} alt="" /></div>
           <div className='p-0' style={{width:"50%"}}> <img className='img-fluid' src={service3} alt="" /></div>
        </div>

        <div style={{height:"50%",width:"100%"}} className="row d-flex justify-content-end  mt-5">
            <div style={{width:"20%"}} className='p-0 me-3'>
                <img src={service4} className='img-fluid' alt="" />
            </div>
            <div style={{width:"30%"}} className='p-0'>
                <img src={service5} className='img-fluid' alt="" />
            </div>
            <div style={{width:"19%"}} className='p-0 d-flex justify-content-end align-items-start'>
                <img src={service6} className='img-fluid' alt="" />
            </div>
        </div>
    </div>
               
            </div>
       
    </div>
    </>
  )
}

export default Services