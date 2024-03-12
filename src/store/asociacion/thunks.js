import Swal from "sweetalert2"
import { setAsociacion, setCantones, setClubes, setPaises, setParroquias, setProvincias } from "./asociacionSlice"
import axios from "axios"

export const startLoadingAso = () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/asociacion/usuario`, config)
            
            

           
            const asociacion = data;
            
            dispatch(setAsociacion(asociacion))
           


        } catch (error) {
            console.log(error);
            Swal.fire({
            //title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}
export const updateAso= ({asociacions, director, fechaAfiliacion, telefono, correo, idParroquia, direccion, idAsociacion }) => {

    return async (dispatch, getState) => {

        const token = localStorage.getItem('token')
        //console.log(clubs, director, fechaAfiliacion, telefono, correo, idParroquia, direccion, idClub);
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/asociacion/usuario/${idAsociacion}`, { asociacions, director, fechaAfiliacion, telefono, correo, idParroquia, direccion}, config)
            //console.log(data); 
        
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "La Asociación se ha actualizado con exito",
                showConfirmButton: false,
                timer: 1500
            });

            
        } catch (error) {
            console.log(error);
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}
export const updatePasswordAso = ({idAsociacion,password }) => {

    return async (dispatch, getState) => {

        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/asociacion/usuario/cambiar-password/${idAsociacion}`, { password }, config)
            
            //console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "La contraseña se ha actualizado con exito",
                showConfirmButton: false,
                timer: 1500
            });

            
        } catch (error) {
            console.log(error);
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}
export const startLoadingClubes = () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/asociacion/usuarios-club`, config)
            //console.log(data);

           
            const clubes = [];
            //club.push({ id: data.idClub});

            data.forEach(dato => {
                clubes.push({ id: dato.idClub, ...dato });
            })
            
            dispatch(setClubes(clubes))
            


        } catch (error) {
            console.log(error);
            // Swal.fire({
            // title: error.response.data.message,
            // //text: "That thing is still around?",
            // icon: "warning"
            
            // });
        }
    }
}
export const startLoadingPaises = () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/ubicacion`, config)
            //console.log(data);
            const paises = [];
            
            data.forEach(dato => {
                paises.push({ id: dato.idPais, ...dato });
            })
            
            dispatch(setPaises(paises))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
           
        }
    }
}

export const startLoadingProvincias = () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/ubicacion/provincia`, config)
            //console.log(data);
            const provincias = [];
            
            data.forEach(dato => {
                provincias.push({ id: dato.idProvincia, ...dato });
            })
            
            dispatch(setProvincias(provincias))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            
        }
    }
}

export const startLoadingCantones = ({idProvincia}) => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/ubicacion/canton/${idProvincia}`, config)
            
            const cantones = [];
            
            data.forEach(dato => {
                cantones.push({ id: dato.idCanton, ...dato });
            })
            
            dispatch(setCantones(cantones))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            
            
        
        }
    }
}

export const startLoadingParroquias = ({idCanton}) => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/ubicacion/parroquia/${idCanton}`, config)
            
            const parroquias = [];
            
            data.forEach(dato => {
                parroquias.push({ id: dato.idParroquia, ...dato });
            })
            
            dispatch(setParroquias(parroquias))
            


        } catch (error) {
            
            
            
        
        }
    }
}