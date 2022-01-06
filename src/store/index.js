import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {value: 'black'}

const changeColorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        changeBlue(state) {
            state.value = 'blue'
        },
        changeYellow(state) {
            state.value = 'yellow'
        },
        changePurple(state) {
            state.value = 'purple'
        }
    }
});

const resetSlice = createSlice({
    name: 'reset',
    initialState: {value: 0},
    reducers: {
        resetTime(state) {
            state.value = +new Date()
        },
    }
});

const store = configureStore({
    reducer: {
        color: changeColorSlice.reducer,
        reset: resetSlice.reducer
    }
});

export const colorActions = changeColorSlice.actions;
export const resetAction = resetSlice.actions

export default store;

