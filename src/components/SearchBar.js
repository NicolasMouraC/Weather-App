import logo from './images/weather-app.png'
import React, { useRef } from "react";
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { getCurrentWeather, getDaysWeather, getTodayWeather } from '../api/Api.js';
import { setDaysWeather, toggleIsLoaded as daysWeatherLoaded } from "../slices/daysWeatherSlice.js";
import { setCurrentWeather, toggleIsLoaded as currentWeatherLoaded } from "../slices/currentWeatherSlice.js";
import { setTodayWeather, toggleIsLoaded as todayWeatherLoaded } from '../slices/todayWeatherSlice.js';

const SearchBar = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleClick = async () => {
        const searchTerm = inputRef.current.value;

        dispatch(currentWeatherLoaded);
        dispatch(daysWeatherLoaded);
        dispatch(todayWeatherLoaded);

        const currentWeatherData = await getCurrentWeather(searchTerm);
        dispatch(setCurrentWeather({currentWeather: currentWeatherData}));

        const daysWeatherData = await getDaysWeather(searchTerm);
        dispatch(setDaysWeather({daysWeather: daysWeatherData}));

        const todayWeatherData = await getTodayWeather(searchTerm);
        dispatch(setTodayWeather({todayWeather: todayWeatherData}));
    }

    return (
        <div className="header">
            <div className="logo">
                <img 
                    src={logo}
                    alt="Weather App logo"
                    width="100px" 
                    height="100px"/>
            </div>

            <div className="search-bar">
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder='City name'/>
                <button type='button' className="search-button" onClick={handleClick}>
                    <HiMagnifyingGlassCircle size="3rem" />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;