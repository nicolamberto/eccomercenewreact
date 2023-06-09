import { Box, Button, Container, Grid, ListItem, Typography } from '@mui/material'
import React from 'react'

const Products = ({products}) => {
  return (      
    <Container sx={{display:'flex', justifyContent:'center', alignItems:'center', border:'1px solid red'}}>
        <Grid container spacing={10}>
        {products.slice(0,10).map(product=>(
            <Grid item
            xs={12}
            sm={6}
            md={3}
            >
                <Box sx={{border:'1px solid violet'}}>
                    <img style={{width:'200px', height:'200px', objectFit:'cover'}} src={product.thumbnail} alt={product.title}/>
                    <Typography variant='h6'>{product.title} <span>Price: ${product.price}</span></Typography>
                    <Button>Comprar</Button>
                </Box>
                
            </Grid>
            ))}
        </Grid>
    </Container>
    
  )
}

export default Products
