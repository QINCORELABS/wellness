import React from 'react'
import doc1 from "../assets/intro/doc1.png"
import doc2 from "../assets/intro/doc2.png"
import doc3 from "../assets/intro/doc3.png"
import doc4 from "../assets/intro/doc4.png"
import intropic from "../assets/client/intropic.png"
function Intro() {
  return (
    <>
    <div id='intro-section'  className="container-fluid intro mb-3">
      <div style={{height:"100%"}} className='container mt-3'>
         <div style={{height:"100%"}} className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center p-3 ">
       <div className=''>
              <h1 style={{color:"#79B142",fontSize:"55px"}} className='fw-semibold'>Empowering</h1>
              <h1 style={{color:"#007BCD",fontSize:"55px"}} className='fw-semibold'>Minds,</h1>
              <h1 style={{color:"#79B142",fontSize:"55px"}} className='fw-semibold'>Transforming Lives</h1>
             <div> <a href='#book'><button style={{backgroundColor:"#3DB3D1",color:"#fff"}} className='btn border rounded mt-2 p-3 ps-4 pe-4'>Book Now </button></a></div>
            </div>
       </div>
        
          <div style={{height:"100%"}} className="col-lg-6">
<div style={{width:"100%",height:"100%",position:"relative"}}> 
              {/* doc1 */}
            <div className='docbox1' style={{position:"absolute"}}>
                <div className='img-box1'  style={{position:"relative"}}>
                  <img src={doc1} className='img-fluid' alt="" />

                  <h6 style={{backgroundColor:"#79B142"}} className='docName p-2 text-light  docHead'>Gadha Puthenpurakkal</h6>
                
                </div>
            </div>
              {/* doc2 */}
              <div className='docbox2' style={{position:"absolute"}}>
                <div className='img-box2'  style={{position:"relative"}}>
                  <img src={doc2} className='img-fluid' alt="" />

                  <h6 style={{backgroundColor:"#F4F4F4"}} className='docName2 p-2 ms-1 mt-1 docHead'>Dr Tehmina Asif</h6>
                
                </div>
              </div>
              {/* doc3 */}
             <div className='docbox3' style={{position:"absolute"}}>
                <div className='img-box2'  style={{position:"relative"}}>
                  <img src={doc3} className='img-fluid' alt="" />
                  <h6  style={{backgroundColor:"#00BCD5"}} className='docName3 p-2 text-light p- me-1 mt-1 docHead'>Rhea Reez</h6>
                
                
                </div>
             </div>
              {/* doc4 */}
             <div className='docbox4' style={{position:"absolute"}}>
                <div className='img-box1'  style={{position:"relative"}}>
                  <img src={doc4} className='img-fluid' alt="" />
                  <h6 style={{backgroundColor:"#C1FFF8"}} className='docName4 p-2 me-1 mt-1 docHead'>Ashbin Philip</h6>
                 
                </div>
             </div>
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