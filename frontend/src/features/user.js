import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id:"",
    name:"",
    roll:"",
    role:"",
    email:"",
    isPlaced:false,
    isIntern:false
}

const userSlice = createSlice({
    name:'user',
    initialState,``
    reducers:{
        
    },
})

export const selectUser = (state) => state.user;

export default userSlice.reducer;

