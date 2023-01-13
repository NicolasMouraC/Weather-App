import React, { useEffect } from "react";
import { getDaysWeather } from "../api/Api";
import { selectDaysWeather, selectIsDaysWeatherLoaded, setDaysWeather, toggleIsLoaded } from "../slices/daysWeatherSlice";
import { useSelector, useDispatch } from "react-redux";

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
                    console.log(el)
                    return (
                        <div>
                            <div className="day-forecast-card">
                                <div>
                                    {el.date}
                                </div>
                                <div>
                                    <div>{el.day.condition.icon}</div>
                                    <div>{el.day.condition.text}</div>
                                </div>
                                <div>
                                    Temp/Temp
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