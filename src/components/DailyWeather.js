import React,{useState} from 'react'
import WeatherCard from './WeatherCard';
import {useNavigate} from 'react-router-dom';

export default function DailyWeather (props){
  const[day]=useState(props.day)
  const navigate = useNavigate();
  const daily=(dailyWeather)=>{
    navigate(-1)
}
  
  return(
    
    <div>
      <div><WeatherCard key={day.id} array={day} daily={daily}/></div>
    </div>
  )
}
