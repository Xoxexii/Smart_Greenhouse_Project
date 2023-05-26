import React,{useEffect,useState} from 'react'

import '../component_css/data.css'

function Temp_data({A}) {

    const B = A.map((item)=>{
      
        return(
          <div>{item}</div>
          
        )
      })
      


return (
<div className='Temp_data_area'>
    <div className='Temp_data_value'>
        {B[A.length - 1]}
    </div>
    <div className='Temp_data_header'>
        Temperature
    </div>
    <div className='Temp_data_unit'>
        ํC
    </div>
</div>  
 ); 
}


 


export default Temp_data;
