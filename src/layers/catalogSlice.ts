import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ICatalogItem} from "../types/types";

export interface CounterState {
    values: ICatalogItem[];
}

const initialState: CounterState = {
    values: [],
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setCatalog: (state, action: PayloadAction<ICatalogItem[]>) => {
            state.values = action.payload
        },
    },
})

export const { setCatalog } = catalogSlice.actions;

export default catalogSlice.reducer;

