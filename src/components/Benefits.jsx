import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

const benefits=[
    {
        id:1,
        firsttext:'CAMBIO Y DEVOLUCION',
        secondtext:'GRATIS, A TODO EL PAIS',
        icon: ChangeCircleOutlinedIcon,
    },
    {
      id:1,
      firsttext:'DESCARGA NUESTRA APP',
      secondtext:'ANDROID & IOS',
      icon: MobileFriendlyOutlinedIcon,
    },
    {
      id:1,
      firsttext:'MAS DE 100 MARCAS',
      secondtext:'LOCALES E INTERNACIONALES',
      icon: BookmarkBorderOutlinedIcon,
    },
    {
      id:1,
      firsttext:'MULTIPLES FORMAS DE PAGO',
      secondtext:'TARJETAS, EFECTIVO, MERCADOPAGO',
      icon: CreditScoreOutlinedIcon,
    },
    {
      id:1,
      firsttext:'FINANCIACION',
      secondtext:'3 Y 6 CUOTAS SIN INTERES',
      icon: LocalAtmOutlinedIcon,
    }
]

const Benefits = () => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        p:'60px 30px 60px 30px'
    }}>
        {benefits.map(item => (
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:1, cursor:'pointer',}}>
                <IconButton >{<item.icon sx={{width:35, height:35}}/>}</IconButton>
            <hr style={{ width:'0px',height:'25px', borderLeft:'1px solid black'}}/>
            <Box >
                <Typography sx={{fontSize:13}}>{item.firsttext}</Typography>
                <Typography sx={{fontSize:10}}>{item.secondtext}</Typography>
            </Box>
        </Box>
        ))}
        
    </Box>
  )
}

export default Benefits
