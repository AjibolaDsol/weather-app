import { styled } from '@mui/system'
import { AppBar, Typography } from '@mui/material'

export const Appbar = styled(AppBar)({
    backgroundColor: '#f8f9fa', 
    boxShadow: 'none'
 
})

export const LogoDiv = styled('div')({
        flexGrow: 1,
})
export const Logo = styled('img')({
    width: '60px',
    height: '40px',
   
})

export const Text = styled(Typography)({
    color: '#222'
})
