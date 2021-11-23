import React, { Component } from 'react';

const Coin = (props) => (

    <div>
        <header><h1>{props.coin[0]}</h1></header>
        <h4>Price: {props.price}</h4>
        <h4>Volume: {}</h4>
    </div>

)

export default Coin;