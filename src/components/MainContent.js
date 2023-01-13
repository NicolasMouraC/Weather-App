import React, { useEffect } from "react";
import { selectCurrentWeather, selectIsCurrentWeatherLoaded, setCurrentWeather, toggleIsLoaded } from "../slices/currentWeatherSlice";
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentWeather } from "../api/Api.js";
import { BsCloudsFill } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { FaTemperatureHigh } from 'react-icons/fa';

const MainContent = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(selectIsCurrentWeatherLoaded);
    const currentWeather = useSelector(selectCurrentWeather);

    useEffect(() => {
        async function setData() {
            dispatch(toggleIsLoaded)
            const data = await getCurrentWeather("São Paulo");
            dispatch(setCurrentWeather({currentWeather: data}));
        }

        setData()
    }, [])

    console.log(currentWeather)

    return (
        <div className="card">
            <div className="card-title">Current Weather</div>
            <div className="card-content">
                <div className="card-figure">
                    {isLoaded ? currentWeather.weather[0].main : "Current Weather"}
                    {isLoaded ? <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="Weather Icon"/> : "Weather Figure"}
                </div>
                <div className="card-info">
                    <div className="info"><SlLocationPin color="#00a9fa"/> {isLoaded ? currentWeather.name : "Current city" }</div>
                    <div className="info"><FaTemperatureHigh color="#00a9fa"/>{isLoaded ? `${Math.trunc(currentWeather.main.temp)}º` : "Current temp"}</div>
                    <div className="info"><BsCloudsFill color="#00a9fa"/> {isLoaded ? `Cloudliness: ${currentWeather.clouds.all}%` : "Current cloudliness"}</div>
                    
                </div>
            </div>
        </div>
    );
}

export default MainContent;