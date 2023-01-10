import React from "react";

const AirCondition = () => {
    return (
        <div className="card">
            <h1>Air Condition</h1>
            <div className="card-container flex-collumn">
                <div className="air-condition-row">
                    <div>
                        <h3>😃 Real feel</h3>
                        <p>30º</p>
                    </div>
                    <div>
                        <h3>🥶 Wind</h3>
                        <p>10 KM/H</p>
                    </div>
                </div>

                <div className="air-condition-row">
                    <div>
                        <h3>😭 Rain chance</h3>
                        <p>55%</p>
                    </div>
                    <div>
                        <h3>🥵 UV index</h3>
                        <p>3</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AirCondition;