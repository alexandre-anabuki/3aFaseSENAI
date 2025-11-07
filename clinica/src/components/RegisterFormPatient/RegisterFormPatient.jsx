import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IMaskInput } from "react-imask";

const RegisterFormPatient = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    birthdate: "",
    cpf: "",
    rg: "",
    maritalStatus: "",
    phone: "",
    email: "",
    birthplace: "",
    emergencyContact: "",
    allergies: "",
    specialCare: "",
    healthInsurance: "",
    insuranceNumber: "",
    insuranceValidity: "",
    address: {
      cep: "",
      city: "",
      state: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      reference: "",
    },
  });

  const [isSaving, setIsSaving] = useState(false);

  // --- HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  };

  const fetchAddressData = async (cep) => {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          cep: data.cep || "",
          city: data.localidade || "",
          state: data.uf || "",
          street: data.logradouro || "",
          complement: data.complemento || "",
          neighborhood: data.bairro || "",
        },
      }));
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
    }
  };

  const handleCepBlur = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length === 8) fetchAddressData(cep);
  };

  // --- SUBMIT ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await axios.post("http://localhost:3000/patients", formData);

      toast.success("Paciente cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });

      setFormData({
        fullName: "",
        gender: "",
        birthdate: "",
        cpf: "",
        rg: "",
        maritalStatus: "",
        phone: "",
        email: "",
        birthplace: "",
        emergencyContact: "",
        allergies: "",
        specialCare: "",
        healthInsurance: "",
        insuranceNumber: "",
        insuranceValidity: "",
        address: {
          cep: "",
          city: "",
          state: "",
          street: "",
          number: "",
          complement: "",
          neighborhood: "",
          reference: "",
        },
      });
    } catch (error) {
      toast.error("Erro ao salvar os dados!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-gray-800"
      autoComplete="off"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Nome Completo */}
        <div>
          <label className="block text-sm font-medium mb-1">Nome Completo</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          />
        </div>

        {/* Gênero */}
        <div>
          <label className="block text-sm font-medium mb-1">Gênero</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          >
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        {/* Data de Nascimento */}
        <div>
          <label className="block text-sm font-medium mb-1">Data de Nascimento</label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          />
        </div>

        {/* CPF */}
        <div>
          <label className="block text-sm font-medium mb-1">CPF</label>
          <IMaskInput
            mask="000.000.000-00"
            name="cpf"
            value={formData.cpf}
            onAccept={(value) => setFormData((prev) => ({ ...prev, cpf: value }))}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
            required
          />
        </div>

        {/* RG */}
        <div>
          <label className="block text-sm font-medium mb-1">RG</label>
          <input
            type="text"
            name="rg"
            value={formData.rg}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        {/* Estado Civil */}
        <div>
          <label className="block text-sm font-medium mb-1">Estado Civil</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
            required
          >
            <option value="">Selecione</option>
            <option value="solteiro(a)">Solteiro(a)</option>
            <option value="casado(a)">Casado(a)</option>
            <option value="divorciado(a)">Divorciado(a)</option>
            <option value="viuvo(a)">Viúvo(a)</option>
          </select>
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-sm font-medium mb-1">Telefone</label>
          <IMaskInput
            mask="(00) 00000-0000"
            name="phone"
            value={formData.phone}
            onAccept={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          />
        </div>

        {/* Contato de Emergência */}
        <div>
          <label className="block text-sm font-medium mb-1">Contato de Emergência</label>
          <IMaskInput
            mask="(00) 00000-0000"
            name="emergencyContact"
            value={formData.emergencyContact}
            onAccept={(value) =>
              setFormData((prev) => ({ ...prev, emergencyContact: value }))
            }
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Naturalidade */}
        <div>
          <label className="block text-sm font-medium mb-1">Naturalidade</label>
          <input
            type="text"
            name="birthplace"
            value={formData.birthplace}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Alergias */}
        <div>
          <label className="block text-sm font-medium mb-1">Alergias</label>
          <input
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Cuidados Especiais */}
        <div>
          <label className="block text-sm font-medium mb-1">Cuidados Especiais</label>
          <input
            type="text"
            name="specialCare"
            value={formData.specialCare}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Convênio */}
        <div>
          <label className="block text-sm font-medium mb-1">Convênio</label>
          <input
            type="text"
            name="healthInsurance"
            value={formData.healthInsurance}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Número do Convênio */}
        <div>
          <label className="block text-sm font-medium mb-1">Número do Convênio</label>
          <input
            type="text"
            name="insuranceNumber"
            value={formData.insuranceNumber}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Validade do Convênio */}
        <div>
          <label className="block text-sm font-medium mb-1">Validade do Convênio</label>
          <input
            type="date"
            name="insuranceValidity"
            value={formData.insuranceValidity}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* CEP */}
        <div>
          <label className="block text-sm font-medium mb-1">CEP</label>
          <IMaskInput
            mask="00000-000"
            name="cep"
            value={formData.address.cep}
            onAccept={(value) => handleAddressChange({ target: { name: "cep", value } })}
            onBlur={handleCepBlur}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Rua */}
        <div>
          <label className="block text-sm font-medium mb-1">Rua</label>
          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleAddressChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Número */}
        <div>
          <label className="block text-sm font-medium mb-1">Número</label>
          <input
            type="text"
            name="number"
            value={formData.address.number}
            onChange={handleAddressChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Referência */}
        <div>
          <label className="block text-sm font-medium mb-1">Referência</label>
          <input
            type="text"
            name="reference"
            value={formData.address.reference}
            onChange={handleAddressChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Complemento */}
        <div>
          <label className="block text-sm font-medium mb-1">Complemento</label>
          <input
            type="text"
            name="complement"
            value={formData.address.complement}
            onChange={handleAddressChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Bairro */}
        <div>
          <label className="block text-sm font-medium mb-1">Bairro</label>
          <input
            type="text"
            name="neighborhood"
            value={formData.address.neighborhood}
            onChange={handleAddressChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Cidade */}
        <div>
          <label className="block text-sm font-medium mb-1">Cidade</label>
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleAddressChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Estado */}
        <div>
          <label className="block text-sm font-medium mb-1">Estado</label>
          <input
            type="text"
            name="state"
            value={formData.address.state}
            onChange={handleAddressChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        
      </div>

      {/* Botão de envio */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="submit"
          disabled={isSaving}
          className="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 disabled:opacity-50"
        >
          {isSaving ? "Salvando..." : "Salvar"}
        </button>
      </div>

      <ToastContainer />
    </form>
  );
};

export default RegisterFormPatient;
