import { Box, Typography } from '@mui/material'
import React from 'react'

const payMetods = [
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/VISA.png'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/mastercard.png'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/naraja-logo.png'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/American_Express.jpg'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/cabal.jpg'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/diners.png'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/Argencard.png'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/Cencosud.png'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/logo_credimas_imagen.jpg'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/PAGO_FACIL.png'},
    {image:'https://static.dafiti.com.ar/cms/formas_de_pago/rapipago_logo.png'}
]

const Footer = () => {
  return (
    <Box sx={{pt:10}}>
        <hr style={{color:'black', width:'100%'}}/>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Typography sx={{fontWeight:600, fontSize:'0.8rem'}}>Medios de pago</Typography>
            {payMetods.map(item=>(
                <img style={{height:'1.6rem', padding:'5px 5px 5px 5px'}} src={item.image} alt=''/>
            ))}
        </Box>
        <hr style={{color:'black', width:'100%'}}/>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Typography fontSize={11}>© Ropinha 2011 - 2023 . Todos los derechos reservados. Conoce nuestra Política de privacidad.</Typography>
            <Typography fontSize={11}>BFOOT S.R.L Argentina. Ombu 2971 CP: 1425 Capital Federal. Buenos Aires, Argentina. CUIT: 30-71206548-2</Typography>
            <Typography fontSize={11}>•¿Con qué podemos ayudarte? Resolve tus dudas en nuestra sección Ayuda •</Typography>
            <Typography fontSize={11}>• Atención al cliente: Lunes a Viernes de 10hs a 18hs 0810-362-2366 •</Typography>
        </Box>
    </Box>
  )
}

export default Footer
