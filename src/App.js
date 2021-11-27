import React, { Component } from 'react';
import './App.css';

import TrendingList from './components/TrendingList';
import PersistentDrawerLeft from './components/Dash.js';
import { Paper, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"

class App extends Component {

  state  = {
    trending: [],
  }

  theme = createTheme({
    palette: {
      mode: 'dark',
    }
  })

  getCoin = async (event, coinID) => {
    event.preventDefault();
    
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/simple/price?ids=${coinID}&vs_currencies=usd`);
    const price = await response.json();

    this.setState({ coin: price })

  }
  
  render() {
      return (
          <ThemeProvider theme={this.theme} >
           <Paper>
              <div className="App">
                <PersistentDrawerLeft />
                <TrendingList />
              </div>
            </Paper>
          </ThemeProvider> 
    );
  }
  
}

export default App;
