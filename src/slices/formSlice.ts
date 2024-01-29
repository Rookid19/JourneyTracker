
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        personalInfo: {
            firstName: 'Randy',
            lastName: 'Odoom',
            dob: '',
        },
        cities: [{ dateArrived: '', cityName: '' }],
    },
    reducers: {
        updatePersonalInfo: (state, action) => {
            state.personalInfo = action.payload;
        },
        addCity: (state) => {
            state.cities.push({ dateArrived: '', cityName: '' });
        },
        updateCityInfo: (state: any, action: PayloadAction<{ index: number; field: string; value: string }>) => {
            const { index, field, value } = action.payload;
            state.cities[index][field] = value;
        },
    },
})

// Action creators are generated for each case reducer function
export const { updatePersonalInfo, addCity, updateCityInfo } = formSlice.actions;

export const formData = (state: any) => state.form

export default formSlice.reducer

// Redux Toolkit allows us to write "mutating" logic in reducers. 