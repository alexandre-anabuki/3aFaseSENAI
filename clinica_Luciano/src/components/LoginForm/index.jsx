import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

import Modal from '../Modal';
import RegisterUser from '../RegisterUser';
import { useAuth } from '../../context/AuthContext'; // <-- import

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { login,user } = useAuth(); // <-- pega função do contexto

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: { email, password },
      });

      console.log("resposta", response)
      if (response.data.length === 0) {
        toast.error('Usuário não encontrado. Verifique o e-mail e senha.', {
          autoClose: 2000,
          hideProgressBar: true,
        });
        return;
      }

      login(email); // <-- atualiza contexto
      toast.success('Login realizado com sucesso!', { autoClose: 2000 });

      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (error) {
      console.error('Erro ao verificar o usuário:', error);
      toast.error('Erro ao conectar com o servidor.', { autoClose: 2000 });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-700 text-white p-2 rounded-lg hover:bg-cyan-800 transition-colors"
        >
          Entrar
        </button>
      </form>

      <div className="flex justify-between mt-4 text-sm">
        <button onClick={() => toast.info('Funcionalidade em desenvolvimento')} className="text-blue-600 hover:underline">
          Esqueceu sua senha?
        </button>
        <button onClick={() => setIsModalOpen(true)} className="text-blue-600 hover:underline">
          Criar Conta
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegisterUser />
      </Modal>
    </div>
  );
};

export default LoginForm;
