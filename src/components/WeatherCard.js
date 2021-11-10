import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import getIcon from '../DAL/getIcon'

function WeatherCard(props) {
    const [data]= useState(props.array)
    const dayWheathr=()=>{
        props.daily(data)
    }
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const myDate= new Date(data.applicable_date)
    let dateFormat= myDate.toLocaleDateString("en-UK", options);
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    if(myDate.getDate()===today.getDate()){
        dateFormat='Today'
    }else if(myDate.getDate()===tomorrow.getDate()){
        dateFormat='Tommorow'
    }
    return (
        
        <div>
            
            <h5><Link to='/DailyWeather/' onClick={dayWheathr}>{dateFormat}</Link></h5>
            <img src={getIcon(data.weather_state_abbr)} alt=''/>
            {data.weather_state_name}
            <h5>max:{Math.round(data.max_temp)}℃</h5>
            <h5>min:{Math.round(data.min_temp)}℃</h5>
            <h6>{data.wind_direction_compass} {Math.round(data.wind_speed)} mph</h6>
            <h6>Humidity {Math.round(data.humidity)}%</h6>
            <h6>Visibility {(Math.round(data.visibility*10))/10} miles</h6>
            <h6>Pressure {data.air_pressure}mb</h6>
            <h6>Confidence {data.predictability}%</h6>
            
        </div>
    )
}

export default WeatherCard
