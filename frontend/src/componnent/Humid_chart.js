
import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../component_css/chart.css'



function Humid_chart({D,B}){
const[itim,setItim] = useState([])
const[item,setItem] = useState([])
const[dates,setDates] = useState([])


  

useEffect(()=>{
  setItim([A[B.length-10],A[B.length-9],A[B.length-8],A[B.length-7],A[B.length-6],A[B.length-5],A[B.length-4],A[B.length-3],A[B.length-2],A[B.length-1]])
  setItem([E[D.length-10],E[D.length-9],E[D.length-8],E[D.length-7],E[D.length-6],E[D.length-5],E[D.length-4],E[D.length-3],E[D.length-2],E[D.length-1]])
  
})



const E = D.map((item)=>{
        return(
          item
          
        )
      })
const A = B.map((item)=>{
          
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
          Humid: H1,
        },
        {
          name: item[1],
          Humid: H2,
        
        },
        {
          name: item[2],
          
          Humid: H3,
          
        },
        {
          name: item[3],
         
          Humid: H4,
          
        },
        {
          name: item[4],
         
          Humid: H5,
          
        }
        // ,
        // {
        //   name: item[5],
         
        //   Humid: H6,
          
        // },
        // {
        //   name: item[6],
         
        //   Humid: H7,
          
        // },
        // {
        //   name: item[7],
         
        //   Humid: H8,
          
        // },
        // {
        //   name: item[8],
         
        //   Humid: H9,
          
        // },
        // {
        //   name: item[9],
         
        //   Humid: H10,
          
        // }
      ];







    return (
      <div className='Humid_chart_area'>
        <div className='Humid_graph'>
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
          <Line type="monotone" dataKey="Humid" stroke="#F5EB6d" dot={{ stroke: 'red', strokeWidth: 2 }}  />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
      
    );
}
export default Humid_chart;