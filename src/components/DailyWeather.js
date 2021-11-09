import React,{useState, useEffect} from 'react'
import getIcon from '../DAL/getIcon';


export default function DailyWeather (props){
  const[day]=useState(props.day)
  useEffect(() => {
    console.log(day)
  }, [])
  
  return(
    
    <div>
      <img src={getIcon(day.weather_state_abbr)} alt=''/>
            {day.weather_state_name}
            <h6>max:{Math.round(day.max_temp)}℃</h6>
            <h6>min:{Math.round(day.min_temp)}℃</h6>
            <h6>{day.wind_direction_compass} {Math.round(day.wind_speed)} mph</h6>
            <h5>Humidity {Math.round(day.humidity)}%</h5>
            <h5>Visibility {(Math.round(day.visibility*10))/10} miles</h5>
            <h5>Pressure {day.air_pressure}mb</h5>
            <h5>Confidence {day.predictability}%</h5>
    </div>
  )
}