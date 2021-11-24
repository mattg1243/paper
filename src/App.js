import React, { Component } from 'react';
import './App.css';

import TrendingList from './components/TrendingList';

class App extends Component {
  
  state  = {
    coin: "",
    trending: [],
  }

  getCoin = async (event, coinID) => {
    event.preventDefault();
    
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/simple/price?ids=${coinID}&vs_currencies=usd`);
    const price = await response.json();

    this.setState({ coin: price })

  }
  
  render() {
      return (
        
        <div className="App">
          <div className="App-header">
            <h1  className="App-title">
              Paper
            </h1>
          </div>
          <TrendingList />
        </div>

      
    );
  }
  
}

export default App;
