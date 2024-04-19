import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        changeLoading: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        }
    }
})


export const loadingReducer = slice.reducer;
export const loadingActions = slice.actions
