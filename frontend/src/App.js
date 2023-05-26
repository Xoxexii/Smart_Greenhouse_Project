import React,{useEffect,useState} from 'react'
import Temp_data from './componnent/Temp_data';
import Humid_data from './componnent/Humid_data';
import './App.css';
import Soil_data from './componnent/Soil_data';
import Temp_chart from './componnent/Temp_chart';
import Humid_chart from './componnent/Humid_chart';
import Soil_chart from './componnent/Soil_chart';
import Fan_switch from './componnent/Fan_switch';
import Pump_switch from './componnent/Pump_switch'
import Tab from './componnent/Tab'
import moment from 'moment';
import Dates from './componnent/Dates';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [auto, setAuto] = useState([]);
  const [statusfan, setStatusfan] = useState("on");
  const [statuspump, setStatuspump] = useState("on");
  const[trigger,setTrigger] = useState("Switch_fan_trigger")
  const[switchfan,setSwitchfan] = useState("Switch_fan_on")
  const [statusON, setStatusON] = useState("statusOFF");
  const[pumptrigger,setPumptrigger] = useState("Switch_pump_trigger")
  const[switchpump,setSwitchpump] = useState("Switch_pump_on")
  const [statuspumpON, setStatuspumpON] = useState("statuspumpOFF");
  const [headerON, setHeaderON] = useState("Switch_fan_header_on");
  
  const A = items.map((item)=>{
  
    return(
      item.Temp
      
    )
  })

  const B = items.map((item)=>{
  
    return(item.Humid)
    
      
    
})
  const C = items.map((item)=>{
  
    return(
      item.Soil
      
    )
  })
  const D = items.map((item)=>{
    
    
    return(
      moment.utc(item.Timestamp).zone('+1400').format("kk:mm:ss")
      
    )
  })
  
  const E = auto.map((item)=>{
  
    return(
      item.statusfan
      
    )
  })

  const F = auto.map((item)=>{
  
    return(
      item.statuspump
      
    )
  })

  
  
  const pressFan = ()=>{
    if(statusfan === "on"){
      setStatusfan("off")
      setTrigger("Switch_fan_untrigger")
      setSwitchfan("Switch_fan_off")
      setStatusON("statusON")
      setHeaderON("Switch_fan_header_off")
      fetch('http://192.168.1.172:5000/fans',{
      method: 'POST',
      body: JSON.stringify({
        a: "On"
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
    return response.json()
    }).catch(error => console.log(error));
    
  }else if(statusfan === "off"){
    setStatusfan("on")
    setTrigger("Switch_fan_trigger")
    setSwitchfan("Switch_fan_on")
    setStatusON("statusOFF")
    setHeaderON("Switch_fan_header_on")
    fetch('http://192.168.1.172:5000/fans',{
      method: 'POST',
      body: JSON.stringify({
        a: "Off"
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
    return response.json()
    }).catch(error => console.log(error));
  }
  }

  const pressPump = ()=>{
    if(statuspump === "on"){
      setStatuspump("off")
      setPumptrigger("Switch_pump_untrigger")
      setSwitchpump("Switch_pump_off")
      setStatuspumpON("statuspumpON")
      document.querySelector("#john").style.opacity = 0
      document.querySelector("#quote").style.opacity = 0
      fetch('http://192.168.1.172:5000/pump',{
      method: 'POST',
      body: JSON.stringify({
        a: "on"
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
    return response.json()
    }).catch(error => console.log(error));
    
  }else if(statuspump === "off"){
      setStatuspump("on")
      setPumptrigger("Switch_pump_trigger")
      setSwitchpump("Switch_pump_on")
      setStatuspumpON("statuspumpOFF")
      document.querySelector("#john").style.opacity = 0
      document.querySelector("#quote").style.opacity = 0
      fetch('http://192.168.1.172:5000/pump',{
      method: 'POST',
      body: JSON.stringify({
        a: "off"
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
    return response.json()
    }).catch(error => console.log(error));
  }
  }


 



useEffect(()=>{
  fetch("http://192.168.1.172:3333/john")
  .then(res => res.json())
  .then(
    (result) => {
      setIsLoaded(true);
      setItems(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
  )
  fetch("http://192.168.1.172:5000/fan")
  .then(res => res.json())
  .then(
    (result) => {
      setIsLoaded(true);
      setAuto(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
  )
  // if(E[0] == "fan_off"){
  //   setStatusfan("on")
  //   setTrigger("Switch_fan_trigger")
  //   setSwitchfan("Switch_fan_on")
  //   setStatusON("statusOFF")
  //   setHeaderON("Switch_fan_header_on")
  // }
  // if(F[0] == "pump_off"){
  //   setStatuspump("on")
  //   setPumptrigger("Switch_pump_trigger")
  //   setSwitchpump("Switch_pump_on")
  //   setStatuspumpON("statuspumpOFF")
  // }
})
return (
  <div className="App">
    
    <div className='Farm_name'>
      Smart farm
    </div>
    
    <div className="Temp_Data_area">
      <Temp_data  A={A} E={E} />
    </div>
    <div className="Humid_Data_area">
      <Humid_data B={B}/>
    </div>
    <div className="Soil_Data_area">
        <Soil_data C={C}/>
    </div>
    <Humid_chart D={D} B={B}/>
    <Temp_chart D={D} A={A} />
    <Soil_chart D={D} C={C} />
    <Fan_switch pressFan={pressFan} trigger={trigger} switchfan={switchfan} statusfan={statusfan} statusON={statusON} headerON={headerON} />
    <Pump_switch pressPump={pressPump} pumptrigger={pumptrigger} switchpump={switchpump} statuspump={statuspump} statuspumpON={statuspumpON}/>
    <Tab />
    <div className='pillar_head'></div>
    <div className='pillar_joint'></div>
  </div>
 ); 
}


 


export default App;
