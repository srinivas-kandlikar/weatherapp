import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [location, setLocation] =useState("canada");
  const [photo, setPhoto]= useState();
  const[region, setRegion]= useState();
  const[country,setCountry]= useState();
  const[temp,setTemp]= useState();
  const[updated,setUpdated]= useState();
  const[feel,setFeel]= useState();
  // const [location, setLocation] = useState(null);


function cityName(e){
  console.log(e.target.value);
  setLocation(e.target.value);
}


  useEffect(function(){

async function fetchWeather(){
  const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=446043609fa44d4f9c8204537241701&q=${location}&aqi=no`)
    const data = await res.json();
    // setLocation(data.location.name);
    console.log(data.location.lat)
    setPhoto(data.current.condition.icon);
    setRegion(data.location.region);
    setCountry(data.location.country);
    setUpdated(data.current.last_updated)
    setTemp(data.current.temp_c)
    setFeel(data.current.feelslike_c)

}
fetchWeather();
  },[location])
  
 
  return (
    
    <>



    <h3>Weather App</h3>
        <input type="text" value={location} placeholder='Enter City | Country Name' onChange={cityName} /><br/>
    City: {location} <br/>
    Region: {region}<br/>
    Country: {country}<br/>
    Last Updated:{updated} <br/>
    Temperature:{temp} <br/>
    feels-Like:{feel}<br/>

 
    <img src={photo}/>

    </>
  )
}





export default App
