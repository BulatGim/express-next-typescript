import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from './layers/catalogSlice'
import serviceReducer from './layers/serviceLayer'

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        service: serviceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



