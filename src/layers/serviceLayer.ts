import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {JSXElementConstructor, ReactElement, ReactNode} from "react";

export interface CounterState {
    values: ReactNode | null;
}

const initialState: CounterState = {
    values: null,
}

export const catalogSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<ReactNode>) => {
            state.values = action.payload
        },
    },
})

export const { setModal } = catalogSlice.actions;

export default catalogSlice.reducer;

