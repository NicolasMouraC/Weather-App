import { createSlice } from "@reduxjs/toolkit";

const currentWeatherSlice = createSlice({
    name: "currentWeather",
    initialState: {
        currentWeather: [],
        isCurrentWeatherLoaded: false
    },
    reducers: {
        toggleIsLoaded: (state, action) => {
            if (state.isCurrentWeatherLoaded === true) {
                state.isCurrentWeatherLoaded = (!state.isCurrentWeatherLoaded);
            }
        },
        setCurrentWeather: (state, action) => {
            state.currentWeather = action.payload.currentWeather;
            state.isCurrentWeatherLoaded = true;
        }
    }
})

export const selectCurrentWeather = (state) => state.currentWeather.currentWeather;
export const selectIsCurrentWeatherLoaded = (state) => state.currentWeather.isCurrentWeatherLoaded;
export const { setCurrentWeather, toggleIsLoaded } = currentWeatherSlice.actions
export default currentWeatherSlice.reducer;
