import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4 ,
        speed: 500
      };
  return (
    <>
    <div className="container-fluid p-5" >
        <h2 className='mb-3 text-center fw-bold'>Our Team Members </h2>
    <Slider {...settings}>
        {docs.map(doc=>(
          <div key={doc.name}  className="d-flex flex-column align-items-center text-center">
          <img width={"250px"} height={"400px"}  src={doc.img} alt="" />
          <h3 className='mt-3 text-center'>{doc.name}</h3>
        </div>
        ))}
          
          </Slider>
    </div>
    </>
  )
}

export default Docs