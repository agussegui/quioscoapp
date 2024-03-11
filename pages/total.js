import { useEffect, useCallback } from 'react'; 
import Layout from '../layout/Layout';
import useQuiosco from '../hooks/useQuiosco';
import {formatearDinero} from '../helpers'

export default function Total() {

    const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco()

    //Esta funcion se ejecuta cuando el pedido cambie
    const comprobarPedido = useCallback(() => {
        return  pedido.length === 0 || nombre === '' || nombre.length < 3
    }, [pedido, nombre]);

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido])

    return(
        <Layout pagina='Total y Confirmar Pedido'>
            <h1 className='text-4xl font-black'>Total y Confirmar Pedido</h1>
            <p className='text-2xl my-10'>Confirma tu pedido a Continuación</p>

            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label 
                        className='block uppercase text-slate-800 font-bold text-xl'
                        htmlFor='nombre'
                    >Nombre
                    </label>
                    <input
                        id='nombre'
                        type='text'
                        className='bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='mt-10'>
                    <p className='max-sm:text-2xl text-4xl font-bold'>Total a Pagar: {''} <span className=' text-amber-500 font-bold max-sm:text-xl text-3xl shadow-xl bg-gray-200 rounded-md p-3'>{formatearDinero(total)}</span></p>
                </div>

                <div className='mt-8'>
                    <input 
                        type='submit'
                        className={`${comprobarPedido() ? 'bg-gray-200' : 'bg-gray-700 hover:bg-gray-900'} w-full lg:w-auto px-5 py-2 rounded-md uppercase font-bold text-white  text-center`}
                        value="Confirmar Pedido"
                        disabled={comprobarPedido()}
                    >
                    </input>
                </div>
            </form>
        </Layout>
    )
}