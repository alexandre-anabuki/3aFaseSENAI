import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import jsPDF from "jspdf";
//import html2canvas from "html2canvas";
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf'


const PatientDetails = () => {
    const { id } = useParams()
    const [patient, setPatient] = useState({})
    const [consults, setConsults] = useState([])
    const [exams, setExams] = useState([])
    const [editingConsult, setEditingConsult] = useState(null)
    const [editConsultData, setEditConsultData] = useState({
        reason: '',
        date: '',
        time: '',
        description: '',
        medication: '',
        dosagePrecautions: '',
    })
    const [isEditingConsult, setIsEditingConsult] = useState(false)
    const [editingExam, setEditingExam] = useState(null)
    const [editExamData, setEditExamData] = useState({
        name: '',
        date: '',
        time: '',
        type: '',
        laboratory: '',
        documentUrl: '',
        results: '',
    })
    const [isEditingExam, setIsEditingExam] = useState(false)
    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const patientRes = await
                    axios.get(`http://localhost:3000/patients/${id}`)
                const consultsRes = await
                    axios.get(`http://localhost:3000/consults?patientId=${id}`)
                const examsRes = await
                    axios.get(`http://localhost:3000/exams?patientId=${id}`)
                setPatient(patientRes.data)
                setConsults(consultsRes.data)
                setExams(examsRes.data)
            } catch (error) {
                console.error('Erro ao obter os detalhes do paciente:',
                    error)
            }
        }
        fetchPatientDetails()
    }, [id])
    const handleEditConsult = (consult) => {
        setEditingConsult(consult)
        setEditConsultData({
            reason: consult.reason,
            date: consult.date,
            time: consult.time,
            description: consult.description,
            medication: consult.medication,
            dosagePrecautions: consult.dosagePrecautions,
        })
        setIsEditingConsult(true)
    }
    const handleUpdateConsult = async (e) => {
        e.preventDefault()
        try {
            if (!editingConsult) return
            const updatedConsult = {
                ...editingConsult,
                ...editConsultData,
            }
            await
                axios.put(`http://localhost:3000/consults/${editingConsult.id}`,
                    updatedConsult)
            setConsults((prev) =>
                prev.map((c) => (c.id === editingConsult.id ? updatedConsult
                    : c))
            )
            toast.success('Consulta atualizada com sucesso!')
            setIsEditingConsult(false)
            setEditingConsult(null)
        } catch {
            toast.error('Erro ao atualizar a consulta!')
        }
    }
    const handleDeleteConsult = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/consults/${id}`)
            setConsults((prev) => prev.filter((c) => c.id !== id))
            toast.success('Consulta excluída com sucesso!')
        } catch {
            toast.error('Erro ao excluir consulta!')
        }
    }
    const handleEditExam = (exam) => {
        setEditingExam(exam)
        setEditExamData({
            name: exam.name,
            date: exam.date,
            time: exam.time,
            type: exam.type,
            laboratory: exam.laboratory,
            documentUrl: exam.documentUrl,
            results: exam.results,
        })
        setIsEditingExam(true)
    }
    const handleUpdateExam = async (e) => {
        e.preventDefault()
        try {
            if (!editingExam) return
            const updatedExam = {
                ...editingExam,
                ...editExamData,
            }
            await
                axios.put(`http://localhost:3000/exams/${editingExam.id}`,
                    updatedExam)
            setExams((prev) =>
                prev.map((exam) => (exam.id === editingExam.id ? updatedExam
                    : exam))
            )
            toast.success('Exame atualizado com sucesso!')
            setIsEditingExam(false)
            setEditingExam(null)
        } catch {
            toast.error('Erro ao atualizar o exame!')
        }
    }
    const handleDeleteExam = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/exams/${id}`)
            setExams((prev) => prev.filter((e) => e.id !== id))
            toast.success('Exame excluído com sucesso!')
        } catch {
            toast.error('Erro ao excluir o exame!')
        }
    }

    // const generateExamsPDF = async () => {
    //     const element = document.getElementById("exams-section");
    
    //     if (!element) return;
    
    //     const canvas = await html2canvas(element, { scale: 2 });
    //     const imgData = canvas.toDataURL("image/png");
    
    //     const pdf = new jsPDF("p", "mm", "a4");
    //     const imgWidth = 210;
    //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    //     pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    //     pdf.save(`exames_${patient.fullName}.pdf`);
    // };
    
    
    const generateExamsPDF = () => {
    const element = document.getElementById("exams-section");
  
    htmlToImage.toPng(element)
      .then(imgData => {
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        pdf.save("exames.pdf");
      });
  }

    if (!patient) return <p>Carregando...</p>
    return (
        <section className="p-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border
            border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800
                mb-2">{patient.fullName}</h2>
                <p><span className="font-semibold">Convênio:</span>
                    {patient.healthInsurance}</p>
                <p><span className="font-semibold">Alergias:</span>
                    {patient.allergies}</p>
            </div>
            {/* Consultas */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border
            border-gray-100">
                <h3 className="text-xl font-semibold text-gray-700
                mb-4">Histórico de Consultas</h3>
                {isEditingConsult ? (
                    <form onSubmit={handleUpdateConsult}
                        className="space-y-4">
                        {Object.keys(editConsultData).map((key) => (
                            <div key={key}>
                                <label className="block text-sm font-medium
                                text-gray-700 capitalize mb-1">
                                    {key === 'dosagePrecautions'
                                        ? 'Dosagem e Precauções'
                                        : key.charAt(0).toUpperCase() + key.slice(1)}
                                </label>
                                <input
                                    type={key.includes('date') ? 'date' :
                                        key.includes('time') ? 'time' : 'text'}
                                    value={editConsultData[key]}
                                    onChange={(e) =>
                                        setEditConsultData({
                                            ...editConsultData, [key]:
                                                e.target.value
                                        })
                                    }
                                    className="w-full border rounded-lg px-3 py-2
                                    text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                            </div>
                        ))}
                        <div className="flex gap-3 pt-2">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white
                                px-4 py-2 rounded-lg transition"
                            >
                                Salvar
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsEditingConsult(false)}
                                className="bg-gray-300 hover:bg-gray-400
                                text-gray-800 px-4 py-2 rounded-lg transition"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                ) : consults.length === 0 ? (
                    <p className="text-gray-500">Nenhuma consulta
                        encontrada.</p>
                ) : (
                    consults.map((c) => (
                        <div
                            key={c.id}
                            className="border rounded-xl p-4 mb-4 bg-gray-50
                            hover:bg-gray-100 transition"
                        >
                            <p><strong>Consulta:</strong> {c.reason}</p>
                            <p><strong>Data:</strong> {c.date} - {c.time}</p>
                            <p><strong>Descrição:</strong> {c.description}</p>
                            <p><strong>Medicação:</strong> {c.medication}</p>
                            <p><strong>Dosagem e Precauções:</strong>
                                {c.dosagePrecautions}</p>
                            <div className="flex gap-3 mt-3">
                                <button
                                    onClick={() => handleEditConsult(c)}
                                    className="bg-blue-500 hover:bg-blue-600
                                    text-white px-3 py-1 rounded-md text-sm"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDeleteConsult(c.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white
                                    px-3 py-1 rounded-md text-sm"
                                >
                                    Deletar
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {/* Exames */}
            <div id='exams-section' className="bg-white rounded-2xl shadow-md p-6 border
            border-gray-100">
                <h3 className="text-xl font-semibold text-gray-700
                mb-4">Histórico de Exames</h3>
                {isEditingExam ? (
                    <form onSubmit={handleUpdateExam} className="space-y-4">
                        {Object.keys(editExamData).map((key) => (
                            <div key={key}>
                                <label className="block text-sm font-medium
                                text-gray-700 capitalize mb-1">
                                    {key === 'documentUrl'
                                        ? 'URL do Documento'
                                        : key.charAt(0).toUpperCase() + key.slice(1)}
                                </label>
                                {key === 'results' ? (
                                    <textarea
                                        value={editExamData[key]}
                                        onChange={(e) =>
                                            setEditExamData({
                                                ...editExamData, [key]:
                                                    e.target.value
                                            })
                                        }
                                        className="w-full border rounded-lg px-3 py-2
                                        text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        rows="3"
                                        required
                                    />
                                ) : (
                                    <input
                                        type={key.includes('date') ? 'date' :
                                            key.includes('time') ? 'time' : 'text'}
                                        value={editExamData[key]}
                                        onChange={(e) =>
                                            setEditExamData({
                                                ...editExamData, [key]:
                                                    e.target.value
                                            })
                                        }
                                        className="w-full border rounded-lg px-3 py-2
                                        text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        required={key !== 'documentUrl'}
                                    />
                                )}
                            </div>
                        ))}
                        <div className="flex gap-3 pt-2">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white
                                px-4 py-2 rounded-lg transition"
                            >
                                Salvar
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsEditingExam(false)}
                                className="bg-gray-300 hover:bg-gray-400
                                text-gray-800 px-4 py-2 rounded-lg transition"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                ) : exams.length === 0 ? (
                    <p className="text-gray-500">Nenhum exame encontrado.</p>
                ) : (
                    exams.map((exam) => (
                        <div
                            key={exam.id}
                            className="border rounded-xl p-4 mb-4 bg-gray-50
                            hover:bg-gray-100 transition"
                        >
                            <p><strong>Exame:</strong> {exam.name}</p>
                            <p><strong>Data:</strong> {exam.date} -
                                {exam.time}</p>
                            <p><strong>Tipo:</strong> {exam.type}</p>
                            <p><strong>Laboratório:</strong> {exam.laboratory}</p>
                            <p><strong>Documento:</strong> {exam.documentUrl}</p>
                            <p><strong>Resultados:</strong> {exam.results}</p>
                            <div className="flex gap-3 mt-3">
                                <button
                                    onClick={() => handleEditExam(exam)}
                                    className="bg-blue-500 hover:bg-blue-600
                                    text-white px-3 py-1 rounded-md text-sm"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDeleteExam(exam.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white
                                    px-3 py-1 rounded-md text-sm"
                                >
                                    Deletar
                                </button>

                                <button
                                     onClick={generateExamsPDF}
                                     className="bg-red-500 hover:bg-red-600 text-white
                                    px-3 py-1 rounded-md text-sm"
                                    //className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md"
                                >
                                    Gerar PDF
                                </button>


                            </div>
                        </div>
                    ))
                )}
            </div>
            <ToastContainer position="top-right" autoClose={2000}
                hideProgressBar />
        </section>
    )
}
export default PatientDetails
