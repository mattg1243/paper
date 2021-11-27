import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const InspectPage = () => {

    const {coinID} = useParams();
    const {timeFrame} = useParams();
    const chartData = [];
    
    const getPrice = async () => {

        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinID}&vs_currencies=usd`)
        const chartResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=1&interval=hourly`)
        const simplePrice = await response.json();
        const chartResponseJSON = await chartResponse.json();
        const hourlyPrices = [];
        for (let i = 0; i < 24; i++) { hourlyPrices[i] = { name: `hr${i}`, price: `${chartResponseJSON['prices'][i][1]}`}  }
        console.log(hourlyPrices)
        chartData = hourlyPrices;
    } 

    return (
        <h1>
            {`Heres the ${timeFrame} chart for ${coinID}`}
        </h1>
    )


}

export default InspectPage;