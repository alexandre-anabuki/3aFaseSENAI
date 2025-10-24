import {useState, useEffect} from 'react'
import axios from 'axios'
import {FaAddressCard} from 'react-icons/fa'

const ExamesCounter = () => {
    const [exameCount, setExameCount] = useState(0)

    const fetchExames = async() => {
        try{
            const response = await axios.get("http://localhost:3000/exames")
            setExameCount(response.data.length)
        }catch (error){
            console.error("Erro ao obter os dados dos pacientes", error)
        }
    }
    
    useEffect(() => {
        fetchExames()
    }, [])

  return (
    <div className='bg-white shadow rounded-lg p-6 flex-col items-center w-60'>
        <h2 className='text-xl font-bold flex items-center gap-2'>
            <FaAddressCard className='text-blue-600' />{exameCount}
        </h2>

        <p className='text-gray-600 mt-2'>Exames</p>
    </div>
  )
}

export default ExamesCounter