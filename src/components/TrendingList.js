import React from 'react';
import TrendingCoin from './TrendingCoin';

const TrendingList = (props) => (

    <div >
        <button onClick={props.getTrending}>Get Trending Coins</button>
        <h1>Trending List Here:</h1>
        <div className="trending-list">{props.trending.map((coin) => (
            <TrendingCoin coin={coin} getCoin={props.getCoin}/>
        ))}</div>
    </div>

)

export default TrendingList;