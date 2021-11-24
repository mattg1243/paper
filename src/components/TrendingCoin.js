import React, { Component } from 'react';

class TrendingCoin extends Component { 

    state = {
        coinName: "",
        coinPrice: {},
    }

    getPrice = async () => {

        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${this.props.coin.item.id}&vs_currencies=usd`)
        const price = await response.json();
        this.setState({ coinPrice: price[`${this.props.coin.item.id}`]})
        console.log("coinprice from state: " + this.state.coinPrice.usd)
    }

    componentDidMount() { 
    
        this.getPrice() 

    }

    render() {
        
        return (
            <>
            <div key={this.props.coin.item.coin_id} className="trending-coin">
                <div className="trending-coin-img">
                    <img src={this.props.coin.item.large} alt="coin logo"/>
                    <p className="trending-coin-ticker">{this.props.coin.item.symbol}</p>
                </div>
                <p className="flex-col-center">$ {this.state.coinPrice.usd}</p>
            </div>
        </>
        )
    }
 }
export default TrendingCoin;