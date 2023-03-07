import {createSlice} from '@reduxjs/toolkit'

const initialState={
    name:"",
    player:0
}

const playerSlice=createSlice({
    name:"player",
    initialState,
    reducers:{
        //reducer function to add player
        addPlayer:(state)=>{
            state.player+=1
        },
        //magic
        addBy:(state,action)=>{
            state.player+=action.payload
        }

    }
})

export const {addPlayer,addBy}=playerSlice.actions
export default playerSlice.reducer;