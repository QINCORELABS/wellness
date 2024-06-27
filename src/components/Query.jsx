import React from 'react'
import Qry from "../assets/query.png"
function Query() {
  return (
    <>
    <div style={{backgroundColor:"#C1FFF8"}} className="container-fluid p-5">
        <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
               <img width={"50%"} src={Qry} alt="" />
            </div>
            <div className="col-lg-6">
                <div>
                    <h1>Quick Enquery</h1>
                    <input type="text" className='form-control mb-2' placeholder='Your Name' />
                    <input type="email" className='form-control mb-2' placeholder='Email Address' />
                    <input type="text" className='form-control mb-2' placeholder='subject' />
                    <textarea type="text-area" className='form-control mb-2' placeholder='your messege' row="3" />
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Query