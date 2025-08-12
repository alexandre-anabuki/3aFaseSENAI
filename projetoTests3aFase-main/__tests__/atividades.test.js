import { atividade } from "../src/atividades";

// describe("atividades", () => {
//     test("verifica indice", () => {
//         expect(atividade(3)).toBe(7)
//     })

//     test("verifica indice", () => {
//         expect(atividade(9)).toBe("Erro")
//     })

//     test("verifica indice", () => {
//         expect(atividade(0)).toBe(1)
//     })
// })

/*---modelo do professor---*/

describe("teste função buscar indice", () =>{
    const valores = [2,3,5,7]
    test("validar se no indice 0 o valor é 2", () =>{
        expect(atividade(valores, 0)).toBe(2)
    })

    test("validar se no indice 1 o valor é 3", () =>{
        expect(atividade(valores, 1)).toBe(3)
    })

    test("validar se no indice 2 o valor é 5", () =>{
        expect(atividade(valores, 2)).toBe(5)
    })

    test("validar se no indice 3 o valor é 7", () =>{
        expect(atividade(valores, 3)).toBe(7)
    })

    test("validar se no indice 0 o valor é 2", () =>{
        expect(atividade("valores", 3)).toBe("Erro")
    })

    test("validar se no indice 0 o valor é 2", () =>{
        expect(atividade(valores, -3)).toBe("Não existe indice negativo")
    })
})