import React,{useEffect,useState} from 'react'
import '../component_css/data.css'


function Humid_data({B}) {

    const A = B.map((item)=>{
      
        return(
          <div>{item}</div>
          
        )
      })
    
    return (
      <div className='Humid_data_area'>
        <div className='Humid_data_value'>
            {A[B.length-1]}
        </div>
        <div className='Humid_data_header'>
          Humidity
        </div>
        <div className='Humid_data_unit'>
          %
        </div>
    </div>
     ); 
    }


 


export default Humid_data;
