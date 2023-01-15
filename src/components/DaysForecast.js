import React, { useEffect } from "react";
import { getDaysWeather } from "../api/Api";
import { selectDaysWeather, selectIsDaysWeatherLoaded, setDaysWeather, toggleIsLoaded } from "../slices/daysWeatherSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';

const DaysForecast = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(selectIsDaysWeatherLoaded);
    const daysWeather = useSelector(selectDaysWeather);

    useEffect(() => {
        async function setData() {
            dispatch(toggleIsLoaded);
            const data = await getDaysWeather("São paulo");
            dispatch(setDaysWeather({daysWeather: data}))
        }

        setData();
    })

    return (
        <div className="card">
            <h1>7 Day Forecast</h1>
            <div className="card-content flex-collumn">
                {isLoaded ? daysWeather.forecast.forecastday.map(el => {
                    return (
                        <div>
                            <div className="day-forecast-card">
                                <div className="info">
                                    {el.date}
                                </div>
                                <div className="card-figure">
                                    <div className="icon">
                                        <img src={`https:${el.day.condition.icon}`} className='icon-img'/>
                                        <div>{el.day.condition.text}</div>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <div className="info">
                                        <FaTemperatureLow/> {el.day.mintemp_c}º / <FaTemperatureHigh/> {el.day.maxtemp_c}º
                                    </div>
                                </div>
                            </div>

                            <hr/>
                        </div>
                    )  
                }): <div>
                    <div className="day-forecast-card">
                        <div>
                            Today
                        </div>
                        <div>
                            <div>Figure</div>
                            <div>Weater</div>
                        </div>
                        <div>
                            Temp/Temp
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