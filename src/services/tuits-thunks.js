import {createAsyncThunk}           // import createAsyncTrunk
    from "@reduxjs/toolkit"
import * as service                 // import all exported functions as service
    from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(     // create thunk for findTuits
    'tuits/findTuits', async () =>  // give unique name, thunk invokes
        await service.findTuits()                        // service function. Returned data goes in
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',                        // unique thunk identifier
    async (tuitId) => {            // wraps
        await service.deleteTuit(tuitId)                // service method
        return tuitId                                   // return tuit ID so we can remove tuit from reducer's store
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (thunkAPI) => await service.createTuit(thunkAPI)
);

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',             // unique identifier
        async (tuit) =>    // accepts updated tuit
            await service.updateTuit(tuit)      // sends updated tuit to server with service
    )