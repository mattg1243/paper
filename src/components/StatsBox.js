import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const StatsBox = (props) => (

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <h3>
              Market Cap: 
              ${props.stats.market_cap ? `${props.stats.market_cap}`: " No Info"} 
            </h3>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <h3>
              24h Volume: 
              ${props.stats.total_volume ? props.stats.total_volume : " No Info"}
            </h3>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <h3>
              Fully Diluted Valuation: 
              {props.stats.fully_diluted_valuation ? props.stats.fully_diluted_valuation: " No Info"}
            </h3>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <h3>
              Circulating Supply: 
              {props.stats.circulating_supply ? props.stats.circulating_supply: " No Info"}
            </h3>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <h3>
              Total Supply: 
              {props.stats.total_supply ? props.stats.total_supply: " No Info"}
            </h3>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <h3>
              Max Supply: 
              {props.stats.max_supply ? props.stats.max_supply: " No Info"}
            </h3>
          </Item>
        </Grid>
    </Grid>
  </Box>

)

export default StatsBox;