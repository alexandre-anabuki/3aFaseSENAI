import React from 'react'
import SideMenu from '../../components/SideMenu/SideMenu'

function Inventario() {
  return (
    <div className="flex h-screen">


    <SideMenu />
      {/* Conteúdo */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-100">

        <h2 className="text-xl font-semibold mb-4">Estatísticas do Sistema</h2>
        <div className="flex gap-6">
          
          
          
        </div>
        {/* Lista de pacientes logo abaixo dos contadores */}
        
      </div>
    </div>
  )
}

export default Inventario
