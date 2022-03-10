import {styled } from '@mui/system'
import { Button, TextField} from '@mui/material'

export const Search = styled(TextField)({
   background: '#fff',
})

export const Div = styled('form')({
    backgroundColor: '#ddd',
    padding: '8px 16px',
    display: 'flex',
    justifyContent: 'center'
})

export const InputDiv = styled('div')({
    width: '50%',
})

export const SearchButton = styled(Button)({
    marginLeft: '20px',
    borderRadius: '20px',
})

export const SectionContainer = styled('div')({
    width: '100%',
    minHeight: '85vh',
    backgroundColor: '#C4C4C4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

})