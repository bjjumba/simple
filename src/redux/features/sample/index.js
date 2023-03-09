import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
//asyncthunk
export const getData=createAsyncThunk("player/getData",async(arg,{dispatch,rejectWithValue})=>{
        const {data}=await axios.get("http://localhost:5000/lo")
        return data;
})
//intial state of slice
const initialState={
    name:"",
    player:0,
    user:[],
    loading:false,
    isSuccess:false,
    errorMessage:{}
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
        //magic


    },

    extraReducers:{
        //pending
        [getData.pending]:(state,{payload})=>{
            state.loading=true
        },
        //fulfill
        [getData.fulfilled]:(state,{payload})=>{
          state.loading=false
          state.user=payload
          state.isSuccess=true
        },
        //rejected
        [getData.rejected]:(state,action)=>{ 
          state.errorMessage=action.error.message
          state.loading=false
          state.isSuccess=false
        }
    }
})

export const {addPlayer,addBy}=playerSlice.actions
export default playerSlice.reducer;