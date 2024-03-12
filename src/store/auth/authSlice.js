import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        correo: null,
        password: null,
        director: null,
        token: null,
        idAsociacion: null,
        asociacion: null,
        errorMessage: null,
        cargando: true
    },
    reducers: {
        login: (state,  {payload} ) => {
            state.status = 'authenticated';
            state.correo= payload.correo;
            state.password= payload.password;
            state.director= payload.director;
            state.token = payload.token;
            state.idAsociacion= payload.idAsociacion;
            state.asociacion= payload.asociacion;
            state.errorMessage= null;
        },
        logout: (state,  {payload}  ) => {
            state.status = 'not-authenticated';
            state.correo= null;
            state.password= null;
            state.director= null;
            state.idAsociacion = null,
            state.asociacion = null,
            state.token = null;
            state.errorMessage= payload.errorMessage;
    
        },
        checkingCredential: (state) => {
            state.status = 'checking';
        },
    }
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredential } = authSlice.actions;