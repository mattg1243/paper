import React, { Component } from 'react';

class TrendingCoin extends Component { 

    state = {
        coinName: "",
        coinPrice: "",
    }

    getPrice = async (coinID) => {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinID}&vs_currencies=usd`)
        const price = await response.json();
        console.log(price)
        this.setState({ coinPrice: price[`${coinID}`].usd })
        console.log(this.state.coinPrice)
    }

    render() {
        return (
            <>
            {this.getPrice(this.props.coin.id)}
            <div key={this.props.coin.item.coin_id} className="trending-coin">
                <div className="trending-coin-img flex-col-center">
                    <img src={this.props.coin.item.large}/>
                </div>
                <p className="flex-col-center">{this.props.coin.item.symbol}</p>
                <p>{this.state.coinPrice}</p>
            </div>
            
        </>
        )
    }
 }
export default TrendingCoin;