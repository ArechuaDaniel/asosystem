import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import { startLoadingAso } from "../store/asociacion/thunks";

const Perfil = () => {


    const dispatch = useDispatch();
    const {  asociacion } = useSelector(state => state.asociacion)

    useEffect(() => {

        

        dispatch(startLoadingAso())
    }, [])

    return (
        <>

            <div className="flex md:flex-row flex-col">
                <Barra />

                <div className=' shadow-2xl md:w-4/5 '>

                    <div className='rounded-xl bg-white '>
                        <h1 className='text-sky-600 font-black md:text-3xl text-2xl px-10 mt-10'>
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                            sports_gymnastics
                            </span>Datos generales de la Asociación o Federación
                        </h1>

                        {/* CUENTA */}
                        <div className='flex md:flex-row flex-col justify-center'>
                            {/* INFORMACIÓN */}
                            <div className='shadow-2xl bg-white p-10 md:w-1/3 m-10 '>
                                <div className='flex flex-col justify-center items-center'>

                                    <img className='h-40 w-40 rounded-3xl ' src="https://www.pichinchataekwondo.com/images/logo_login.png" alt="" />
                                    <p className='capitalize bg-sky-500 p-3 text-white font-bold my-4 rounded-2xl'>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        sports_gymnastics
                                    </span> {asociacion.asociacion}
                                    </p>
                                </div>
                                
                                <p className='mt-2'>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        pin_drop
                                    </span>
                                    {`${asociacion.pais}, ${asociacion.provincia}, ${asociacion.canton}`}
                                    
                                </p>
                                <p className=''>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        mail
                                    </span>
                                    {asociacion.correo}
                                </p>
                                <p className=''>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        phone_iphone
                                    </span>
                                    {asociacion.telefono}
                                </p>
                            </div>

                            {/* DETEALLE CUENTA */}
                            <div className=''>
                            {/* INFORMACIÓN     */}
                            <div className='shadow-2xl bg-white p-10  m-10  '>
                                <h2 className='flex justify-between font-bold'>Detalle de la cuenta
                                    <NavLink
                                        to={'/asosystem/api/editar-asociacion'}
                                    >

                                        <span className="material-symbols-outlined align-middle mr-2">
                                            edit_square
                                        </span>
                                    </NavLink>
                                </h2>
                                <div className='mt-4'>
                                    <p className='capitalize font-bold'>
                                        Director:
                                        <span className='font-normal'>
                                            {` ${asociacion.director} `}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Asociación:
                                        <span className='font-normal'>
                                            {` ${asociacion.asociacion}`}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Fecha Afiliación:
                                        <span className='font-normal'>
                                            {` ${formatearFecha(asociacion.fechaAfiliacion)}`}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Parroquia:
                                        <span className='font-normal'>
                                            {` ${asociacion.parroquia}`}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Dirección:
                                        <span className='font-normal'>
                                            {` ${asociacion.direccion}`}
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>

                            {/* CONTRASEÑA */}
                            <div className='shadow-2xl bg-white p-10  m-10  '>
                                <h2 className='flex justify-between font-bold'>Cambiar Contraseña
                                    <NavLink
                                        to={'/asosystem/api/cambiar-password'}
                                    >

                                        <span className="material-symbols-outlined align-middle mr-2">
                                            edit_square
                                        </span>
                                    </NavLink>
                                </h2>
                            </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Perfil
