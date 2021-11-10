import React,{useState} from 'react'
import './WeeklyWeather.css'
import WeatherCard from './WeatherCard'

export default function WeeklyWeather(props){
    const[days]=useState(props.days)
    const[dailyWeather, setDailyWeather]=useState({})

    const daily=(dailyWeather)=>{
        setDailyWeather(dailyWeather)
        props.getDay(dailyWeather)
    }
    
   return(
        <div >
            <div className = "topContainer" >
            {
                props.days.map((day)=>{
                  return <div ><WeatherCard key={day.id} array={day} daily={daily}/></div>
               })
            }
            
            </div>
        </div>
    )
}

