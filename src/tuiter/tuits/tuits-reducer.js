import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],          // no tuits
    loading: false      // loading flag to display spinner
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,                   // same as "initialState": initialState
    extraReducers: {                // define asynchronous reducers
        [findTuitsThunk.pending]:   // set loading true so UI can display spinner
            (state) => {            // empty tuits since we are still fetching them
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:  // when we get response, request is fulfilled
            (state, { payload }) => { // we extract/destruct payload from action object
                state.loading = false // turn off loading flag since we have the data
                state.tuits = payload // payload has tuits from server and update redux state
            },
        [findTuitsThunk.rejected]:      // if request times out, or responds with error
            (state) => {                // reset loading flag, maybe use another flag to report error
                state.loading = false
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }

    },
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;