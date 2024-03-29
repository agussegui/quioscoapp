import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const ResumenProducto = ({producto}) => {
    const {handleEditarCantidades, handleEliminarProducto} = useQuiosco(producto) 

  return (
    <div className='shadow p-5 mb-3 flex gap-10 items-center'>
        <div className='md:w-1/6'>
            <Image
                width={300}
                height={400}
                alt={`Imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>

        <div className='md:w-4/6'>
            <p className="text-3xl font-bold">{producto.nombre}</p>
            <p className="text-2xl font-bold mt-2">Precio: {producto.cantidad}</p>
            <p className="text-xl font-bold text-amber-500 mt-2">Precio: {formatearDinero(producto.precio)}</p>
            <p className="text-md font-bold text-gray-900 mt-2">SubTotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
        </div>

        <div>
            <button
                type="button"
                className="bg-sky-700 flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full "
                onClick={() => handleEditarCantidades(producto.id)}
            >
                Editar
            </button>

            <button
                type="button"
                className="bg-red-700 flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full mt-3"
                onClick={() => handleEliminarProducto(producto.id)}
            >

                Eliminar
            </button>
        </div>
    </div>
  )
}

export default ResumenProducto