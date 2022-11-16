import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from './layers/catalogSlice'
import serviceReducer from './layers/serviceLayer'
import standMailReducer from "./layers/standMailSlice";

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        service: serviceReducer,
        mail: standMailReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



