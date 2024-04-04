import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    user:[],
    status:'idle',
    error:null
}

export const getUsers = createAsyncThunk('user/getUsers',async()=>{
    const response = await fetch('http://localhost:3000/users')
   const data = await response.json()
    return data
})

export const createUser = createAsyncThunk('user/createUser',async (user)=>{
    const response = await fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(user)
    })
    const data = await response.json()
    return data
})

export const updateUser = createAsyncThunk('users/updateUser', async ({ userId, userData }) => {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
});


export const deleteUsers = createAsyncThunk('user/deleteUsers',async(Id)=>{
     await fetch(`http://localhost:3000/users/${Id}`,{
        method:'DELETE'
    })
    return userId
})

const userSlice = createSlice({
    name:'user',
    initialState,
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(getUsers.fulfilled,(state,action)=>{state.user = state.user.concat(action.payload)})
        builder.addCase(createUser.fulfilled,(state,action)=>{state.user.push(action.payload)})
        builder.addCase(deleteUsers.fulfilled, (state, action) => {state.users = state.users.filter(user => user.id !== action.payload);});
        builder.addCase(updateUser.fulfilled, (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = { ...state.users[index], ...action.payload };
            }
        })
    }
})




export default userSlice.reducer