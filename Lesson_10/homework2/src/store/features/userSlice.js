import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: {
        name: "",
        age: "",
        mark: []
    },
    reducers: {
        changeName: (state,action) => {
            state.name = action.payload;
        },
        changeAge: (state,action) => {
            state.age = action.payload;
        },
        changeMark: (state,action) => {
            state.mark.push(action.payload)
        }
    }
})

export default userSlice.reducer

export const {changeName,changeAge,changeMark} = userSlice.actions