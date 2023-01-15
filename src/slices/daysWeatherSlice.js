import { createSlice } from "@reduxjs/toolkit";

const daysWeatherSlice = createSlice({
    name: "daysWeather",
    initialState: {
        daysWeather: [],
        isDaysWeatherLoaded: false
    },
    reducers: {
        toggleIsLoaded: (state, action) => {
            if (state.isDaysWeatherLoaded === true) {
                state.isDaysWeatherLoaded = (!state.isDaysWeatherLoaded);
            }
        },
        setDaysWeather: (state, action) => {
            state.daysWeather = action.payload.daysWeather;
            state.isDaysWeatherLoaded = true;
        }
    }
})

export const selectDaysWeather = (state) => state.daysWeather.daysWeather;
export const selectIsDaysWeatherLoaded = (state) => state.daysWeather.isDaysWeatherLoaded;
export const { setDaysWeather, toggleIsLoaded } = daysWeatherSlice.actions
export default daysWeatherSlice.reducer;
