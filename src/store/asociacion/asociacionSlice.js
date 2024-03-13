import { createSlice } from '@reduxjs/toolkit';

export const asociacionSlice = createSlice({
    name: 'asociacion',
    initialState: {
        paises: [],
        provincias: [],
        cantones: [],
        parroquias: [],

        asociacion: '',


        clubes: [],
        club: '',

        instructores: [],
        verInstructor: '',

        alumnos: [],
        alumno: '',
    },
    reducers: {
        setPaises: (state, action) => {
            
            state.paises = action.payload

        },
        setProvincias: (state, action) => {
            
            state.provincias = action.payload

        },
        setCantones: (state, action) => {
            
            state.cantones = action.payload

        },
        setParroquias: (state, action) => {
            
            state.parroquias = action.payload

        },
        setAsociacion: (state, action) => {
            
            state.asociacion = action.payload

        },
        setClubes: (state, action) => {
            
            state.clubes = action.payload

        },
        setClub: (state, action) => {
            
            state.club = action.payload

        },
        addClub: (state, {payload}) => {
            state.clubes.push(payload)
        },
        eliminaClub: (state, {payload}) => {
            
            const clubes = payload
            const {idClub} = clubes
            
            //console.log(horarios);
            const foundClub = state.clubes.find(club => club.idClub === clubes.idClub)
            
            if (foundClub) {
                state.clubes.splice(state.clubes.indexOf(foundClub),1);
                //console.log(foundHorario);
            }
        },
        setInstructores: (state, action) => {
            
            state.instructores = action.payload

        },
        setInstructor: (state, action) => {
            
            state.verInstructor = action.payload

        },
        addInstructor: (state, {payload}) => {
            state.instructores.push(payload)
        },
        setAlumnos: (state, action) => {
            
            state.alumnos = action.payload

        },
        setAlumno: (state, action) => {
            
            state.alumno = action.payload

        },
        eliminaInstructor: (state, {payload}) => {
            
            const instructores = payload
            const {cedulaInstructor} = instructores
            
            //console.log(horarios);
            const foundInstructor = state.instructores.find(instructor => instructor.cedulaInstructor === instructores.cedulaInstructor)
            
            if (foundInstructor) {
                state.instructores.splice(state.instructores.indexOf(foundInstructor),1);
                //console.log(foundHorario);
            }
        },
    }
});
// Action creators are generated for each case reducer function
export const {setPaises,setProvincias,setCantones,setParroquias,setAsociacion,setAlumnos,setAlumno, setInstructores,setInstructor,addInstructor, setClubes,setClub, addClub,eliminaClub,eliminaInstructor  } = asociacionSlice.actions;       