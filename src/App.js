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
  const weatherSelector = useSelector((state) => state)
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch
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


  let details = "";
  



  
  if (weatherSelector.weatherinfo && weatherSelector.weatherinfo.hasOwnProperty("location")) {
    //remove time from date json
    var d = weatherSelector.weatherinfo.location.localtime;
    d = d.split(' ')[0];

    //get day from date

    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    var current_date = new Date();

    var weekday_value = current_date.getDay();

    var day=weekdays[weekday_value]

    details =
      <div className="s-line">
        <div className="colum-part">
          <p className="place-b">{weatherSelector.weatherinfo.location.name}</p>
        <p className="place-b">{day}</p>
          
          <p className="day-l">{d}</p>
          <p className="wind-s">Wind {weatherSelector.weatherinfo.current.wind_speed}km/h</p>
        <p className="wind-s"><i class="fas fa-tint"></i> {weatherSelector.weatherinfo.current.cloudcover}%</p>
          
        </div>
        <div className="colum-part-2">


          <img src={sun} alt="weather-cast-image" width="85px" height="75px" />&nbsp;&nbsp;
        <span className="temp-font">{weatherSelector.weatherinfo.current.temperature}°</span>
        </div>
      </div>
  }
  else {
    details = <p>You Need to type city or the city you Typed not exist!!.... </p>
  }
  return (
    <React.Fragment>
      <div className="main">
        <div className="search">
          <form onSubmit={getWeatherInfo}>
            <input type="text" placeholder="Type City" onChange={e =>
              setCity(e.target.value)} /><input type="submit" value="Search" />
          </form>
        </div>
        {details}
      </div>
    </React.Fragment>
  );
}
export default App;
