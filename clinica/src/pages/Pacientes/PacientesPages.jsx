// import axios from "axios"
// import { useEffect, useState } from "react"

// export default function PacientesPage(){
//     const [pacientes, setPacientes] = useState([])

//     const getPacientes = async () => {
//         try {
//             const res = await axios.get('http://localhost:3000/pacientes', {
//                 headers:{
//                     'Authorization': `Bearer ${BEARER_TOKEN}`
//                 }
//             })
//         }
//         catch (error){

//         }
//     }

//     useEffect(() => {
//         getPacientes()
//     }, [])

//     return(
//         <div>
//             <table>
//                 <thead>
//                     <tr className=" flex gap-3">
//                         <td>id</td>
//                         <td>nome</td>
//                         <td>cpf</td>
//                         <td>telefone</td>
//                         <td>email</td>
//                         <td>data_nascimento</td>
//                         <td>sexo</td>
//                         <td>responsavel</td>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {
//                         pacientes.map((paciente)=> {
//                             <tr key={paciente.id}>
//                                 <td>id</td>
//                                 <td>nome</td>
//                                 <td>cpf</td>
//                                 <td>telefone</td>
//                                 <td>email</td>
//                                 <td>data_nascimento</td>
//                                 <td>sexo</td>
//                                 <td>responsavel</td>                              
//                             </tr>
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }