import React from "react";

const DaysForecast = () => {
    return (
        <div className="card">
            <h1>7 Day Forecast</h1>
            <div className="card-content flex-collumn">
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
            </div>
        </div>
    );
}

export default DaysForecast;