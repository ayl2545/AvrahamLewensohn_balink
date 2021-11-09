import React, {useState, useEffect} from 'react'
import DailyWeather from './DailyWeather'
import WeeklyWeather from './WeeklyWeather';
import {useRoutes} from 'react-router-dom';

export default function Routers(props) {
    const[day,setDay]=useState({})
    const[location]=useState(props.location)
    const getDay=(day)=>{
      setDay(day)
    }
    useEffect(() => {
      console.log(props.location)
      console.log(props.days)
    }, [])
    const routes = useRoutes([
        {path:'/', element:<WeeklyWeather getDay={getDay} location={location} days={props.days}/>},
        {path:'/DailyWeather', element:<DailyWeather day={day} location={location}/>}
      ])
    return routes;
    
}
