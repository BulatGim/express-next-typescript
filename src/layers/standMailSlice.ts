import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IActiveColor, IStand} from "../types/types";
import {number} from "prop-types";

export interface IStandMail {
    values: {
        stand: IStand;
        activeColor:IActiveColor;
    };
}

const initialState: IStandMail = {
    values: {
        stand: {
            id:0,
            name:"",
            catalogId: 0,
            characteristics: "",
            deep: "",
            createdAt:"",
            height: 0,
            photo: [],
            price: "",
            description:"",
            width: 0,
            updatedAt:"",
            color:""
        },
        activeColor: {
            id: 1,
            ral:"9016",
            color: "#D5D9DC"
        }
    },
}

export const standMailSlice = createSlice({
    name: 'standMail',
    initialState,
    reducers: {
        setStand: (state, action: PayloadAction<IStand>) => {
            state.values.stand = action.payload
        },
        setActiveColor: (state, action: PayloadAction<IActiveColor>) => {
            state.values.activeColor = action.payload
        }
    },
})

export const { setStand, setActiveColor } = standMailSlice.actions;

export default standMailSlice.reducer;