import  useSwr from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import Orden from '../components/Orden'

export default function admin() {
    //Fetcher hace que se conecte a la API
    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const {data, error, isLoading } = useSwr('/api/ordenes', fetcher, {refreshInterval: 100})


    
    return (
        <AdminLayout pagina={'Admin'}>
            <h1 className='text-4xl font-black'>Panel de Administracion</h1>
            <p className='text-2xl my-10'>Administra tus Ordenes</p>

            {data && data.length ? data.map(orden =>
                <Orden
                    key={orden.id}
                    orden={orden}
                />
            ) :<p>No hay ordenes pendientes</p> }
        </AdminLayout>
    )
}