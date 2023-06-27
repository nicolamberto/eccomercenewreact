import { Button } from '@mui/base'
import { Box, Drawer, IconButton, List, ListItemText, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../hooks/useCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const ModalCart = () => {
    const {cart, clearCart, removeFromCart, addToCart} = useCart()
    const [open, setOpen] = useState(false)
    const handleClose = ()=>setOpen(false)
    const handleOpen = ()=>setOpen(true)


  return (
    <div>
        <Button onClick={handleOpen}><ShoppingCartIcon/></Button>
        <Drawer open={open} anchor='right' onClose={()=> setOpen(false)}>
                    
                    <Box sx={{width: 350, bgcolor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <nav aria-label="secondary mailbox folders">
                        <List>
                                {cart.map(product => (
                                  <Box sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'space-around',
                                    alignItems:'center'
                                  }}>
                                    <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                                      <Box>
                                        <ListItemText primary={product.title} />
                                        <Typography> - ${product.price} </Typography>
                                        <Typography>quantity: {product.quantity}</Typography>
                                        <Box>
                                          <IconButton onClick={()=> addToCart(product)}><AddIcon/></IconButton>
                                          <IconButton onClick={()=> removeFromCart(product)}><RemoveIcon/></IconButton>
                                        </Box>
                                      </Box>
                                      <img style={{width:'40%'}} src={product.thumbnail} alt={product.title}/>
                                    </Box>
                                    
                                      <hr style={{color:'black', width:'100%'}}/>
                                  </Box>
                                  
                                ))}
                        </List>
                        <Button onClick={clearCart}>Clear cart</Button>
                        </nav>
                    </Box>
                    
                </Drawer>
    </div>
  )
}

export default ModalCart
