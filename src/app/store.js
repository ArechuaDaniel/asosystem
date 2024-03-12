import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../store/auth/authSlice";
import { instructorSlice } from "../store/instructor/instructorSlice";
import { asociacionSlice } from "../store/asociacion/asociacionSlice";



 export const store = configureStore({
    reducer: {
        auth : authSlice.reducer,
        instructor : instructorSlice.reducer,
        asociacion : asociacionSlice.reducer,
        
    }
})
