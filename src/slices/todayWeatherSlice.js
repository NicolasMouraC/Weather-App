import { createSlice } from "@reduxjs/toolkit";

const todayWeatherSlice = createSlice({
    name: "todayWeather",
    initialState: {
        todayWeather: [],
        isTodayWeatherLoaded: false
    },
    reducers: {
        toggleIsLoaded: (state, action) => {
            if (state.isTodayWeatherLoaded === true) {
                state.isTodayWeatherLoaded = (!state.isTodayWeatherLoaded);
            }
        },
        getTodayWeather: (state, action) => {
            state.todayWeather = action.payload.todayWeather;
            state.isTodayWeatherLoaded = true;
        }
    }
})

export const selectTodayWeather = (state) => state.todayWeather.todayWeather;
export const selectIsTodayWeatherLoaded = (state) => state.todayWeather.isTodayWeatherLoaded;
export const { toggleIsLoaded, getTodayWeather } = todayWeatherSlice.actions
export default todayWeatherSlice.reducer;
