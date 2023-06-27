import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const MultiCarousel = ({products}) => {


  return (
    <Box sx={{ display:'flex',flexDirection:"column", justifyContent:'center', alignItems:'center'}}>
      <Typography sx={{p:'20px 20px 20px 20px', opacity:0.5}}>LO VEO, LO QUIERO</Typography>
      <Box sx={{pb:10, width:'65%'}}>
        <Carousel responsive={responsive}>
          {products.slice(0,6).map(product => (
            <Card sx={{ width: 200 }}>
              <CardMedia
                component="img"
                height="150"
                image={product.thumbnail}
                alt="Paella dish"
              />
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
            {product.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {product.category}
            </Typography>
            <Typography variant="body2">
            $ {product.price}
            <br />
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
          ))}
        </Carousel>
        
        
    </Box>
    </Box>
    
    
  )
}

export default MultiCarousel
