import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts'

const InspectPage = () => {

    let {coinID} = useParams();
    let {timeFrame} = useParams();
    let min, max;
    
    const [chartData, getChartData] = useState([]);
    
    const getPrice = async () => {
        // const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinID}&vs_currencies=usd`)
        const chartResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=1&interval=hourly`)
        // const simplePrice = await response.json();
        const fetchedPrice = []
        const chartResponseJSON = await chartResponse.json();
        for (let i = 0; i < chartResponseJSON['prices'].length; i++) { fetchedPrice[i] = { name: `${i}`, price: chartResponseJSON['prices'][i][1]}  }
        min = Math.min(chartData);
        max = Math.max(chartData);
        console.log(fetchedPrice[1])
        getChartData(fetchedPrice);
    } 

    useEffect(() => {getPrice()}, [])

    return (
        
        <>
        <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0=" y2="1">
                <stop offset="0%" stopColor="#8884d8" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#8884d8" stopOpacity={0.05} />
            </linearGradient>
        </defs>

        <h1>
            {`${coinID.toUpperCase()}`}
        </h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ResponsiveContainer width="80%" height={600}>
                <AreaChart width={500} height={250} data={chartData} margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }} >
                    <Tooltip />
                    <XAxis axisLine={false} tickLine={true} tickFormatter={() => {return ""}} />
                    <YAxis axisLine={false} tickLine={true} type="number" domain={[ min, max ]} dataKey="price"/>
                    <CartesianGrid opacity={.1} vertical={false}/>
                    <Area type="natural" dataKey="price" dot={false} stroke="#8884d8" strokeWidth={1}  />
                </AreaChart>
                </ResponsiveContainer>
                
            </div>
               
        </>
        

    )


}

export default InspectPage;