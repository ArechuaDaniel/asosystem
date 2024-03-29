import { Outlet, Navigate, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
import { startLogin } from "../store/auth/thunks"
import axios from "axios"



const RutaProtegida = () => {
  
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const autenticado = async () => {
      const token = localStorage.getItem('token')
      const correo = localStorage.getItem('email')
      const password = localStorage.getItem('sesion')

      try {
        dispatch(startLogin({ correo, password }))
        
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/asociacion/usuario-asociacion/login`, { correo, password })
        navigate('/asosystem/api/')
        


      } catch (error) {
        
        console.log(error);
      }
    }
    autenticado();

  }, [])

  //if (auth.status === 'checking') return <Spinner />

  return (
    <>
     
      {auth.idAsociacion ? <Outlet /> : <Navigate to="/asosystem/" />}
    </>
  )
}

export default RutaProtegida