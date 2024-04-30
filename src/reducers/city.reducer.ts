import { PayloadAction, createSlice } from "@reduxjs/toolkit";




export interface CountryType {
    id: string
    code: string;
    label: string;

}

const initialState: CountryType[] = [
    {id: crypto.randomUUID(), code: 'BY', label: 'Minsk',},
    {id: crypto.randomUUID(), code: 'UA', label: 'Kiev'},
    {id: crypto.randomUUID(), code: 'ES', label: 'Madrid'},
    {id: crypto.randomUUID(), code: 'JP', label: 'Tokio',},

] 

const slice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setNewCity: (state, action: PayloadAction<{code: string, label: string}>) => {
             state.push({id: crypto.randomUUID(),  code: action.payload.code, label: action.payload.label});
        }
    }
})


export const cityReducer = slice.reducer;
export const cityAction = slice.actions.setNewCity;
