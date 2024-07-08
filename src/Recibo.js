import Paciente from './Paciente.js';
import Psicologo from './Psicologo.js';
import Util from './Util.js';

export default class Recibo {
  static #countID = 0;
  #id;
  #paciente;
  #dataEmissao;
  #psicologo;
  #valorTotal;

  /**
   * Construtor da classe Recibo
   * @param {Paciente} paciente
   * @param {number} valorTotal
   * @param {number} dataEmissao
   * @param {Psicologo} idPsicologo
   */
  constructor(paciente, valorTotal, dataEmissao, psicologo) {
    this.#id = Recibo.#countID++;
    this.#valorTotal = valorTotal;
    this.#dataEmissao = dataEmissao;

    if (paciente instanceof Paciente) {
      this.#paciente = paciente;
    } else {
      throw new Error('O usuário informado não é válido.');
    }

    if (psicologo instanceof Psicologo) {
      this.#psicologo = psicologo;
    } else {
      throw new Error('O psicólogo informado não é válido.');
    }
  }

  getID() {
    return this.#id;
  }

  getDataEmissao() {
    return this.#dataEmissao;
  }

  renderRecibo() {
    console.log(this.#paciente.getDataSecoes());
    return `
      Recebi de <b>${this.#paciente.getNome()}</b>, CPF: <b>${this.#paciente.getCPF()}</b>, a quantia de R$ <b>${Util.transformaMoeda(this.#valorTotal)}</b> referente a ${this.#paciente.getQuantidadeSecoes() > 0 ? this.#paciente.getQuantidadeSecoes() + ' sessões de terapia realizadas no período de ' + this.#paciente.getDataSecoes().map((d) => d) : '1 sessão de terapia realizada no dia de ' + this.#paciente.getDataSecoes()[0]}.

      ${this.#psicologo.getCidade() ?? 'Brasil'}, ${Util.transformaData(this.#dataEmissao, 'e')}

      <br><br><br>
      <b>${this.#psicologo.getNome()}</b>
      CRP: ${this.#psicologo.getCRP()}
      CPF: ${this.#psicologo.getCPF()}

      <br><br><br>
      ${this.#psicologo.getEndereco()}
      ${this.#psicologo.getNome()} - ${this.#psicologo.getAtuacao()} - ${this.#psicologo.getTelefone()}
      ${this.#psicologo.getContato()}
    `
  }
}