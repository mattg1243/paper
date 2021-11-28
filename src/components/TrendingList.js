import React, {Component} from 'react';
import TrendingCoin from './TrendingCoin';
import { LineChart, Line } from "recharts";

class TrendingList extends Component {

    state = {
        trending: [],
    }
    
    getTrending = async () => {

        
        const response = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
        const list = await response.json();
    
        console.log(list['coins'])
        this.setState({ trending: list['coins'] })
    
      }

    componentDidMount () { this.getTrending(); }
    
    render() {
        return (
            <div>
            <div className="trending-list">{this.state.trending.map((coin) => (
                <TrendingCoin coin={coin} />
            ))}</div>
        </div>
        )
    }

}

export default TrendingList;