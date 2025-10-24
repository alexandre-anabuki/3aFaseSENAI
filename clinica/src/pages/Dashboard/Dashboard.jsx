import React from 'react'
import PatientsCounter from '../../components/Counters/PatientsCounter'
import ConsultasCounter from '../../components/Counters/ConsultasCounter'
import ExamesCounter from '../../components/Counters/ExamesCounter'

const Dashboard = () => {
  return (
    <>
      <h2 className='text-xl font-semibold mb-4'>Estatísticas do Sistema</h2>
      <div className='flex gap-6'>
        <PatientsCounter />
        <ConsultasCounter />
        <ExamesCounter />
      </div>
    </>
  )
}

export default Dashboard