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
          <Item>Market Cap: ${props.stats.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>24h Volume: ${props.stats.total_volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>Fully Diluted Valuation: {props.stats.fully_diluted_valuation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>Circulating Supply: {props.stats.circulating_supply}</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>Total Supply: {props.stats.total_supply}</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>Max Supply: {props.stats.max_supply} </Item>
        </Grid>
    </Grid>
  </Box>

)

export default StatsBox;