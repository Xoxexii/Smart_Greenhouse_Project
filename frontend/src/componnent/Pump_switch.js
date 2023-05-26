import React,{useEffect,useState} from 'react'
import  '../App.css';
import '../component_css/switch_pump.css'
import john from'../john.png'

function Pump_switch({pressPump,pumptrigger,switchpump,statuspump,statuspumpON}) {



return (
  <div className='Switch_pump_area'>
    <img src={john} alt='john' className='john' id='john'/>
    <div className="Switch_pump_header" id='pump'>
      PUMP
    </div>
    <div className='quote' id='quote'>
      เบียร์กับพี่ ไม่รู้ใครสดจี๋กว่ากัน
    </div>
    <div className='Switch_pump_base'>
      <div className={switchpump} onClick={pressPump}>
        <div className={pumptrigger}>
        </div>
        <div className={statuspumpON}>
        {statuspump}
      </div>
      </div>
    </div>
  </div>
 ); 
}


 


export default Pump_switch;