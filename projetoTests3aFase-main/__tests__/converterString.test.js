import { conversao } from "../src/converterString";

describe("converter string para numero", () =>{

    test('converter um numero com aspas', () => {
        expect(conversao("55")).toBe(55)
    })

    test('converter uma string qualquer', () => {
        expect(conversao("alex")).toBe("Erro")
    })

    test("converter um objeto qualquer gere erro", () => {
        expect(conversao({})).toBe("Erro");
    });
    
    test("converter um array qualquer gere erro", () => {
        expect(conversao([])).toBe("Erro");
    });
    
    test("converter um array qualquer gere erro", () => {
        expect(conversao(undefined)).toBe("Erro");
    });
    
    test("converter um array qualquer gere erro", () => {
        expect(conversao(null)).toBe("Erro");
    });
})

