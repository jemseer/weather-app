import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import sun from './sun.png';
//action
import { fetchWeather } from "./actions/fetchWeather";

import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import Days from './components/Days';



function App() {
  //set city
  const [city, setCity] = useState("");
  const weatherSelector = useSelector((state )=> state)
  const dispatch=useDispatch();
  const getWeatherInfoAction=(city)=>dispatch
  (fetchWeather(city));


useEffect(() => {
 getWeatherInfoAction("india");
}, {})


  const getWeatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("Please enter any city");
    }
    else {
      getWeatherInfoAction(city);
console.log(weatherSelector.weatherinfo);
    }

  }

let details="";
if(weatherSelector.weatherinfo){
  details=<div className="details">
    <h4>Weather Details</h4>
    <p>{weatherSelector.weatherinfo.location.name}
    <span>
        {weatherSelector.weatherinfo.location.country}
      </span></p>
    <img src={sun} width="100" height="100"/>
  </div>
}else{
  details=<p>You Need to type city</p>
}



  


  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={getWeatherInfo}>
          <input type="text" name="name" placeholder="enter your city" onChange={e =>
            setCity(e.target.value)} />
          <input type="submit" value="Check Weather" />

        </form>
{details}

        {/* <Search />
        <Weather />
        <Days /> */}
      </div>
    </React.Fragment>
  

  );
}

export default App;
