import React from "react";

const TodayForecast = () => {
    return (
        <div className="card">
            <h1>Today Forecast</h1>
            <div className="card-content flex-collumn">

                <div className="today-forecast-card">
                    <div className="card-figure">
                        Figure
                    </div>
                    <div className="card-info">
                        <div>Temp</div>
                        <div>Hour</div>
                    </div>
                </div>

                <hr/>

                <div className="today-forecast-card">
                    <div className="card-figure">
                        Figure
                    </div>
                    <div className="card-info">
                        <div>Temp</div>
                        <div>Hour</div>
                    </div>
                </div>

                <hr/>

                <div className="today-forecast-card">
                    <div className="card-figure">
                        Figure
                    </div>
                    <div className="card-info">
                        <div>Temp</div>
                        <div>Hour</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodayForecast;