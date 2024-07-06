import React, { useState } from 'react'
import Qry from "../assets/qury.png"
import axios from 'axios'

function Query() {

const [formData,setFromData]= useState({name:"",email:"",subject:"",msg:""})

const service= import.meta.env.VITE_SERVICE_ID
const template= import.meta.env.VITE_TEMPLATE_ID
const public_id = import.meta.env.VITE_PUBLIC_KEY

const data = {
  service_id: service,
  template_id: template,
  user_id: public_id,
  template_params: {
    from_subject:formData.subject,
    to_name:"Dr",
    from_name:formData.name,
    from_email:formData.email,
    message:formData.msg
  }
};

const handleSubmit=async()=>{
  const {name,email,subject,msg}=formData
  if(name&&email&&subject&&msg){
    try{
      const result= await axios.post("https://api.emailjs.com/api/v1.0/email/send",data)
      console.log(result);
      if(result.status==200){
        alert("email sent successfully")
        
        setFromData({name:"",email:"",subject:"",msg:""})
      }
    }catch(err){
      console.log(err);
    }
  }else(
    alert("Please Fill the form Completely...")
  )
 
}

  return (
    <>
    <div id='book' style={{backgroundColor:"#C1FFF8"}} className="container-fluid p-5">
       <div className='container'>
          <div className="row">
  
              <div className="col-lg-6 d-flex align-items-center justify-content-center mb-4">
                <div style={{width:"300px",height:"400px",backgroundColor:"#007BCD",position:"relative"}} className="rounded-4">
                  <img style={{position:"absolute",top:"10%",left:"10%"}} className='qry-img' width={"310px"} src={Qry} alt="" />
                </div>
              </div>
  
              <div className="col-lg-6 d-flex align-items-center justify-content-center p-5">
                  <div>
                      <h1 className='mb-2'>Quick Enquery</h1>
                      <input value={formData.name} onChange={(e)=>setFromData({...formData,name:e.target.value})} type="text" className='p-2 w-100 border-black border-2 border-top-0 border-end-0 border-start-0 mb-2 bg-transparent' placeholder='Your Name' />
                      <input value={formData.email} onChange={(e)=>setFromData({...formData,email:e.target.value})} type="email" className='p-2 w-100 border-black border-2 border-top-0 border-end-0 border-start-0 mb-2 bg-transparent' placeholder='Email Address' />
                      <input value={formData.subject} onChange={(e)=>setFromData({...formData,subject:e.target.value})} type="text" className='p-2 w-100 border-black border-2 border-top-0 border-end-0 border-start-0 mb-3 bg-transparent' placeholder='subject' />
                      <textarea value={formData.msg} onChange={(e)=>setFromData({...formData,msg:e.target.value})} type="text-area" className='p-2 w-100 border-black border-1  mb-3 bg-transparent' placeholder='your messege' row="5" />
                      <button style={{backgroundColor:"#2D90C0",color:"#fff"}} onClick={handleSubmit} className='btn fw-semibold w-100 '>submit</button>
                      </div>
              </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default Query