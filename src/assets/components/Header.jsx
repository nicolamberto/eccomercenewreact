import { Filter } from '@mui/icons-material'
import React from 'react'
import Filters from './Filters'
import { Box, Typography } from '@mui/material'

const Header = ({setFilters}) => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around', mb:10, border:'1px solid black'}}>
      <Typography variant='h4'>REACT SHOP</Typography>
      <Filters setFilters={setFilters}/>
    </Box>
  )
}

export default Header
