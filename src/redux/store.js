import {configureStore} from '@reduxjs/toolkit'
import playerReducer from './features/sample'
export const store=configureStore({
    reducer:{
        player:playerReducer
    }
})