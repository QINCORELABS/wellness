import React from 'react'
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"
import about4 from "../assets/about4.png"
function About() {
    return (
        <>
            <div id='about' style={{ backgroundColor: "#C1FFF8" }} className="container-fluid p-5">
                <div className='row'>
                    <div className="col-lg-6">
                        <div className="row d-flex">
                            <div className="col-md-6 text-center">
                                <img width={"90%"} className='img-fluid mb-3' src={about1} alt="" />
                            </div>
                            <div className="col-md-6 text-center">
                                <img width={"90%"} className='img-fluid mb-3' src={about2} alt="" />
                            </div>
                        </div>
                        <div className="row d-flex mt-3">
                            <div className="col-md-6 text-center">
                                <img width={"90%"} className='img-fluid mb-3' src={about4} alt="" />
                            </div>
                            <div className="col-md-6 text-center">
                                <img width={"90%"} className='img-fluid mb-4' src={about3} alt="" />
                            </div>
                        </div>
                       
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center align-items-center p-4">
                        <div>
                            <h3 className='fw-bold'>About us</h3>
                            <p className='fw-bold text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit </p>
    
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim pariatur hic recusandae commodi necessitatibus earum voluptatum, quis sit, doloribus nesciunt ullam. Aliquid ducimus ullam voluptatem praesentium dolor earum doloribus.</p>
    
                            <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ratione voluptas temporibus corporis eaque voluptatem ullam fuga iure harum enim eum nesciunt facere, placeat minus nemo blanditiis consequatur adipisci exercitationem.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About