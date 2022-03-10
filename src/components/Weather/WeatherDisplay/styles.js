import { Paper } from '@mui/material'
import { styled } from '@mui/system'

export const Display = styled(Paper)(({theme}) =>({
    width: '320px',
    height: '340px',
    borderRadius: '20px',
    padding: '48px',
    background: '#EBEBEC',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        width: '100%'
    }
}))
