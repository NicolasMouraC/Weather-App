import React from "react";
import { selectAirCondition, selectIsAirConditionLoaded } from "../slices/airConditionSlice";
import { useSelector } from "react-redux";

const AirCondition = () => {
    const isLoaded = useSelector(selectIsAirConditionLoaded);
    const airCondition = useSelector(selectAirCondition);

    return (
        <div className="card air-container">
            <div className="card-title">Air Condition</div>
            {isLoaded ?
                <div className="card-container flex-collumn">
                    <div className="air-condition-row">
                        <div className="card-info">
                            <h3>😃 Real feel</h3>
                            <p className="info">{airCondition.current.feelslike_c}°</p>
                        </div>
                        <div className="card-info">
                            <h3>🥶 Wind</h3>
                            <p className="info text-end">{airCondition.current.wind_kph} KPH</p>
                        </div>
                    </div>

                    <div className="air-condition-row">
                        <div className="card-info">
                            <h3>😭 Rain chance</h3>
                            <p className="info">{airCondition.current.precip_mm}%</p>
                        </div>
                        <div className="card-info">
                            <h3>🥵 UV index</h3>
                            <p className="info text-end">{airCondition.current.uv} out of 10</p>
                        </div>
                    </div>
                </div>

                : 

                <div className="card-container flex-collumn">
                    <div className="air-condition-row">
                        <div>
                            <h3>😃 Real feel</h3>
                            <p className="skeleton skeleton-text"></p>
                        </div>
                        <div>
                            <h3>🥶 Wind</h3>
                            <p className="skeleton skeleton-text"></p>
                        </div>
                    </div>

                    <div className="air-condition-row">
                        <div>
                            <h3>😭 Rain chance</h3>
                            <p className="skeleton skeleton-text"></p>
                        </div>
                        <div>
                            <h3>🥵 UV index</h3>
                            <p className="skeleton skeleton-text"></p>
                        </div>
                </div>
            </div>
        }

        </div>
    );
}

export default AirCondition;