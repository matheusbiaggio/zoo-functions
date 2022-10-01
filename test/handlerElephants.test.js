const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined quando não é passado parametro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Retorna uma mensagem de erro quando não é passado um parametro no formato de string', () => {
    const erro = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(1)).toEqual(erro);
    expect(handlerElephants({})).toEqual(erro);
    expect(handlerElephants([])).toEqual(erro);
  });
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Para o argumento names deve retornar o número inteiro Jefferson', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Para o argumento averageAge deve retornar o número inteiro 10.5', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Para o argumento location deve retornar o número inteiro NW', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Para o argumento popularity deve retornar o número inteiro Monday', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Para o argumento availability deve retornar o número inteiro Monday', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
