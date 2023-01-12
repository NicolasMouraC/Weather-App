import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodayWeather, selectIsTodayWeatherLoaded, toggleIsLoaded, setTodayWeather } from "../slices/todayWeatherSlice";
import { getTodayWeather } from "../api/Api.js";

const TodayForecast = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(selectIsTodayWeatherLoaded);
    const todayWeather = useSelector(selectTodayWeather);

    useEffect(() => {
        async function setData() {
            dispatch(toggleIsLoaded);
            const data = await getTodayWeather("São Paulo");
            dispatch(setTodayWeather({todayWeather: data}));
        }

        setData()
    })

    return (
        <div className="card">
            <div className="card-title">Today Forecast</div>
            <div className="card-content flex-collumn">

                {isLoaded ? todayWeather.list.map(el => {

                    return (
                        <div>
                            <div className="today-forecast-card">
                                <div className="card-figure">
                                    {el.weather[0].description}
                                    <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}/>
                                </div>
                                <div className="card-info">
                                    <div className="info">{Math.trunc(el.main.temp)}º</div>
                                    <div className="info">{el.main.humidity}</div>
                                    <div className="info">{(el.pop * 100)}%</div>
                                    <div className="info">{el.dt_txt}</div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                }) : <div className="today-forecast-card">
                        <div className="card-figure">
                            Figure
                        </div>
                        <div className="card-info">
                            <div>Temp</div>
                            <div>Hour</div>
                        </div>
                        <hr/>
                    </div>
            }
                

            </div>
        </div>
    );
}

export default TodayForecast;