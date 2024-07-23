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
                    
                    <p >1.Individual Therapy:Personalized sessions to address various mental health concerns using Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT) and Clinical Hypnotherapy for effective mental health management.</p>
                </div>
                <div className='mb-2'> 
                    
                    <p>2.Psychiatry: Comprehensive psychiatric evaluations and medication management.</p>
                  <p>3. Couple and Family Therapy</p>
                  <p>4.Child and Adolescent Therapy</p>
                </div>
                <div className='mb-2'>
                    <h6 className='fw-bold'></h6>
                    <p>5.Internship Programs:Hands-on experience and professional development
                    for psychology and social work students.</p>
                      <p>6.Workshops and Seminars</p>
                </div>
                <div> <a href='#book'><button style={{backgroundColor:"#3DB3D1",color:"#fff"}} className='btn border rounded mt-4 p-3 ps-4 pe-4'>Book Now </button></a></div>
                </div>

               
                {/* new update */}
    {/* <div className="col-lg-7">
        
        <div style={{height:"50%",width:"100%"}} className="row  align-items-end">
           <div className='p-0 d-flex col-2 justify-content-center align-items-center' style={{width:"20%"}}> <img className='img-fluid '  src={service1} alt="" /></div>
           <div className='p-0 col-lg-4' style={{width:"30%"}}> <img className='img-fluid' src={service2} alt="" /></div>
           <div className='p-0 col-lg-6' style={{width:"50%"}}> <img className='img-fluid' src={service3} alt="" /></div>
        </div>

        <div style={{height:"50%",width:"100%"}} className="row d-flex justify-content-end  mt-3">
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
    </div> */}

    <div className="col-lg-7">
       
       <div className="row mt-3 overflow-hidden" style={{height:"50%",width:"100%"}}>
      <div className='col-lg-6 align-items-end d-flex p-0 justify-content-end'>
            
                <img src={service1} width={"30%"} className='img-flui me-2' alt="" />
            
          
                <img src={service2} width={"60%"} className='img-flui' alt="" />
            
      </div>
        <div className="col-lg-6 align-items-end d-flex p-0">
            <img src={service3}  className='img-fluid h-sm-50' alt="" />
        </div>
       </div>
          

       <div className="row mt-4" style={{height:"50%",width:"100%"}} >
        <div className="col-6 d-lg-flex d-none serv-box d-flex justify-content-end align-items-start p-0">
        <img width={"50%"} className='service-img' src={service4} alt="" />
        </div>
       
         <div className='col-lg-6 d-flex justify-content-start align-items-start '>
             <img src={service5} className='me-2' style={{width:"83%"}} alt="" />
             <img src={service6} width={"20%"} alt="" />
         </div>
      </div>   

    </div>
               
            </div>
       
    </div>
    </>
  )
}

export default Services