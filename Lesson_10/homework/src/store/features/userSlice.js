import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: {
        name: "",
        age: "",
        rating: []
    },
    reducers: {
        changeName: (state,action) => {
            state.name = action.payload;
        },
        changeAge: (state,action) => {
            state.age = action.payload;
        },
        changeRating: (state,action) => {
            state.rating = action.payload;
        }
    }
})

export default userSlice.reducer

export const {changeName, changeAge, changeRating} = userSlice.actions