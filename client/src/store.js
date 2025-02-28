import {configureStore} from '@reduxjs/toolkit'
import numReducer from './slices/NumSlice.js'
import userReducer from './slices/UserSlice.js'

const store = configureStore({
    reducer:{
        user: userReducer, 
        num: numReducer,
    } 
})

export default store