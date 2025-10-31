import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

const MedicalRecordList = () => {
    const [patients, setPatients] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const fetchPatients = async () => {
        try{
            const response = await axios.get('http://localhost:3000/patients')
            setPatients(response.data)
        }
        catch(error){
            consosle.error("erro ao obter dados do paciente", error)
        }
    }

    useEffect(() =>{
        fetchPatients()
    }, [])

    const handleSearchChange = (event) =>{
        setSearchTerm(event.target.value)
    }

    const filteredPatients = patients.filter((patient) =>{
        return(
            patient.fullName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            patient.id.toString().includes(searchTerm)
        )
    })

    return(
        <section className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Listagem de Prontuários</h2>

            {/* campo de busca */}

            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <label htmlFor="search" className="text-gray-700 font-medium">Buscar Paciente:</label>

                <input type="text" id="search"  value={searchTerm} onChange={handleSearchChange} placeholder="Digite o nome ou identificador"
                className="w-full sm:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"/>
            </div>

            {/* Lista de pacientes */}

            <ul className="space-y-4">
                {
                    filteredPatients.length > 0 ? (
                        filteredPatients.map((patient) =>(
                            <li key={patient.id} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-sm text-gray-700">
                                    <strong className="text-gray-500">Registro:</strong> {patient.id}
                                </p>

                                <p className="text-sm text-gray-700">
                                    <strong className="text-gray-500">Nome:</strong> {patient.fullName}
                                </p>

                                <p className="text-sm text-gray-700">
                                    <strong className="text-gray-500">Convênio:</strong> {patient.healthInsurance}
                                </p>

                                <Link to={`/paciente/${patient.id}`} className="inline-block mt-2 text-cyan-700 font-semibold hover:underline">Ver Detalhes</Link>                                
                            </li>
                        ))
                    ):(
                        <p className="text-gray-600">Nenhum PacienteEncontrado</p>
                    )
                }

            </ul>
        </section>

    )
}

export default MedicalRecordList