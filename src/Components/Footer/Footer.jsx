import React from 'react'
import {Box,Typography} from '@mui/material'
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <Box className='footer'>
        <Typography component='p'>
            Copyright ©2023 All rights reserved | Developed by <Link to="https://github.com/SACHINVIPUMD">Sachin M D</Link></Typography>
    </Box>
  )
}

export default Footer