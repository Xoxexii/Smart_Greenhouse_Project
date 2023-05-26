import React,{useEffect,useState} from 'react'
import '../component_css/tab.css'

function Tab() {
    const add = (i) =>{
      if(i < 10 ){
        i = "0" + i
        return i
      }else{
        return i
      }
    } 
    const date = new Date()
    const second = add(date.getSeconds())
    const minute = add(date.getMinutes())
    const hours = add(date.getHours())


return (
  <div className='Tab_area'>
    <div className='Hours_area'>
      <div className='Hours_value'>
        {hours}
      </div>
    </div>
    <div className='Minutes_area'>
      <div className='Minutes_value'>
        {minute}
      </div>
    </div>
    <div className='Seconds_area'>
      <div className='Seconds_value'>
        {second}
      </div>
    </div>
    <div className='colon_minutes'>
      :
    </div>
    <div className='colon_seconds'>
      :
    </div>
  </div>
 ); 
}


 


export default Tab;