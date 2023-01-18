import React from "react";
import { useSelector } from "react-redux";
import { selectTodayWeather, selectIsTodayWeatherLoaded } from "../slices/todayWeatherSlice";
import { WiHumidity } from 'react-icons/wi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { BsFillCloudLightningRainFill } from 'react-icons/bs';
import { BsClock } from 'react-icons/bs';


const TodayForecast = () => {
    const isLoaded = useSelector(selectIsTodayWeatherLoaded);
    const todayWeather = useSelector(selectTodayWeather);

    return (
        <div className="card">
            <div className="card-title">Today Forecast</div>
            <div className="card-content flex-collumn">

                {isLoaded ? todayWeather.list.map((el, idx) => {
                    return (
                        <div key={idx}>
                            <div className="today-forecast-card">
                                <div className="card-figure">
                                    {el.weather[0].description}
                                    <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}/>
                                </div>
                                <div className="card-info">
                                    <div className="info"><FaTemperatureHigh color="#00a9fa"/> {Math.trunc(el.main.temp)}º</div>
                                    <div className="info"><WiHumidity color="#00a9fa"/> {Math.trunc(el.main.humidity)}%</div>
                                    <div className="info"><BsFillCloudLightningRainFill color="#00a9fa"/> {Math.trunc(el.pop * 100)}%</div>
                                    <div className="info"><BsClock color="#00a9fa"/> {el.dt_txt}</div>

                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                }) : 
                    <div>
                        <div className="today-forecast-card">
                            <div className="card-figure">
                                <div className="skeleton skeleton-image"></div>
                            </div>
                            <div className="card-info">
                                <div className="info">
                                    <FaTemperatureHigh color="#00a9fa"/>
                                    <span className="skeleton skeleton-text_icon"></span>
                                </div>
                                <div className="info">
                                    <WiHumidity color="#00a9fa"/>
                                    <span className="skeleton skeleton-text_icon"></span>
                                </div>
                                <div className="info">
                                    <BsFillCloudLightningRainFill color="#00a9fa"/>
                                    <span className="skeleton skeleton-text_icon"></span>
                                </div>
                                <div className="info">
                                    <BsClock color="#00a9fa"/>
                                    <span className="skeleton skeleton-text_icon"></span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    
            }
            <div className="icon-description">
            
            </div>   


            </div>
        </div>
    );
}

export default TodayForecast;