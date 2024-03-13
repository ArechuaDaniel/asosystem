
import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import Swal from "sweetalert2";
import { startCrateClubes, startLoadingCantones, startLoadingClubes, startLoadingPaises, startLoadingParroquias, startLoadingProvincias } from "../store/asociacion/thunks";


const CrearClub = () => {
    
            const [vista, setVista] = useState('')
            const [password, setPassword] = useState('');
            const [club, setClub] = useState('');
            const [director, setDirector] = useState('');
            const [fechaAfiliacion, setFechaAfiliacion] = useState('');
            const [telefono, setTelefono] = useState('');
            const [correo, setCorreo] = useState('');
            const [direccion, setDireccion] = useState('');
            const [idParroquia, setIdParroquia] = useState('');
            const [idPais, setIdPais] = useState('');
            const [idProvincia, setIdProvincia] = useState('')
            const [idCanton, setIdCanton] = useState('');
        
            const dispatch = useDispatch();
            const {paises, provincias, cantones, parroquias} = useSelector(state => state.asociacion)
            const navigate = useNavigate();
            
        
            const fechaActual = new Date();
   
            useEffect(() => {
              
                dispatch(startLoadingClubes())
                dispatch(startLoadingPaises())
                dispatch(startLoadingProvincias())
                
            }, [])
            
            // useEffect(() => {  
            //     //dispatch(startLoadingCantones({idProvincia}))
            //     setClub(club.club)
            //     setDirector(club.director)
            //     setFechaAfiliacion(formatearFecha(club.fechaAfiliacion))
            //     setTelefono(club.telefono)
            //     setCorreo(club.correo)
            //     setIdParroquia(club.idParroquia)
            //     setDireccion(club.direccion)
            //     setIdPais(club.idPais)
            //     setIdProvincia(club.idProvincia)
            //     setIdCanton(club.idCanton)
            // }, [club])
            useEffect(() => {
                
                try {
                    dispatch(startLoadingCantones({idProvincia}))
                } catch (error) {
                    console.log(error);
                }
            
            }, [idProvincia])
            useEffect(() => {
                dispatch(startLoadingParroquias({idCanton}))
            
            }, [idCanton])
            
            
            
             console.log(club, director, fechaAfiliacion, telefono, password, correo,  idParroquia, direccion);
            const regresar = (e) => {
                e.preventDefault()
                Swal.fire({
                    title: "¿Estas seguro de regresar?",
                    //text: "You won't be able to revert this!",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Ok",
                    cancelButtonColor: "#d33",
                    cancelButtonText: "Cancelar!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Ha regresado a Clubes",
                            //text: "Your file has been deleted.",
                            icon: "success"
                        });
        
                        navigate('/asosystem/api/clubes')
        
                    }
                });
        
            }
            const handleSubmit = async e => {
                e.preventDefault();
        
        
                if ([club, director, fechaAfiliacion, telefono, password, correo,  idParroquia, direccion].includes('')) {
                    Swal.fire({
                        title: "Todos los campos son obligatorios",
                        //text: "That thing is still around?",
                        icon: "warning"
                    });
                    return;
                }
                
                
                try {
        
                   dispatch(startCrateClubes({club, director, fechaAfiliacion, telefono, password, correo,  idParroquia, direccion}))
                   navigate('/asosystem/api/clubes') 
                } catch (error) {
                    console.log(error);
                    // setAlerta({
                    //     msg: error.response.data.msg,
                    //     error: true
                    // })
        
                }
        
            }
        
        
        
            return (
                <>
        
                    <div className="flex md:flex-row flex-col">
                        <Barra />
        
                        <div className=' overflow-y-auto h-screen shadow-2xl mx-auto'>
        
                            <div className='rounded-xl bg-white '>
                                <h1 className='text-sky-600 font-black md:text-3xl text-2xl px-10 mt-10'>
                                    <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                        sports_gymnastics
                                    </span>Registrar datos del Club  </h1>
        
        
                                <form
                                    onSubmit={handleSubmit}
                                    className=' shadow rounded-lg md:p-2 p-10 m-10'>
        
                                    
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='club'>Club*</label>
                                        <input
                                            type='text'
                                            id='club'
                                            placeholder='Ingresa nombre del Club'
                                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                            value={club}
                                            onChange={e => setClub(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='director'>Director*</label>
                                        <input
                                            type='text'
                                            id='director'
                                            placeholder='Ingresa tu Apellido Materno'
                                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                            value={director}
                                            onChange={e => setDirector(e.target.value)}
                                        />
                                    </div>
                                    
                                    <div className='my-5'>
                                        <label className=' text-gray-600  text-xl font-bold' htmlFor='fechaAfiliacion'>Fecha deAfiliación*</label>
                                        <input
                                            type='date'
                                            id='fechaAfiliacion'
                                            className=' w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                            max={formatearFecha(fechaActual)}
                                            value={fechaAfiliacion}
                                            onChange={e => setFechaAfiliacion(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='telefono'>Teléfono*</label>
                                        <input
                                            type='number'
                                            id='telefono'
                                            placeholder='Ingresa tu Celular'
                                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                            value={telefono}
                                            onChange={e => setTelefono(e.target.value)}
                                        />
                                    </div>
                                    
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idPais'>País*</label>
                                        <select id="idPais" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={idPais}
                                            onChange={(e) => setIdPais(e.target.value)}
                                        >
                                            
                                            
                                            <option value="" >--Seleccione--</option>
                                             {
                                                paises.map( pais => (
                                                <option key={pais.idPais} value={pais.idPais}>{pais.pais}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idProvincia'>Provincia*</label>
                                        <select id="idProvincia" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={idProvincia}
                                            onChange={(e) => setIdProvincia(e.target.value)}
                                        >
                                            
                                            
                                            <option value="" >--Seleccione--</option>
                                             {
                                                provincias.map( provincia => (
                                                <option key={provincia.idProvincia} value={provincia.idProvincia}>{provincia.provincia}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idCanton'>Canton*</label>
                                        <select id="idCanton" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={idCanton}
                                            onChange={(e) => setIdCanton(e.target.value)}
                                        >
                                            
                                            
                                            <option value="" >--Seleccione--</option>
                                             {
                                                cantones.map( canton => (
                                                <option key={canton.idCanton} value={canton.idCanton}>{canton.canton}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idParroquia'>Parroquia*</label>
                                        <select id="idParroquia" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={idParroquia}
                                            onChange={(e) => setIdParroquia(e.target.value)}
                                        >
                                            <option value="" >--Seleccione--</option>
                                             
                                            {
                                                parroquias.map( parroquia => (
                                                <option key={parroquia.idParroquia} value={parroquia.idParroquia}>{parroquia.parroquia}</option>
                                                ))
                                            }
                                            
    
                                        </select>
                                    </div>
                                    
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección*</label>
                                        <input
                                            type='text'
                                            id='direccion'
                                            placeholder='Ingresa tu Dirección'
                                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                            value={direccion}
                                            onChange={e => setDireccion(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='correo'>Email*</label>
                                        <input
                                            type='email'
                                            id='correo'
                                            placeholder='Email de Registro'
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                            value={correo}
                                            onChange={e => setCorreo(e.target.value)}
                                        />
                                    </div>

                                    <div className='my-5'>
                            <label className='capitalize text-gray-600 block text-xl font-bold' htmlFor='password'>
                              
                                Contraseña*</label>
                            <div className='flex items-center '>
                                <input

                                    type={vista ? 'text' : 'password'}
                                    id='password'
                                    placeholder='Password de Registro'
                                    className='w-full mt-3 mr-1 p-3 border rounded-xl bg-gray-50'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <span
                                    className='text-2xl bg-gray-50 rounded-md p-2 flex items-center justify-center mt-3'
                                    onClick={() => setVista(!vista)}>
                                        <span className="material-symbols-outlined">
                                            {vista ? 'visibility' : 'visibility_off'}
                                        </span>
                                    
                                </span>
                            </div>
                        </div>
                                    
                                    <div className="flex md:flex-row-reverse flex-col  justify-evenly">
                                            
                                            <button
                                                className='bg-sky-600  text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-sky-700 transition-colors p-3 w-full'
                                            >
                                                <span className="material-symbols-outlined align-middle mr-2">
                                                    save
                                                </span>
                                                Guardar
            
                                            </button>
                                            <button
                                                className='bg-red-400   text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3  md:mt-0 mt-6 w-full md:mr-10'
                                                onClick={regresar}
                                            >
                                                <span className="material-symbols-outlined align-middle mr-2">
                                                    cancel
                                                </span>
                                                Regresar
            
                                            </button>
                                        </div>
        
                                </form>
        
                            </div>
        
                        </div>
                    </div>
                </>
            )
        }
        
        
        
         
    


export default CrearClub