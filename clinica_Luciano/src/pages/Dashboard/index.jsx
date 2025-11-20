
import PatientsCounter from "../../components/counters/PatientsCounter";
import ConsultsCounter from "../../components/counters/ConsultsCounter";
import ExamsCounter from "../../components/counters/ExamsCounter";
import PatientsList from "../../components/PatientsList/PatientsList";

const Dashboard = () => {

  return (
    <div className="flex h-screen">


      {/* Conteúdo */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-100">


        <h2 className="text-xl font-semibold mb-4">Estatísticas do Sistema</h2>
        <div className="flex gap-6">
          <PatientsCounter />
          <ConsultsCounter />
          <ExamsCounter />
        </div>
        {/* Lista de pacientes logo abaixo dos contadores */}
        <PatientsList />
      </div>
    </div>
  );
};

export default Dashboard;
