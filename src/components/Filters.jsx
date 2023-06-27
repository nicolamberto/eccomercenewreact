import { Box, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useFilters } from '../hooks/useFilters'

const Filters = () => {
    const {filters, setFilters} = useFilters()

    const handleChangeMinPrice = (e)=>{
      
        setFilters(prevState=>({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e)=>{
        setFilters(prevState=>({
            ...prevState,
            category: e.target.value
        }))
    }

  return (
    <Box sx={{display:'flex', justifyContent:'space-around', gap:10, minWidth: 500, pb:6}}>
      <FormControl sx={{width:'50%',}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select onChange={handleChangeCategory}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filters.category}
            label="Price"
        >
          <MenuItem value='all'>Todas</MenuItem>
          <MenuItem value='Gorras'>Gorras</MenuItem>
          <MenuItem value='Remeras'>Remeras</MenuItem>
          <MenuItem value='Buzos y Camperas'>Buzos y remeras</MenuItem>
          <MenuItem value='Zapatillas'>Zapatillas</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{width:'40%'}}>
        <Typography>Price</Typography>
        <Slider onChange={handleChangeMinPrice} defaultValue={0} step={50} min={0} max={2000} aria-label='1000' valueLabelDisplay="auto" />
      </Box>
      
    </Box>
  )
}

export default Filters
