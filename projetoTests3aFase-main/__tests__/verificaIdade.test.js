import { verificaIdade } from "../src/verificaIdade";

describe ("verificacao de idade", () => {

    test('verifica se e maior de idade', () => {
        expect(verificaIdade(18)).toBe("Maior")
    })

    test('verifica se e menor de idade', () => {
        expect(verificaIdade(16)).toBe("Menor")
    })

    test("testar erro com array", ()=>{
        expect(verificaIdade([])).toBe("Erro")
    })

    test("testar erro com objeto", ()=>{
        expect(verificaIdade({})).toBe("Erro")
    })

    test("testar erro com objeto", ()=>{
        expect(verificaIdade(null)).toBe("Erro")
    })

    test("testar erro com objeto", ()=>{
        expect(verificaIdade(undefined)).toBe("Erro")
    })

    test("testar erro com objeto", ()=>{
        expect(verificaIdade(-2)).toBe("Erro")
    })

})