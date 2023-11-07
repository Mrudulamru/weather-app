import React, { useState } from 'react'
import './Weatherapp.css'

import search from "../Asset/search.png";
import cloudy from "../Asset/cloudy.png";
import hot from "../Asset/hot.png";
import raincloud from "../Asset/raincloud.png";
import snow from "../Asset/snow.png";
//import sun from "../Asset/sun.png";
import sunrain from "../Asset/sunrain.png";
//import clear from "../Asset/clear.png";


export const Weatherapp = () => {

let api_key="95a2af21df1f49064ce6293115c33624";

const[wicon,setWicon] = useState(cloudy);

const Search = async () => {
const element =document.getElementsByClassName("cityInput")
if(element[0].value==="")
{
  return 0;
}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

let response = await fetch(url);
let data= await response.json();
const humidity= document.getElementsByClassName("humidity-percentage");
const snowrate= document.getElementsByClassName("snow-rate");
const temperature= document.getElementsByClassName("weather-temp");
const location = document.getElementsByClassName("weather-location")

humidity[0].innerHTML = data.main.humidity+"%";
snowrate[0].innerHTML =Math.floor (data.wind.speed)+"mm/h";
temperature[0].innerHTML =Math.floor(data.main.temp)+"°C";
location[0].innerHTML = data.name;

if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
{
  setWicon(hot);
}
else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")

{
  setWicon(cloudy);
}
else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")

{
  setWicon(raincloud);
}
else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")

{
  setWicon(raincloud);
}
else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")

{
  setWicon(sunrain);
}
else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")

{
  setWicon(sunrain);
}
else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")

{
  setWicon(snow);
}
else{
  setWicon(hot);
}
}
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='search any place here'/>
        <div className='search-icon' onClick={()=>{Search()}}>
          <img src= {search} alt="search input" />
        </div>
      </div>
<div className="weather-image">
  <img src={wicon} alt="" />
</div>
<div className="weather-temp">24°C</div>
<div className="weather-location">London</div>
<div className="data-container">
  <div className="element">
    <img src={hot}alt="" className="icon" />
    <div className="data">
    <div className="humidity-percentage">64%</div>
    <div className="text">Humidity</div>
    </div>
  </div>
  <div className="element">
    <img src={snow} alt="" className="icon" />
    <div className="data">
    <div className="snow-rate">2 mm/h</div>
    <div className="text">snow speed</div>
    </div>
  </div>
</div>
    </div>
  )
}
