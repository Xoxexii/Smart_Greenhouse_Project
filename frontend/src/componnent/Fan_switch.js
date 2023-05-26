import React,{useEffect,useState} from 'react'
import  '../App.css';
import '../component_css/switch_fan.css'

function Fan_switch({pressFan,trigger,switchfan,statusfan,statusON,headerON}) {


return (
  <div className='Switch_fan_area'>
    <div className={headerON} >
      FAN
    </div>
    <div className='Switch_fan_base'>
      <div className={switchfan} onClick={pressFan}>
        <div className={trigger}></div>
        <div className={statusON}>
          {statusfan}
        </div>
      </div>
    </div>
  </div>
 ); 
}


 


export default Fan_switch;
