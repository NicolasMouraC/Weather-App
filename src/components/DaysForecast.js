import React from "react";
import { selectDaysWeather, selectIsDaysWeatherLoaded } from "../slices/daysWeatherSlice";
import { useSelector } from "react-redux";
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';

const DaysForecast = () => {
    const isLoaded = useSelector(selectIsDaysWeatherLoaded);
    const daysWeather = useSelector(selectDaysWeather);

    return (
        <div className="card days-container">
            <div className="card-title">7 Days Forecast</div>
            <div className="card-content flex-collumn">
                {isLoaded ? daysWeather.forecast.forecastday.map((el, idx) => {
                    return (
                        <div key={idx}>
                            <div className="days-forecast-card">
                                <div className="info">
                                    {el.date}
                                </div>
                                <div className="card-figure">
                                    <div className="icon">
                                        <img src={`https:${el.day.condition.icon}`} alt={`https:${el.day.condition.icon}`} className='icon-img'/>
                                        <div>{el.day.condition.text}</div>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <div className="info">
                                        <FaTemperatureLow color="#00a9fa"/> {el.day.mintemp_c}° / <FaTemperatureHigh color="#00a9fa"/> {el.day.maxtemp_c}°
                                    </div>
                                </div>
                            </div>

                            <hr/>
                        </div>
                    )  
                }): <div>
                        <div className="day-forecast-card">
                            <div className="info">
                                <div className="skeleton skeleton-text"></div>
                            </div>
                            <div className="card-figure">
                                <div className="skeleton skeleton-image"></div>
                                <div className="skeleton skeleton-text"></div>
                            </div>
                            <div className="card-info">
                                <div className="info">
                                    <FaTemperatureLow color="#00a9fa"/> <span className="skeleton skeleton-text_icon"></span> / <FaTemperatureHigh color="#00a9fa"/> <span className="skeleton skeleton-text_icon"></span>
                                </div>
                            </div>
                        </div>

                        <hr/>
                    </div>    
                }
            </div>
        </div>
    );
}

export default DaysForecast;