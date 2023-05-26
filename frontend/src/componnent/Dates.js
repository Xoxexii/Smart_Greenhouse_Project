import React,{useEffect,useState} from 'react'
import '../App.css';
import moment from 'moment';

function Dates() {
  const  itim = moment("2023-04-26T03:20:32.000Z").utc().format("hh:mm:ss")

return (
  <div className='dates'>
    {itim}
  </div>
 ); 
}


 


export default Dates;