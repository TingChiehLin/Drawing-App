import { createSlice, configureStore } from '@reduxjs/toolkit';
// import React,{useRef} from 'react';

// const initialCanvasRef = { canvasRef: useRef<CanvasRenderingContext2D | null>(null) }
const initialState = { value: 'black' }

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

const store = configureStore({
    reducer: {
        color: changeColorSlice.reducer
    }
});

export const colorActions = changeColorSlice.actions;

export default store;

