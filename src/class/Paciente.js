export default class Paciente {
  static #countID = 0;
  #id;
  #nome;
  #CPF;
  #valorSecoes = 0;
  #valorConsulta;
  #datasSecoes = [];

  /**
   * Construtor da classe Paciente
   * @param {string} nome
   * @param {string} CPF
   * @param {number} valorConsulta
   * @param {Array} datasSecoes
   */
  constructor(nome, CPF, valorConsulta, datasSecoes) {
    this.#id = Paciente.#countID++;
    this.#nome = nome;
    this.#CPF = CPF;
    this.#valorConsulta = valorConsulta;
    this.#datasSecoes = datasSecoes;
  }

  /**
   * Função para alterar o valor das seções
   * @param {number} valorSecoes 
   */
  setValorSecoes(valorSecoes) {
    this.#valorSecoes = valorSecoes;
  }

  getID() {
    return this.#id;
  }

  getNome() {
    return this.#nome;
  }

  getCPF() {
    return this.#CPF;
  }

  getDataSecoes() {
    return this.#datasSecoes;
  }

  getQuantidadeSecoes() {
    return this.#datasSecoes.length;
  }

  getValorSecoes() {
    if (this.#valorSecoes === 0) {
      return this.#valorSecoes = this.#valorConsulta * this.#datasSecoes.length;
    } else {
      return this.#valorSecoes;
    }
  }
}
