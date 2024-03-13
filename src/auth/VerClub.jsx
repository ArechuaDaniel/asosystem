
import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import Swal from "sweetalert2";
import { startCrateClubes, startLoadingCantones, startLoadingClub, startLoadingClubes, startLoadingPaises, startLoadingParroquias, startLoadingProvincias } from "../store/asociacion/thunks";
const VerClub = () => {
    
    

        
                // const [vista, setVista] = useState('')
                // const [password, setPassword] = useState('');
                // const [club, setClub] = useState('');
                // const [director, setDirector] = useState('');
                // const [fechaAfiliacion, setFechaAfiliacion] = useState('');
                // const [telefono, setTelefono] = useState('');
                // const [correo, setCorreo] = useState('');
                // const [direccion, setDireccion] = useState('');
                // const [idParroquia, setIdParroquia] = useState('');
                // const [idPais, setIdPais] = useState('');
                // const [idProvincia, setIdProvincia] = useState('')
                // const [idCanton, setIdCanton] = useState('');
            
                const dispatch = useDispatch();
                const {club} = useSelector(state => state.asociacion)
                const params = useParams()
                const idClub = params.id
                const navigate = useNavigate();
                
            
               
       
                useEffect(() => {
                    
                    dispatch(startLoadingClub({idClub}))

                    
                }, [])
                useEffect(() => {
                  
                    
                }, [club])
                

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
                
            
            
                return (
                    <>
            
                        <div className="flex md:flex-row flex-col">
                            <Barra />
            
                            <div className=' overflow-y-auto h-screen shadow-2xl mx-auto'>
            
                                <div className='rounded-xl bg-white '>
                                    <h1 className='text-sky-600 font-black md:text-3xl text-2xl px-10 mt-10'>
                                        <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                        sports_gymnastics
                                        </span>Datos del Club  </h1>
            
            
                                    <form
                                       
                                        className=' shadow rounded-lg md:p-2 p-10 m-10'>
            
                                        
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='club'>Club*</label>
                                            <input
                                                type='text'
                                                id='club'
                                                placeholder='Ingresa nombre del Club'
                                                className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={club.club}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='director'>Director*</label>
                                            <input
                                                type='text'
                                                id='director'
                                                placeholder='Ingresa tu Apellido Materno'
                                                className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={club.director}
                                                
                                            />
                                        </div>
                                        
                                        <div className='my-5'>
                                            <label className=' text-gray-600  text-xl font-bold' htmlFor='fechaAfiliacion'>Fecha deAfiliación*</label>
                                            <input
                                                type='text'
                                                id='fechaAfiliacion'
                                                className=' w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={formatearFecha(club.fechaAfiliacion)}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='telefono'>Teléfono*</label>
                                            <input
                                                type='number'
                                                id='telefono'
                                                placeholder='Ingresa tu Celular'
                                                className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={club.telefono}
                                                
                                            />
                                        </div>
                                        
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idPais'>País*</label>
                                            <input
                                                type='text'
                                                className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={club.pais}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idProvincia'>Provincia*</label>
                                            <input
                                                type='text'
                                                className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={club.provincia}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idCanton'>Canton*</label>
                                            <input
                                                type='text'
                                                className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={club.canton}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idParroquia'>Parroquia*</label>
                                            <input
                                                type='text'
                                                className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={club.parroquia}
                                                
                                            />
                                        </div>
                                        
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección*</label>
                                            <input
                                                type='text'
                                                id='direccion'
                                                placeholder='Ingresa tu Dirección'
                                                className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={club.direccion}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='correo'>Email*</label>
                                            <input
                                                type='email'
                                                id='correo'
                                                placeholder='Email de Registro'
                                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                                value={club.correo}
                                                
                                            />
                                        </div>
    
                                        
                                        
                                        <div className="flex md:flex-row-reverse flex-col  justify-evenly">
                                                
                                                
                                                <button
                                                    className='bg-red-400   text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3  md:mt-0 mt-6 w-full md:mr-10'
                                                    onClick={regresar}
                                                >
                                                    <span className="material-symbols-outlined align-middle mr-2">
                                                        arrow_back
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
            
            
            
             
        
    
    


export default VerClub