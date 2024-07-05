import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

import doc1 from "../assets/Doctors/doc1.png"
import doc2 from "../assets/Doctors/doc2.png"
import doc3 from "../assets/Doctors/doc3.png"

function Docs() {
    
    const docs = [
     {
        name:"Ashbin Philip",
        img:doc1,
        description:"Mental Health Counsellor (MSW in medical and psychiatry )"
     }, 
     {
        name:"Dr .Gadha",
        img:doc2,
        description:"Consultant Psychologist and Clinical Hypnotherapist"
 
     }, 
     {
        name:"Rhea Reez",
        img:doc3,
       description:"Consultant Psychologist ( MA in Clinical Psychology )"

 
     }  
    ]



  return (
    <>
     <div id='team' className='d-flex flex-column justify-content-center align-items-center mb-3 p-5'>
     <h2 className='mb-3 text-center fw-bold'>Our Team Members </h2>
         <Swiper
           effect={'coverflow'}
           grabCursor={true}
           centeredSlides={true}
           slidesPerView={'auto'}
           coverflowEffect={{
             rotate: 0,
             stretch: 0,
             depth: 100,
             modifier: 5,
             slideShadows: false,
           }}
           pagination={false}
           autoplay={{
            delay: 3000,  
            disableOnInteraction: false,  
          }}
           modules={[EffectCoverflow, Pagination,Autoplay]}
           className="mySwiper"
         >{docs.map(doc=>(
            <SwiperSlide key={doc.name}>
            <div className='d-flex flex-column align-items-center'>
               <img className='mb-2'  style={{width:"275px"}} height={"370px"}  src={doc.img} />
              <div className='text-center p-4 pt-0 pb-0'>
                  <span className='fw-bold'>{doc.name}</span>
                  <p style={{color:"#000",fontSize:"15px"}} className=''>{doc.description}</p>
              </div>
            </div>
          </SwiperSlide>
         ))}
       
         </Swiper>
     </div>
    </>
  )
}

export default Docs