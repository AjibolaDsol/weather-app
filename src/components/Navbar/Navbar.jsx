import { Toolbar } from '@mui/material'
import React from 'react'
import { Appbar, Logo, LogoDiv, Text } from './styles'
import logo from '../../assets/weather_app_logo.png'



function Navbar() {

  return (
    <>
      <Appbar position='fixed'>
       <Toolbar>
           <LogoDiv>
                <Logo src={logo} alt='Logo'/>
            </LogoDiv>
            <Text> Weather App by AjibolaD</Text>   
        </Toolbar>  
      </Appbar>  
     <Toolbar/>
    </>
  )
}

export default Navbar