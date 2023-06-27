import React from 'react';
import promo from '../images/promonavbar.jpg';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Box, Typography } from '@mui/material';

const Promotions = () => {
  return (
    <>
      <Box sx={{
        backgroundColor:'#d4a48d', 
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center', 
        }}>
        <Box sx={{
          background:`url(${promo})`, 
           width:'70%', 
          height:'50px',
          backgroundPosition:'center', 
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'
          }}></Box>
      </Box >
      
    </>
        
  )
}

export default Promotions
