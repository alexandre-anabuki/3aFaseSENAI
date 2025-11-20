import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "../../components/Modal";

const ExamsForm = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [examData, setExamData] = useState({
    name: "",
    date: "",
    time: "",
    type: "",
    laboratory: "",
    documentUrl: "",
    results: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Buscar pacientes ao carregar o componente
  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/patients");
      setPatients(response.data);
      setFilteredPatients(response.data);
    } catch (error) {
      console.error("Erro ao obter dados dos pacientes:", error);
    }
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = patients.filter(
      (patient) =>
        patient.fullName.toLowerCase().includes(searchTerm) ||
        patient.id.toString().includes(searchTerm)
    );
    setFilteredPatients(filtered);
  };

  const handleSelectModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPatient(null);
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExamData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setExamData({
      name: "",
      date: "",
      time: "",
      type: "",
      laboratory: "",
      documentUrl: "",
      results: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedPatient) return;

    try {
      setIsSaving(true);
      const examToAdd = {
        ...examData,
        patientId: selectedPatient.id,
      };

      await axios.post("http://localhost:3000/exams", examToAdd);
      toast.success("Exame cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });

      resetForm();
      handleCloseModal();
    } catch (error) {
      toast.error("Erro ao cadastrar o exame!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      console.error("Erro ao cadastrar exame:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="p-6 text-gray-800">
      {/* Campo de busca */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">
          Buscar paciente para cadastrar exame
        </label>
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Digite o nome ou registro do paciente"
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
        />
      </div>

      {/* Lista de pacientes */}
      <ul className="space-y-3">
        {filteredPatients.map((patient) => (
          <li
            key={patient.id}
            className="p-4 border rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-50 transition"
          >
            <div>
              <p className="text-sm">
                <strong>Registro:</strong> {patient.id}
              </p>
              <p className="text-sm">
                <strong>Nome:</strong> {patient.fullName}
              </p>
              <p className="text-sm">
                <strong>Convênio:</strong> {patient.healthInsurance}
              </p>
            </div>
            <button
              onClick={() => handleSelectModal(patient)}
              className="bg-cyan-700 text-white px-3 py-1.5 rounded-lg hover:bg-cyan-600 transition"
            >
              Selecionar
            </button>
          </li>
        ))}
      </ul>

      {/* Modal de cadastro de exame */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPatient && (
          <>
            <h2 className="text-lg font-bold mb-4 text-cyan-700">
              Cadastrar Exame para {selectedPatient.fullName}
            </h2>

            <div className="mb-4 text-sm text-gray-700">
              <p>
                <strong>Email:</strong> {selectedPatient.email}
              </p>
              <p>
                <strong>Telefone:</strong> {selectedPatient.phone}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nome do Exame
                </label>
                <input
                  type="text"
                  name="name"
                  value={examData.name}
                  onChange={handleInputChange}
                  required
                  minLength={5}
                  maxLength={50}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Data do Exame
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={examData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Horário
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={examData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Tipo do Exame
                </label>
                <input
                  type="text"
                  name="type"
                  value={examData.type}
                  onChange={handleInputChange}
                  required
                  minLength={5}
                  maxLength={30}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Laboratório
                </label>
                <input
                  type="text"
                  name="laboratory"
                  value={examData.laboratory}
                  onChange={handleInputChange}
                  required
                  minLength={5}
                  maxLength={30}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  URL do Documento
                </label>
                <input
                  type="text"
                  name="documentUrl"
                  value={examData.documentUrl}
                  onChange={handleInputChange}
                  placeholder="Ex: https://drive.google.com/..."
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Resultados do Exame
                </label>
                <textarea
                  name="results"
                  value={examData.results}
                  onChange={handleInputChange}
                  rows="3"
                  required
                  minLength={15}
                  maxLength={1000}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 disabled:opacity-50 transition"
                >
                  {isSaving ? "Salvando..." : "Salvar"}
                </button>
              </div>
            </form>
          </>
        )}
      </Modal>

      <ToastContainer />
    </section>
  );
};

export default ExamsForm;
