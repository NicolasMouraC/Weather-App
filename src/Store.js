import { configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "./slices/currentWeatherSlice.js";
import todayWeatherReducer from './slices/todayWeatherSlice.js';
import daysWeatherReducer from './slices/daysWeatherSlice.js';
import airConditionReducer from './slices/airConditionSlice.js';

export default configureStore({
    reducer: {
        currentWeather: currentWeatherReducer,
        todayWeather: todayWeatherReducer,
        daysWeather: daysWeatherReducer,
        airCondition: airConditionReducer
    }
})