import React from 'react'
import about1 from "../assets/about/abt1.png"
import about2 from "../assets/about/abt2.png"
import about3 from "../assets/about/abt3.png"
import about4 from "../assets/about/abt4.png"
function About() {
    return (
        <>
            <div id='about' style={{ backgroundColor: "#C1FFF8" }} className="container-fluid p-5">
               <div className='container'>
                    <div className='row'>
                        <div className="col-lg-6">
                            <div className="row d-flex">
                                <div className="col-6 text-center p-0">
                                    <img width={"86%"} className='img-fluid mb-3' src={about1} alt="" />
                                </div>
                                <div className="col-6 text-center p-0">
                                    <img width={"86%"} className='img-fluid mb-3' src={about2} alt="" />
                                </div>
                            </div>
                            <div className="row d-flex mt-3">
                                <div className="col-6 text-center p-0">
                                    <img width={"86%"} className='img-fluid mb-3' src={about3} alt="" />
                                </div>
                                <div className="col-6 text-center p-0">
                                    <img width={"86%"} className='img-fluid mb-4' src={about4} alt="" />
                                </div>
                            </div>
                           
                        </div>
    
                        <div className="col-lg-6 d-flex justify-content-center align-items-center p-4">
                            <div className='p-2 '>
                                <h3 className='fw-bold mb-4'>About us</h3>
                                <p style={{textAlign:"justify"}} className='text-justify'>At Wellness Whisperer, we are dedicated to fostering mental well-being through a compassionate and personalized approach. Founded by Gadha Puthenpurakkal, a qualified consultant psychologist, our clinic in Kochi combines diverse therapeutic techniques to meet the unique needs of each client.</p>
        
                                <p style={{textAlign:"justify"}} className='text-justify'>Our mission is to create a safe and supportive environment where individuals can embark on their journey towards mental wellness and achieve their full potential.</p>
        
                               
                            </div>
                        </div>
    
                    </div>
               </div>
            </div>
        </>
    )
}

export default About



