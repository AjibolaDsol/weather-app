import { Badge, Typography } from '@mui/material'
import React from 'react'
import { Display } from './styles'


function WeatherDisplay({data}) {
  return (
    <div>
      {(typeof data.main != 'undefined') ? (
        <Display>
          <Badge badgeContent={data.sys.country} color='primary'>
            <Typography variant='h4' gutterBottom>{data.name}</Typography>
            </Badge>
            <Typography variant='h5' gutterBottom>{data.main.temp}&deg;C</Typography>
            <Typography variant='h5' gutterBottom>{data.weather[0].main}</Typography>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='Weather-Icon'/>
            <Typography variant='body1'>{data.weather[0].description}</Typography>
        </Display>
      ): (
        <div></div>
      )
}
    </div>
  )
}

export default WeatherDisplay