import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';

class App extends Component {
  
  getCoin = async (event) => {
    event.preventDefault();
    
    const coin = event.target.elements.searchName.value;
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
    const data = await response.json();

    console.log(data);

  }
  
  render() {
      return (
        
        <div className="App">
          <div className="App-header">
            <h1 className="App-title">Paper</h1>
          </div>
          <Search getCoin={this.getCoin}/>
        </div>

      
    );
  }
  
}

export default App;
