import {useState, useEffect} from 'react'
import axios from 'axios'
import {FaCalendarDay} from 'react-icons/fa'

const ConsultasCounter = () => {
    const [consultaCount, setConsultaCount] = useState(0)

    const fetchConsultas = async() => {
        try{
            const response = await axios.get("http://localhost:3000/consultas")
            setConsultaCount(response.data.length)
        }catch (error){
            console.error("Erro ao obter os dados dos pacientes", error)
        }
    }

    useEffect(() => {
        fetchConsultas()
    }, [])

  return (
    <div className='bg-white shadow rounded-lg p-6 flex-col items-center w-60'>
        <h2 className='text-xl font-bold flex items-center gap-2'>
            <FaCalendarDay className='text-blue-600' />{consultaCount}
        </h2>

        <p className='text-gray-600 mt-2'>Consultas</p>
    </div>
  )
}

export default ConsultasCounter