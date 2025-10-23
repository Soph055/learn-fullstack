import React, {useEffect, useState} from 'react';
import './Weather.css';
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(false);
    const [cityInput, setCityInput] = useState('Montreal');
    
    const search = async (city) => {
        try {
            // Temporary: Using the hardcoded key while debugging the Vite issue
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"0adc26dd8a0aa5c1260b09b5cc397f2b"}`;

            const response = await fetch(url);
            const data = await response.json();

            console.log(data);

           
            setWeatherData({
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  
              });

        } catch (error){
            console.error("error fetching weather data:", error);
            setWeatherData(false);
        }

    }

    useEffect(() => {
        search("Montreal");
        //search("cityInput");
      }, []);


      if (!weatherData) {
        return (
            <div className="weather">
                <div className='search-bar'>
                    <input 
                        type="text" 
                        placeholder="Search for a city..." 
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)} 
                    />
                    <button onClick={() => search(cityInput)}> Search </button>
                   {/* <img src={search_icon} alt="Search icon" /> */}
                </div>
                <p>Loading weather or enter a city...</p>
            </div>
        );
    }


  return (
    <div className="weather">
        <div className='search-bar'>
            <input type="text" placeholder="Search for a city..." value={cityInput} onChange={(e) => setCityInput(e.target.value)}s/>
            <button onClick={() => search(cityInput)} > Search </button>
           {/*  <img src ={search_icon} alt ="Search icon" /> */}

        </div>


        <img src ={clear_icon} alt ="" className='weather-icon'/>
      <p className='temperature'>{weatherData.temperature}C</p>
      <p className='location'>{weatherData.location}</p>
    </div>
  )
}

export default Weather