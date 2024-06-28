import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

import doc1 from "../assets/doc1.webp"
import doc2 from "../assets/doc2.jpg"
import doc3 from "../assets/doc3.jpg"
import doc4 from "../assets/doc4.jpg"
import doc5 from "../assets/doc5.webp"
import doc6 from "../assets/doc6.jpg"
function Docs() {
    
    const docs = [
     {
        name:"doc1",
        img:doc1
     }, 
     {
        name:"doc2",
        img:doc2
     }, 
     {
        name:"doc3",
        img:doc3
     }, 
     {
        name:"doc4",
        img:doc4
     }, 
     {
        name:"doc5",
        img:doc5
     }, 
     {
        name:"doc6",
        img:doc6
     },   
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
            <div className='text-center'>
               <img className='mb-2' width={"250px"} height={"360"}  he  src={doc.img} />
               <span className='fw-bold'>{doc.name}</span>
            </div>
          </SwiperSlide>
         ))}
       
         </Swiper>
     </div>
    </>
  )
}

export default Docs