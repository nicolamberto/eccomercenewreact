import { Box, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'

const Filters = ({setFilters}) => {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (e)=>{
        setMinPrice(e.target.value)
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

    console.log(minPrice);

  return (
    <Box sx={{display:'flex', justifyContent:'space-around', gap:10, minWidth: 500, border:'1px solid blue' }}>
      <FormControl sx={{width:'30%',}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select onChange={handleChangeCategory}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=''
            label="Price"
        >
          <MenuItem value='all'>Todas</MenuItem>
          <MenuItem value='laptops'>Portatiles</MenuItem>
          <MenuItem value='smartphones'>Celulares</MenuItem>
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
