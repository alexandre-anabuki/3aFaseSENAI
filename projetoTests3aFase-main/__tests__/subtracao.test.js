import { subtracao } from '../src/subtracao';

describe('funcao subtracao', () => {
  test(`espero que a soma de dois 
    numeros inteiros esteja correta`, () => {
    expect(subtracao(1, 2)).toBe(-1);
  });

  test(`espero que a soma de dois 
    numeros decimais esteja correta`, () => {
    expect(subtracao(1.5, 2.5)).toBe(-1);
  });

  test(`espero que a soma de dois 
    numeros negativos esteja correta`, () => {
    expect(subtracao(-2, -3)).toBe(1);
  });

  test(`espero que ao tentar subtracao letras
    retorne uma mensagem de erro`, () => {
    expect(subtracao("a", "b")).toBe("Erro");
  });

  test(`espero que ao tentar subtracao dois objetos
    retorne uma mensagem de erro`, () => {
    expect(subtracao({}, {})).toBe("Erro");
  });

  test(`espero que ao tentar subtracao dois arrays
    retorne uma mensagem de erro`, () => {
    expect(subtracao([], [])).toBe("Erro");
  });

  test(`espero que ao tentar subtracao um array e um numero
    retorne uma mensagem de erro`, () => {
    expect(subtracao([], 10)).toBe("Erro");
  });
});