
import './App.css';
import Routers from './components/Routers';
import { useMediaQuery } from 'react-responsive'
import Selector from './components/Selector';
import {useState, useEffect} from 'react'
import getData from './DAL/getData';

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  const [location,setLocation]=useState({value: 2459115, label: 'New York'})
  const[data,setData]=useState()
  const[days, setDays]=useState([])
  const getLocation=(location)=>{
      setLocation(location)
  }
  
  const getFromApi= async()=>{
    let rsp= await getData(location.value)
    setData(rsp.data)
    setDays(rsp.data.consolidated_weather)
}
useEffect(() => {
    getFromApi()
}, [location])
 
  return (
<div className="App">
{isMobileDevice }
  {isTabletDevice}
  {isDesktop}
  {isLaptop}
  {isBigScreen}
      <h1>Weather Forecast</h1>
      <div align ="right" >
      <div><Selector getLocation={getLocation}/></div>
      </div>
      <Routers days={days} location={location}/>
    </div>
  
  );
}

export default App;
