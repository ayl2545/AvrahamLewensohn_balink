import React,{useState, useEffect} from 'react'
import getIcon from '../DAL/getIcon';
import WeatherCard from './WeatherCard';


export default function DailyWeather (props){
  const[day]=useState(props.day)

  const daily=(dailyWeather)=>{
    
}
  
  return(
    
    <div>
      <div><WeatherCard key={day.id} array={day} daily={daily}/></div>
    </div>
  )
}
