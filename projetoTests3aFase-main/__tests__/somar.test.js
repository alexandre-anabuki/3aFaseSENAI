import { somar } from '../src/somar';

describe('funcao somar', () => {
  test(`espero que a soma de dois 
    numeros inteiros esteja correta`, () => {
    expect(somar(1, 2)).toBe(3);
  });

  test(`espero que a soma de dois 
    numeros decimais esteja correta`, () => {
    expect(somar(1.5, 2.5)).toBe(4);
  });

  test(`espero que a soma de dois 
    numeros negativos esteja correta`, () => {
    expect(somar(-2, -3)).toBe(-5);
  });

  test(`espero que ao tentar somar letras
    retorne uma mensagem de erro`, () => {
    expect(somar("a", "b")).toBe("Erro");
  });

  test(`espero que ao tentar somar dois objetos
    retorne uma mensagem de erro`, () => {
    expect(somar({}, {})).toBe("Erro");
  });

  test(`espero que ao tentar somar dois arrays
    retorne uma mensagem de erro`, () => {
    expect(somar([], [])).toBe("Erro");
  });

  test(`espero que ao tentar somar um array e um numero
    retorne uma mensagem de erro`, () => {
    expect(somar([], 10)).toBe("Erro");
  });
});