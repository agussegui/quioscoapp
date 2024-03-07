import {useState} from 'react'
import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from '../helpers'

const ModalProducto = () => {

    const {producto, handleChangeModal} = useQuiosco()
    const [cantidad, setCantidad] = useState(1);    

  return (
    <div className='md:flex gap-10'>
        <div className='md:w-1/3'>
            <Image 
                width={300}
                height={400}
                alt={`Imagen Producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>

        <div className='md:w-2/3'>
            <div className='flex justify-end'>
                <button 
                    
                    onClick={handleChangeModal}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-8 h-8 text-red-600"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                        />
                    </svg>
                </button>
            </div>
            <h1 className='text-3xl font-bold pt-5'>{producto.nombre}</h1>
            <p className='mt-5 font-black text-5xl text-amber-500'>{formatearDinero(producto.precio)}</p>
            <div className='pt-5 flex justify-between'>
                <button>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-8 h-8"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                        />
                    </svg>
                </button>
                <p>{cantidad }</p>
                <button>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-8 h-8"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ModalProducto