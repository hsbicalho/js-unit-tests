const productDetails = require('../src/productDetails');
const assert = require('assert');
const products = productDetails('Alcool gel', 'Máscara');
/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se productDetails é uma função', () => {
    expect(typeof(productDetails)).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
  assert.deepStrictEqual(Array.isArray(productDetails()), true);
  }); 
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
  assert.deepStrictEqual(Object.keys(productDetails()).length, 2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    assert.deepStrictEqual(typeof productDetails(), 'object');
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    assert.notDeepStrictEqual(products[0], products[1]);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    assert.strictEqual((/123$/.test(products[0].details.productId) &&
    /123$/.test(products[1].details.productId)), true);
  });
});
