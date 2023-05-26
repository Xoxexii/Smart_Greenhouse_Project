
import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../App.css'
import '../component_css/chart.css'



function Soil_chart({D,C}){
const[itim,setItim] = useState([])
const[item,setItem] = useState([])
const[dates,setDates] = useState([])

  

useEffect(()=>{
  setItim([A[C.length-10],A[C.length-9],A[C.length-8],A[C.length-7],A[C.length-6],A[C.length-5],A[C.length-4],A[C.length-3],A[C.length-2],A[C.length-1]])
  setItem([E[D.length-10],E[D.length-9],E[D.length-8],E[D.length-7],E[D.length-6],E[D.length-5],E[D.length-4],E[D.length-3],E[D.length-2],E[D.length-1]])
  
})



const E = D.map((item)=>{
  
    return(
      item
      
    )
  })
const A = C.map((item)=>{
          
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
          Soil: H1,
        },
        {
          name: item[1],
          Soil: H2,
        
        },
        {
          name: item[2],
          
          Soil: H3,
          
        },
        {
          name: item[3],
         
          Soil: H4,
          
        },
        {
          name: item[4],
         
          Soil: H5,
          
        }
        // {
        //   name: item[5],
         
        //   Soil: H6,
          
        // },
        // {
        //   name: item[6],
         
        //   Soil: H7,
          
        // },
        // {
        //   name: item[7],
         
        //   Soil: H8,
          
        // },
        // {
        //   name: item[8],
         
        //   Soil: H9,
          
        // },
        // {
        //   name: item[9],
         
        //   Soil: H10,
          
        // }
      ];







    return (
      <div className='Soil_chart_area'>
        <div className='Soil_graph'>
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
          <Line type="monotone" dataKey="Soil" stroke="#be375f"  />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
      
    );
}
export default Soil_chart;