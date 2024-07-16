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
                            <div className='p- '>
                                <h3 className='fw-bold mb-4'>About us</h3>
                                <p style={{textAlign:"justify",fontSize:"15px"}} className='text-justify'>At Wellness Whisperer, we are dedicated to fostering mental well-being through a compassionate and personalized approach. Founded by Gadha Puthenpurakkal, the heart and soul behind Wellness Whisperer, a qualified consultant psychologist with a deep commitment to mental health, she has helped countless individuals navigate their challenges and find paths to healing. Her approach is grounded in empathy, evidence-based practices, and a genuine desire to make a positive impact on the lives of her clients.</p>
        
                                <p style={{textAlign:"justify",fontSize:"15px"}} className='text-justify'>Gadha is particularly passionate about addressing and ending generational trauma. She believes that the effects of unresolved trauma can be passed down through families, impacting the mental and emotional well-being of future generations. Recognizing that generational trauma affects both the mind and body, Gadha incorporates holistic methods into her practice.
                                Our clinic in Kochi offers a safe and non-judgmental environment where clients can explore their histories and embark on their healing journeys combined with diverse techniques to meet the unique needs of each client.</p>
        
                               
                            </div>
                        </div>
    
                    </div>
               </div>
            </div>
        </>
    )
}

export default About



