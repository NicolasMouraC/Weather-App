import React from "react";
import { selectCurrentWeather, selectIsCurrentWeatherLoaded } from "../slices/currentWeatherSlice";
import { useSelector } from 'react-redux';
import { BsCloudsFill } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { FaTemperatureHigh } from 'react-icons/fa';

const MainContent = () => {
    const isLoaded = useSelector(selectIsCurrentWeatherLoaded);
    const currentWeather = useSelector(selectCurrentWeather);

    return (
        <div className="card">
            <div className="card-title">Current Weather</div>
                {isLoaded ? 
                    <div className="card-content">
                        <div className="card-figure">
                            {currentWeather.weather[0].main}
                            <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="Weather Icon"/>
                        </div>
                        <div className="card-info">
                            <div className="info"><SlLocationPin color="#00a9fa"/> {currentWeather.name}</div>
                            <div className="info"><BsCloudsFill color="#00a9fa"/> {`Cloudliness: ${currentWeather.clouds.all}%`}</div>
                            <div className="info"><FaTemperatureHigh color="#00a9fa"/>{Math.trunc(currentWeather.main.temp)}</div>
                        </div>
                    </div>
                        : 
                        <div className="card-content">
                            <div className="card-figure">
                                <div className="skeleton skeleton-text"></div>
                                <div className="skeleton skeleton-image"></div>
                            </div>
                            <div className="card-info">
                                <div className="info">
                                    <SlLocationPin color="#00a9fa"/>
                                    <span className="skeleton skeleton-text_icon"></span>
                                </div>
                                <div className="info">
                                    <BsCloudsFill color="#00a9fa"/>
                                    <span className="skeleton skeleton-text_icon"></span>
                                </div>
                                <div className="info">
                                    <FaTemperatureHigh color="#00a9fa"/>
                                    <span className="skeleton skeleton-text_icon"></span>
                                </div>
                            </div>
                        </div>
                }
        </div>
    );
}

export default MainContent;