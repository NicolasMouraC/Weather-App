import { createSlice } from "@reduxjs/toolkit";

const airConditionSlice = createSlice({
    name: "airCondition",
    initialState: {
        airCondition: [],
        isAirConditionLoaded: false
    },
    reducers: {
        toggleIsLoaded: (state, action) => {
            if (state.isAirConditionLoaded === true) {
                state.isAirConditionLoaded = (!state.isAirConditionLoaded);
            }
        },
        setAirCondition: (state, action) => {
            state.airCondition = action.payload.airCondition;
            state.isAirConditionLoaded = true;
        }
    }
})

export const selectAirCondition = (state) => state.airCondition.airCondition;
export const selectIsAirConditionLoaded = (state) => state.airCondition.isAirConditionLoaded;
export const { toggleIsLoaded, setAirCondition } = airConditionSlice.actions;
export default airConditionSlice.reducer
