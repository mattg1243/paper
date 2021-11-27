import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

class TrendingCoin extends Component { 

    state = {
        coinName: "",
        coinPrice: {},
        chartData: [],
    }

    getPrice = async () => {

        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${this.props.coin.item.id}&vs_currencies=usd`)
        const chartResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${this.props.coin.item.id}/market_chart?vs_currency=usd&days=1&interval=hourly`)
        const simplePrice = await response.json();
        const chartResponseJSON = await chartResponse.json();
        const hourlyPrices = [];
        for (let i = 0; i < 24; i++) { hourlyPrices[i] = { name: `hr${i}`, price: `${chartResponseJSON['prices'][i][1]}`}  }
        console.log(hourlyPrices)
        this.setState({ coinPrice: simplePrice[`${this.props.coin.item.id}`], chartData: hourlyPrices})
        console.log("coinprice from state: " + this.state.coinPrice.usd)
    }

    componentDidMount() { 
    
        this.getPrice()
         
    }

    render() {
        
        return (
            <>
            <Card sx={{ maxWidth: 345 }} key={this.props.coin.item.coin_id}>
                <CardActionArea>
                    <CardContent>
                    <CardMedia style={{ height: '2rem'}}>
                        <LineChart margin={{ top: 5, right: 50, left: 20, bottom: 5 }} width={200} height={150} data={this.state.chartData} >
                        <Line type="monotone" dataKey="price" dot={false} stroke="#8884d8" />
                        </LineChart>
                    </CardMedia>
                    <Typography gutterBottom variant="h5" component="div">
                        <span style={{ display: 'inline-block ' }}>
                        <p className="trending-coin-ticker"> <img style={{ height: '1rem', width: '1rem' }} src={this.props.coin.item.large} alt="coin logo"/> {this.props.coin.item.symbol}</p>
                        </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${this.state.coinPrice.usd}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
        )
    }
 }

 /*
<div key={this.props.coin.item.coin_id} className="trending-coin">
                <div className="trending-coin-img flex-col-center">
                    <img src={this.props.coin.item.large} alt="coin logo"/>
                    <p className="trending-coin-ticker">{this.props.coin.item.symbol}</p>
                </div>
                <p className="flex-col-center">$ {this.state.coinPrice.usd}</p>
            </div>
 */
export default TrendingCoin;