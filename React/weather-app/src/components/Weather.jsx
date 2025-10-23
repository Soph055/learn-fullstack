import React, {useEffect, useState} from 'react';
import './Weather.css';
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(false);
    
    const search = async (city) => {
        try {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();

            console.log(data);

           
            setWeatherData({
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  
              });

        } catch {error} {
            console.error("error fetching weather data:", error);
        }

    }

    useEffect(() => {
        search("Montreal");
      }, []);

  return (
    <div className="weather">
        <div className='search-bar'>
            <input type="text" placeholder="Search for a city..."/>
            <button>Search</button>
            <img src ={search_icon} alt ="Search icon" />

        </div>


        <img src ={clear_icon} alt ="" className='weather-icon'/>
      <p className='temperature'>{weatherData.temperature}C</p>
      <p className='location'>{weatherData.location}</p>
    </div>
  )
}

export default Weather