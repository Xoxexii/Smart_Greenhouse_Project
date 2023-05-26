
import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import'../App.css'
import '../component_css/chart.css'



function Temp_chart({D,A}){
const[itim,setItim] = useState([])
const[item,setItem] = useState([])
const[dates,setDates] = useState([])

  

useEffect(()=>{
  setItim([B[A.length-10],B[A.length-9],B[A.length-8],B[A.length-7],B[A.length-6],B[A.length-5],B[A.length-4],B[A.length-3],B[A.length-2],B[A.length-1]])
  setItem([E[D.length-10],E[D.length-9],E[D.length-8],E[D.length-7],E[D.length-6],E[D.length-5],E[D.length-4],E[D.length-3],E[D.length-2],E[D.length-1]])
  
})

const E = D.map((item)=>{
  
 
    return(
      item
      
    )
  })
const B = A.map((item)=>{
          
        return(
          item
          
        )
      })

const H1 = Number(itim[0])
const H2 = Number(itim[1])
const H3 = Number(itim[2])
const H4 = Number(itim[3])
const H5 = Number(itim[4])
// const H6 = Number(itim[5])
// const H7 = Number(itim[6])
// const H8 = Number(itim[7])
// const H9 = Number(itim[8])
// const H10 = Number(itim[9])

const data = [
        {
          name: item[0],
          Temp: H1,
        },
        {
          name: item[1],
          Temp: H2,
        
        },
        {
          name: item[2],
          
          Temp: H3,
          
        },
        {
          name: item[3],
         
          Temp: H4,
          
        },
        {
          name: item[4],
         
          Temp: H5,
          
        },
        // {
        //   name: item[5],
         
        //   Temp: H6,
          
        // },
        // {
        //   name: item[6],
         
        //   Temp: H7,
          
        // },
        // {
        //   name: item[7],
         
        //   Temp: H8,
          
        // },
        // {
        //   name: item[8],
         
        //   Temp: H9,
          
        // },
        // {
        //   name: item[9],
         
        //   Temp: H10,
          
        // }
      ];







    return (
      <div className='Temp_chart_area'>
        <div className='Temp_graph'> 
        <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Temp" stroke="#ed8554"  />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
      
    );
}
export default Temp_chart;