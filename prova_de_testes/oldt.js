// // Código síncrono
// console.log("Primeiro");
// console.log("Segundo");
// // Código assíncrono
// console.log("Primeiro");
// setTimeout(() => {  console.log("Terceiro (depois de 2s)");}, 2000);
// console.log("Segundo");

// Exemplo de Promise simulando tempo de espera
// function esperarTempo(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // simular uma operação assincrona
//       resolve(`Esperou ${ms}ms`);
//       // Para simular erro:
//       reject(new Error("Falhou"));
//     }, ms);
//   });
// }
// esperarTempo(2000)
//   .then((thiago) => console.log(thiago))
//   .catch((thiago) => console.error(thiago))
//   .finally(() => console.log("Finalizado"));
// console.log("teste");

// async function buscarDados() {
//     const resposta = await fetch("api/dados");
//     const dados = await resposta.json();
//     console.log(dados);
//     return dados;
// }
// buscarDados().then((dados)=> console.log(dados)).catch((erro)=>console.log(erro))
