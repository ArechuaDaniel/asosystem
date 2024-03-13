import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink} from "react-router-dom";
import { useEffect, useState } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import Swal from "sweetalert2";
import { deleteInstructor} from "../store/instructor/thunks";
import { deleteClub, startLoadingClubes } from "../store/asociacion/thunks";



const MostrarClubes = () => {
    
            const dispatch = useDispatch();
            const { instructores } = useSelector(state => state.instructor);
            const { clubes } = useSelector(state => state.asociacion);
            
            const [search, setSearch] = useState("")
            let numero = 0;
        
            const searcher = (e) => {
                setSearch(e.target.value)
            }
            
            let results = []
            if (!search) {
                results = clubes
                //console.log(results); 
            }
            else {
                results = clubes.filter((dato) => dato.director.toLowerCase().includes(search.toLocaleLowerCase())  || dato.fechaAfiliacion.toLowerCase().includes(search.toLocaleLowerCase()) || dato.telefono.toLowerCase().includes(search.toLocaleLowerCase()) || dato.direccion.toLowerCase().includes(search.toLocaleLowerCase()) || dato.club.toLowerCase().includes(search.toLocaleLowerCase()))
            }
        
            useEffect(() => {
                dispatch(startLoadingClubes())
            }, [])
            const eliminar = (idClub) => {
                //console.log(idHorario);
                Swal.fire({
                    title: "¿Estas seguro de eliminar el Club?",
                    //text: "You won't be able to revert this!",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Eliminar",
                    cancelButtonColor: "#d33",
                    cancelButtonText: "Cancelar!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Ha eliminado el Club!",
                            //text: "Your file has been deleted.",
                            icon: "success"
                            
                        });
        
                        dispatch(deleteClub({idClub}))
                        
                    }
                });
                
            }
        
            return (
                <>
                    
                    <div className="flex md:flex-row flex-col">
                        <Barra />
        
                        <div className=' overflow-auto h-screen w-screen shadow-2xl md:w-4/5 '>
                            <div className="flex justify-around items-center m-10 ">
                                <h1 className='text-sky-600 font-black md:text-3xl text-2xl'>
                                <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                    groups 
                                    </span>
                                    Datos  de los Clubes </h1>
                                <NavLink
                                    className=''
                                    to={'/asosystem/api/crear-club'}>
        
                                    <button className='bg-sky-600 hover:bg-sky-700 p-3 text-white rounded-xl font-bold flex justify-center items-center capitalize'>
                                        <span className="material-symbols-outlined align-middle mr-2">
                                            add_circle
                                        </span>
                                        Registrar Club
                                    </button>
                                </NavLink>
        
                            </div>
        
        
        
                            {/* BUSCAR ALUMNOS */}
                            <div className="flex md:flex-row flex-col-reverse items-center justify-evenly  shadow-md">
                                <div className="bg-gray-200 rounded-xl p-3  md:w-1/3 w-full flex justify-between ">
                                    
                                    <input className=" bg-gray-200  uppercase w-full "
                                        //value={search}
                                        onChange={searcher}
                                        type="text"
                                        id="search"
                                        placeholder="Buscar"
                                    />    
                                    <span className="material-symbols-outlined align-middle">search</span>
                                </div>
        
                                <div className="flex md:justify-end justify-center p-3">
                                    <div className="bg-gray-100 rounded-lg shadow-2xl w-48 ml-10 p-3 capitalize">
                                        <h3>Total Clubes : <span  className="font-bold">{clubes.length}</span></h3>
                                    </div>
                                </div>
                            </div>
        
        
                            {/* ALUMNOS */}
                            <div className='flex justify-center m-5 shadow-2xl'>
        
                                <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4 ">
                                    <thead className='bg-sky-600 text-white rounded-2xl'>
                                        <tr>
                                            <th className=' w-16 text-center p-3'>#</th>
                                            <th className=' w-48 text-left p-3'>Club</th>
                                            <th className=' w-48 text-left p-3' >Director</th>
                                            <th className=' w-48 text-left p-3' >Fecha de Afiliación</th>
                                            <th className=' w-32 text-left p-3' >Teléfono</th>
                                            <th className=' w-32 text-left p-3'>Dirección</th>
                                            <th className=' w-32 text-left p-3'>Acción</th>
        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            results.map(club => (
                                                <tr key={club.idClub} className="bg-gray-200 rounded-xl text-black p-2 m-2 hover:bg-gray-400">
                                                    <td className=' text-center p-3 '> {numero = numero + 1}</td>
                                                    <td className=' text-left p-3 '>{club.club} </td>
                                                    <td className=' text-left p-3 capitalize'>{club.director}</td>
                                                    <td className='  text-left p-3'>{formatearFecha(club.fechaAfiliacion)}</td>
                                                    <td className='  text-left p-3 capitalize'>{club.telefono}</td>
                                                    <td className='  text-left p-3 capitalize'>{club.direccion}</td>
        
                                                    <td className='  text-left p-3 flex'><Link to={`/asosystem/api/ver-club/${club.idClub}`}
                                                        className="bg-sky-600 p-2 rounded-xl text-white uppercase font-bold hover:bg-sky-700 text-center mr-2 "><span className="material-symbols-outlined text-center align-middle ">
                                                            preview
                                                        </span></Link>
                                                        
                                                        <Link 
                                                            
                                                            className='bg-red-500 p-2 rounded-xl text-white uppercase font-bold hover:bg-red-600 text-center'
                                                            onClick={() => eliminar(club.idClub)}
                                                            >
                                                            <span className="material-symbols-outlined align-middle">
                                                                delete
                                                            </span>
                                                            </Link>
                                                    </td>
                                                </tr> 
                                            ))
                                        }
        
                                    </tbody>
                                </table>
                            </div>
                        </div> 
                    </div>
                </>
            )
        }
        
         
    
    

export default MostrarClubes