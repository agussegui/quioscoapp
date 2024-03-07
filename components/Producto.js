import Image from "next/image"
import {formatearDinero} from '../helpers/';
import useQuiosco from "../hooks/useQuiosco";


const Producto = ({producto}) => {
    const {handleSetProducto, handleChangeModal} = useQuiosco()
    const {nombre, imagen, precio} = producto

  return (
    <div className="border p-5 rounded-md shadow-2xl shadow-gray-500/40 ">
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`imagen platillo ${nombre}`}
            width={400}
            height={500}
        />   
        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatearDinero(precio)}           
            </p>

            <button
                type="button"
                className="bg-amber-500 hover:bg-amber-800 hover:transition-all text-white w-full mt-5 p-4 font-bold uppercase rounded-md"
                onClick={() => {
                    handleChangeModal();
                    handleSetProducto(producto);
                }}
            >
            Agregar</button>
        </div>
    </div>
  )
}

export default Producto