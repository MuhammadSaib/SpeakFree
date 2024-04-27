import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './carousel.css';
const Sponsors =({array})=>{
    if (!Array.isArray(array)) {
        console.error('Invalid array passed to Sponsors component');
        return null; // or display an error message
      }
      let margin='0px';
      if(array.length<10){
        margin='100px';
      }
      else{
        margin='30px';
      }
    return (
        <div className="container-fluid" style={{width:'100%',overflowX:'hidden',minHeight:'100px'}}>
             <marquee>
            {array.map((element)=>(
                <img style={{ marginLeft: margin, marginRight: margin }} src={element} width="100px"  alt="" />
                ))}
            </marquee>
         </div>
    );
}
export default Sponsors;