import {useState} from 'react'
import {Link, useNavigate} from 'react-router'
import {MdDashboard, MdExitToApp, MdMenu, MdClose} from 'react-icons/md'
import {FaUserPlus, FaListAlt, FaCalendarCheck} from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'

const SideMenu = () => {
    const navigate = useNavigate()
    const {logout} = useAuth()

    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed)
    }

    return(
        <aside className={`h-screen bg-cyan-800 text-white flex flex-col justify-between transition-all duration-300 ${
            isCollapsed ? "w-20" : "w-64"
        }`} >

            {/* topo - botao de toggle */}
            <div className='p-4 flex items-center justify-between border-2 border-cyan-700'>
                {
                    !isCollapsed && (
                        <h1 className='text-lg font-bold'>Cliníca</h1>
                    )
                }
                <button onClick={toggleMenu} className='text-white hover:text-cyan-300 focus:outline-none'>
                    {isCollapsed ? <MdMenu size={24} /> : <MdClose size={24} />}
                </button>
            </div>

            {/* Menu */}
            <nav className='flex-1 p-4 space-y-4 overflow-y-auto'>
                <ul className='space-y-3'>
                    <li>
                        <Link to="/dashboard" className='flex items-center gap-3 hover:text-cyan-300'>
                            <MdDashboard size={20} />
                            {!isCollapsed && <span>Início</span>}
                        </Link>
                    </li>

                    <li>
                        {!isCollapsed &&
                            <h2 className='text-white py-4 font-bold text-lg'>Pacientes</h2>
                        }
                    </li>

                    <li>
                        <Link to="/prontuarios" className='flex items-center gap-3 hover:text-cyan-300'>
                            <FaListAlt size={20} />
                            {!isCollapsed && <span>Prontuarios</span>}
                        </Link>
                    </li>

                    <li>
                        <Link to="/pacientes" className='flex items-center gap-3 hover:text-cyan-300'>
                            <FaUserPlus size={20} />
                            {!isCollapsed && <span>Pacientes</span>}
                        </Link>
                    </li>

                    <li>
                        {!isCollapsed &&
                            <h2 className='text-white py-4 font-bold text-lg'>Consultas e Exames</h2>
                        }
                    </li>

                    <li>
                        <Link to="/consultas" className='flex items-center gap-3 hover:text-cyan-300'>
                            <FaCalendarCheck size={20} />
                            {!isCollapsed && <span>Consultas</span>}
                        </Link>
                    </li>

                    <li>
                        <Link to="/exames" className='flex items-center gap-3 hover:text-cyan-300'>
                            <FaListAlt size={20} />
                            {!isCollapsed && <span>Exames</span>}
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* botao sair */}
            <div className='p-4 border-t border-cyan-700'>
                <button onClick={handleLogout} className='flex items-center gap-3 text-red-300 hover:text-red-500 w-full'>
                    <MdExitToApp size={20} />
                    {!isCollapsed && <span>Sair</span>}
                </button>
            </div>

        </aside>
    )
}

export default SideMenu