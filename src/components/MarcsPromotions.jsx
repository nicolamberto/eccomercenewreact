import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'


const markContent = [
    {
        name:'47 STREET',
        image:'https://cdn.dynamicyield.com/api/8767611/images/1c80b5bcc9b17__onsite-chico_47street.jpg',
        descount:'20% DESCUENTO'
    },
    {
        name:'VIAMO',
        image:'https://cdn.dynamicyield.com/api/8767611/images/32d102a358858__onsite-chico_viamo.jpg',
        descount:'20% DESCUENTO'
    },
    {
        name:'LACOSTE',
        image:'https://cdn.dynamicyield.com/api/8767611/images/6c614e096253__onsite_winterbrc_lacoste.jpg',
        descount:'20% DESCUENTO'
    },
    {
        name:'PORTSAID',
        image:'https://cdn.dynamicyield.com/api/8767611/images/1b5bb8cd04e88__onsite-chico_portsaid.jpg',
        descount:'20% DESCUENTO'
    }
]

const MarcsPromotions = () => {
  return (
    <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box sx={{ width:'85%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img src='https://cdn.dynamicyield.com/api/8767611/images/a671e5598ae3__promo_xl_lw_tallesparatodas.jpg' alt='image'/>
                <Container>
                    <Grid container spacing={3}>
                        {markContent.map(item=>(
                        <Grid item
                        md={6}
                        >
                            
                                <Box sx={{display:'grid', gridTemplateAreas:'1fr 1fr'}}>
                                    <img src={item.image}/>
                                    <Typography>{item.name}</Typography>
                                    <Typography>{item.descount}</Typography>
                                    <Button>SHOP NOW</Button>
                                </Box>  
                            
                            
                        </Grid>
                        ))}
                    </Grid>
                </Container>
                    
                

            
        </Box>
    </Box>
  )
}

export default MarcsPromotions
