/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');
//const assert = require('assert');
/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('testa se a função quando recebe [1, 2, 3, 4, 5], retorna true', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  });
  it('testa se a função quando recebe [1, 2, "3", 4, 5], retorna false', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
  });
  it('testa se a função quando recebe [1, "a", 3], retorna false', () => {
    expect(numbers([1, 'a', 3])).toBeFalsy();
  });
  it('testa se a função quando recebe [" "], retorna false', () => {
    expect(numbers([' '])).toBeFalsy();
  });
});
