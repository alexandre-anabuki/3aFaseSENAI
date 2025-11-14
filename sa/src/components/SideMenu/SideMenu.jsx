import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  MdDashboard,
  MdExitToApp,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { FaUserPlus, FaListAlt, FaCalendarCheck } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const SideMenu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`h-screen bg-blue-500 text-white flex flex-col justify-between transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* TOPO - Botão de Toggle */}
      <div className="p-4 flex items-center justify-between border-b border-cyan-700">
        {!isCollapsed && (
          <h1 className="text-lg font-bold tracking-wide"><img src="public/toolbox-svgrepo-com.svg" alt="" /></h1>
        )}
        <button
          onClick={toggleMenu}
          className="text-white hover:text-cyan-300 focus:outline-none transition cursor-pointer"
        >
          {isCollapsed ? <MdMenu size={24} /> : <MdClose size={24} />}
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
        <ul className="space-y-3">
          <li>
            <Link
              to="/inventario"
              className="flex items-center gap-3  transition relative text-white hover:text-gray-200 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 text-base "
            >
              <MdDashboard size={20} />
              {!isCollapsed && <span>Início</span>}
            </Link>
          </li>

          <li>
            <Link
              to="/prontuarios"
              className="flex items-center gap-3  transition relative text-white hover:text-gray-200 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 text-base"
            >
              <FaListAlt size={18} />
              {!isCollapsed && <span>Prontuários</span>}
            </Link>
          </li>

          <li>
            <Link
              to="/pacientes"
              className="flex items-center gap-3  transition relative text-white hover:text-gray-200 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 text-base"
            >
              <FaUserPlus size={18} />
              {!isCollapsed && <span>Pacientes</span>}
            </Link>
          </li>

          <li>
            <Link
              to="/consultas"
              className="flex items-center gap-3  transition relative text-white hover:text-gray-200 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 text-base"
            >
              <FaCalendarCheck size={18} />
              {!isCollapsed && <span>Consultas</span>}
            </Link>
          </li>

          <li>
            <Link
              to="/exames"
              className="flex items-center gap-3  transition relative text-white hover:text-gray-200 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 text-base"
            >
              <FaListAlt size={18} />
              {!isCollapsed && <span>Exames</span>}
            </Link>
          </li>
        </ul>
      </nav>

      {/* BOTÃO SAIR */}
      <div className="p-4 border-t border-cyan-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 transition hover:text-red-500 w-full cursor-pointer"
        >
          <MdExitToApp size={20} />
          {!isCollapsed && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
};

export default SideMenu;
