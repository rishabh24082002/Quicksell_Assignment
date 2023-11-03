import {configureStore} from '@reduxjs/toolkit';
import { DataSlice, SelectDataSlice } from './reducers';

const store = configureStore({
    reducer : {
        DataSlice, SelectDataSlice
    }
})

export default store;