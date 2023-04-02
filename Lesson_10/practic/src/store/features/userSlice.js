import { createSlice } from "@reduxjs/toolkit";

// slice


const userSlice = createSlice({
    name:'user',
    initialState: {
        name: null,
        age: null,
        city: null
    },
    reducers: {
        changeName: (state,action) => {
            state.name = action.payload;
        }
    }
})

export default userSlice.reducer

export const {changeName,} = userSlice.actions

/*
    Сделать поле ввода имени
    Сделать кнопку обновить имя
    Отрисовывать имя на страничке сайта

*/