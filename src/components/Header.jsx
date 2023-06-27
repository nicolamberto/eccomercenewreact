
import React, { useState } from 'react'

import { AppBar, Box, Button, ButtonGroup, Drawer, IconButton, List, Toolbar, Typography } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ModalCart from './ModalCart';
import logo from '../images/ropinhanew.jpg';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import bannerenvio from '../images/bannerenvios.jpg';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Promotions from './Promotions';


const Header = () => {

  const [open, setOpen]= useState(false)

  return (
    <>
    {/* <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around', mb:10, border:'1px solid black'}}>
      
      <Box>
        <Typography variant='h4'>Ecommerce</Typography>
        <ModalCart/>
      </Box>
      
      <Filters/>
    </Box> */}
    <Promotions/>
    <AppBar sx={{ backgroundColor:'white',position:'static', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', }}>
            <Toolbar sx={{ width:'100%'}}>
                <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                  <Box >
                    <IconButton 
                    color="black" 
                    onClick={()=> setOpen(true)}
                   > 
                    <MenuOpenIcon/>
                    </IconButton>
                    <Link to={'/'}>
                      <img style={{width:'30%'}} src={logo}/>
                    </Link>
                  </Box>
                    

                    
                    <Box sx={{ display:'flex', alignItems:'center', width:'10%'}}>
                      <AddLocationAltOutlinedIcon sx={{color:'green', width:21}}/>
                      <Typography sx={{color:'black', fontSize:13}} >Donde quieres recibir tu producto?</Typography>
                    </Box>
                    <ModalCart/>
                </Box>
                    <Drawer open={open} anchor='left' onClose={()=> setOpen(false)}>
                        
                        <Box sx={{width: 250, bgcolor:'white'}}>
                            <nav aria-label="secondary mailbox folders">
                            <IconButton 
                              color="black" 
                              onClick={()=> setOpen(false)}
                              sx={{ position:'relative', left:210}}
                            > 
                              <CloseIcon/>
                            </IconButton>
                            <ButtonGroup
                              orientation="vertical"
                              aria-label="vertical contained button group"
                              variant="text"
                              sx={{ width:'100%'}}
                            >
                              <Button><Link to={'/'}>Home</Link></Button>
                              <Button><Link to={'/products'}>Product</Link></Button>
                              <Button key="three">Medios de pago</Button>
                              <Button key="three">Contacto</Button>
                            </ButtonGroup>
                            
                            </nav>
                        </Box>
                        
                    </Drawer>
               
            </Toolbar>
            <Box sx={{background:`url(${bannerenvio})`, width:'90%', height:'50px', m:'10px 10px 10px 10px' }}> 
            </Box>
            <Box sx={{ width:'100%', display:'flex', textAlign:"center", flexDirection:'column'}}>
              <Typography sx={{opacity:0.5, color:'black', letterSpacing:3}}>ROPA Y CALZADO MUJER, HOMBRES Y NIÑOS I ROPINHA MODA ONLINE</Typography>
              <hr style={{color:'black', width:'100%'}}/>
            </Box>
        </AppBar>
        
    </>
    
  )
}

export default Header
