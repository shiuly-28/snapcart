import { userSlice } from './store';
import { configureStore, createSlice } from "@reduxjs/toolkit";
import mongoose from "mongoose";
import userSlice from "./userSlice"



export const store=configureStore({
reducer:{
user:userSlice
}

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispaatch = typeof store.dispatch