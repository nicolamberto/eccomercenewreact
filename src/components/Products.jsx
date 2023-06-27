import { Box, Button, CardContent, CardHeader, CardMedia, Container, Grid,  IconButton,  Typography } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../hooks/useCart';
import Filters from './Filters';
import { Card } from 'react-bootstrap';
import Header from './Header';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const Products = ({products}) => {

  const {addToCart, cart} = useCart();
  console.log(cart);
  return (    
    <>
    <Header/>
    <Container sx={{pt:5,display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
        <Filters/>
        <Grid container spacing={7}>
        {products.map(product=>(
            <Grid item
            xs={12}
            sm={6}
            md={3}
            >
                <Card sx={{ maxWidth: 345 }}>
  
                  <CardMedia
                    component="img"
                    height="280"
                    image={product.thumbnail}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                      <Typography>{product.title}</Typography>
                      <Typography sx={{opacity:.7}}>${product.price}</Typography>
                  
                    </Box>

                  </CardContent>
                  <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                    <IconButton onClick={()=> addToCart(product)}>
                      <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton>
                      <QuestionMarkIcon/>
                    </IconButton>
                  </Box>
                    
                
              
                </Card>
                
            </Grid>
            ))}
        </Grid>
    </Container>
    </>
    
    
    
  )
}

export default Products
