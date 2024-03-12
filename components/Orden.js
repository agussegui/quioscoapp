import Image from "next/image"
import {formatearDinero} from "../helpers"
import {toast} from 'react-toastify'
import axios from "axios"

const Orden = ({orden}) => {
    const {id, nombre, total, pedido} = orden

    const completarOrden = async () => {
        try {
           await axios.post(`/api/ordenes/${id}`)
           toast.success( 'Orden Lista',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            toast.error( 'Hubo un error',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
  
    return (
        <div className="bg-[#fefaf3] shadow-xl shadow-gray-700/75 m-10 p-8 space-y-5">
            <h3 className='text-2xl font-bold'>Orden: {id}</h3  >
            <p className='text-lg font-bold'>Cliente: {nombre}</p>

            <div>
                {pedido.map(platillo => (
                    <div
                        key={platillo.id} 
                        className="py-3 lg:flex border-b last-of-type:border-0 items-center"
                    >
                        <div className="w-64 max-w-32">
                            <Image
                                width={400}
                                height={400}
                                src={`/assets/img/${platillo.imagen}.jpg`}
                                alt={`Imagen platillo: ${platillo.nombre}`}
                            />
                        </div>
                        <div className="p-5 space-y-2">
                            <h4 className="text-2xl font-bold text-amber-500">{platillo.nombre}</h4>
                            <p className="text-xl font-bold">Cantidad:{platillo.cantidad}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" xl:flex items-center md:justify-between my-10  ">
                <p className="mt-5 font-black text-4xl text-amber-500 max-sm:text-xl">
                    Total a Pagar: {formatearDinero(total)}
                </p>        

                <button
                    className="bg-gray-600 hover:bg-gray-800 text-lg text-white shadow-xl border:1px solid rounded-lg py-2 px-6 font-bold  uppercase my-4 max-md:w-full"
                    type="button"
                    onClick={completarOrden}
                >
                    Completar Orden
                </button>
            </div>
        </div>
    
        

    )
}

export default Orden