import React, {useEffect, useState} from 'react';
import {db} from "../firebase_config"
import {collection, getDocs} from "firebase/firestore"
import "../App.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
  {
    Time: '11:00',
    Temparture: 13,
    Humidity: 45,
    TDS: 1100
   
  },
  {
    Time: '12:00',
    Temparture: 15,
    Humidity: 35,
    TDS: 1123
  },
  {
    Time: '13:00',
    Temparture: 5,

Humidity: 65,
TDS:1050   },
  {
    Time: '14:00',
    Temparture: 10,
    Humidity: 46,
    TDS: 1000
  },
  {
    Time: '15:00',
    Temparture: 9,
    Humidity: 75,
    TDS: 900  
  },
  {
    Time: '16:00',
    Temparture: 10,
    Humidity: 35,
    TDS: 800
  },
  {
    Time: '17:00',
    Temparture: 10,
    Humidity: 25,
    TDS: 850
  },
  {
    Time: '18:00',
    Temparture: 20,
    Humidity: 37,
    TDS: 950
  },
  {
    Time: '19:00',
    Temparture: 15,
    Humidity: 69,
    TDS: 1100
  },
  {
    Time: '20:00',
    Temparture: 16,
    Humidity: 40,
    TDS: 1200
  },
  {
    Time: '21:00',
    Temparture: 17,
    Humidity: 50,
    TDS: 1125
  },
  {
    Time: '22:00',
    Temparture: 19,
    Humidity: 30,
    TDS: 1070
  },
];

function Chart() {
  const [users, setUsers] = useState([]);
  const dataCollectionRef = collection(db,"Sensor_Data")

  useEffect(()=>{
    const getData = async () => {
      const data =await getDocs(dataCollectionRef)
    
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id}))); 
    }
    getData()  
  },[])

  return (
    <>
    
      <h1 classTime="chart-heading">Temparature Sensor Values</h1>

    
   
      <ResponsiveContainer width="100%" aspect={4} className="Graph_Temp">
        <LineChart 
        data={pdata}
         width={300} 
         height={300} 
         margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" interval={'preserveStartEnd'} tickFormatter={(value) => value } />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '##64b579' }} />
          <Legend />
          <Line type="monotone" dataKey="Temparture" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h1 classTime="chart-heading">Humidity Sensor Values</h1>
      <ResponsiveContainer width="100%" aspect={4} className="Graph_Temp">
        <LineChart 
        data={pdata}
         width={300} 
         height={300} 
         margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" interval={'preserveStartEnd'} tickFormatter={(value) => value } />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '##64b579' }} />
          <Legend />
          <Line type="monotone" dataKey='Humidity' stroke="blue" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h1 classTime="chart-heading">TDS Chart (Nurititon Level Monitor)</h1>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" interval={'preserveStartEnd'} tickFormatter={(value) => value } />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="TDS" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}export default Chart;