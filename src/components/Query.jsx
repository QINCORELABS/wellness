import React from 'react'
import Qry from "../assets/query.png"
function Query() {
  return (
    <>
    <div id='book' style={{backgroundColor:"#C1FFF8"}} className="container-fluid p-5">
        <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center mb-4">
               <img width={"45%"} src={Qry} alt="" />
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center p-5">
                <div>
                    <h1 className='mb-2'>Quick Enquery</h1>
                    <input type="text" className='p-1 w-100 border-black border-2 border-top-0 border-end-0 border-start-0 mb-2 bg-transparent' placeholder='Your Name' />
                    <input type="email" className='p-1 w-100 border-black border-2 border-top-0 border-end-0 border-start-0 mb-2 bg-transparent' placeholder='Email Address' />
                    <input type="text" className='p-1 w-100 border-black border-2 border-top-0 border-end-0 border-start-0 mb-2 bg-transparent' placeholder='subject' />
                    <textarea type="text-area" className='p-1 w-100 border-black border-1  mb-2 bg-transparent' placeholder='your messege' row="4" />
                    <button className='btn btn-primary w-100 '>submit</button>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Query