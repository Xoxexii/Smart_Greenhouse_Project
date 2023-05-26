import React,{useEffect,useState} from 'react'
import '../component_css/data.css'

function Soil_data({C}) {

    const A = C.map((item)=>{
      
        return(
          <div>{item}</div>
          
        )
      })
    
    return (
        <div>
            <div className='Soil_data_value'>
                {A[C.length-1]}
            </div>
            <div className='Soil_data_header'>
                Soil Moisture
            </div>
            <div className='Soil_data_unit'>
                %
            </div>
        </div> 
     ); 
    }


 


export default Soil_data;
