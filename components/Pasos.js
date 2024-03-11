import {useRouter} from 'next/router'

const pasos = [
    {paso: 1, nombre: 'Menu', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'},
    
];
//Es preferible apoyarse en el servidor (next en este caso) para cuando pierdes alguna referencia del state
const Pasos = () => {

    const router = useRouter()
    
    const calcularProgreso = () => {
        let valor;
        if(router.pathname === '/'){
            valor = 2
        } else if(router.pathname === '/resumen'){
            valor= 50
        } else {
            valor = 100
        }
        return valor;
    }
  return (
    <>
        <div className="flex justify-between mb-7">
            {pasos.map(paso =>(
                <button 
                    onClick={() => {
                        router.push(paso.url)
                    }}
                    key={paso.paso}
                    className=" sm:text-3xl text-xl font-bold"
                >
                    {paso.nombre}
                </button>
            ))}
        </div>

        <div className='bg-gray-100 mb-10'>
            <div 
                className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white'
                style={{width: `${calcularProgreso()}%`}}
            >

            </div>
        </div>
    </>
  )
}

export default Pasos