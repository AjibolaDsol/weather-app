import React, {useEffect, useState} from 'react'
import { Div, InputDiv, Search, SearchButton, SectionContainer } from './styles'
import WeatherDisplay from './WeatherDisplay/WeatherDisplay'
import SearchIcon from '@mui/icons-material/Search'


function Weather() {
const [apiData, setApiData] = useState({})
const [state, setState] = useState('')
const [getState, setGetState] = useState('')

const apiKey = process.env.REACT_APP_API_KEY
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}&units=metric`

useEffect(() => {
  fetch(apiUrl)
  .then(res => res.json())
  .then(data => setApiData(data))
  .catch(err => console.log(''))


}, [apiUrl])

const handleChange = (e) =>{
  setGetState(e.target.value)
  e.preventDefault()
}

const handleSubmit = (e) =>{
  setState(getState) 
  e.preventDefault()
}


  return (
    <div>
      <Div>
          <InputDiv action="">
            <Search label='City Name' size='small' fullWidth onChange={handleChange}/>
            </InputDiv> 
            <SearchButton variant='contained' size='small' type='submit' onClick={handleSubmit} aria-label='Search Button'>
              <SearchIcon/>  
            </SearchButton>
        </Div>

      <SectionContainer>
          {(apiData.cod !== '404') ? <WeatherDisplay data={apiData}/>: <div>Error 404.....Pls type in a valid city or country</div>}
      </SectionContainer>
    </div>
  )
}

export default Weather