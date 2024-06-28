import React from 'react'

import cli1 from "../assets/cli1.png"
import cli2 from "../assets/cli2.png"

function Clients() {
  return (
    <>
    <div style={{backgroundColor:"#C1FFF8"}} className="container-fluid p-5">
      <h2 className='fw-bolder text-center mb-5' >Clients Feedback</h2>
       <div className="row d-flex">
          <div className="col-lg-6 mt-5">
            <div style={{width:"80%",backgroundColor:"#fff"}} className="container text-center client-card mb-5 p-5">
                  <div style={{width:"150px",height:"150px"}} className="image-box rounded-circle">
                    <img className='img-fluid ' src={cli1} alt="" />
                  </div>
                  <h3 className='mt-5 fw-bold'>Mr allna</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa animi pariatur optio ad? Quae doloremque adipisci laudantium repellat saepe eos </p>

            </div>
          </div>
          <div className="col-lg-6 mt-5">
          <div style={{width:"80%",backgroundColor:"#fff"}} className="container text-center client-card p-5">
                  <div style={{width:"150px",height:"150px"}} className="image-box rounded-circle">
                    <img className='img-fluid ' src={cli2} alt="" />
                  </div>
                  <h3 className='mt-5 fw-bold'>Mr allna</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa animi pariatur optio ad? Quae doloremque adipisci laudantium repellat saepe eos </p>

            </div>
          </div>
  

       </div>
    </div>
    </>
  )
}

export default Clients