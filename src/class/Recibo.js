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

  // Retorna um array com os dados do recibo formatados para serem renderizados no PDF
  renderRecibo() {
    // { text: '  '} - Space
    return [
      { text: 'RECIBO', style: 'header', alignment: 'center' }, { text: '  '}, { text: '  '},
      {
        text: `Recebi de ${this.#paciente.getNome()}, CPF: ${this.#paciente.getCPF()}, a quantia de R$ ${Util.transformaMoeda(this.#valorTotal)} referente a ${this.#paciente.getQuantidadeSecoes() > 1 ? this.#paciente.getQuantidadeSecoes() + ' sessões de terapia realizadas no período de ' + this.#paciente.getDataSecoes().join(', ') : '1 sessão de terapia realizada no dia de ' + this.#paciente.getDataSecoes()[0]}.`
      }, { text: '  '}, { text: '  '},
      { text: `${this.#psicologo.getCidade() ?? 'Brasil'}, ${Util.transformaData(this.#dataEmissao, 'e')}`}, { text: ' '}, { text: '  '},
      { text: `${this.#psicologo.getNome()}` },
      { text: `CRP: ${this.#psicologo.getCRP()} `},
      { text: `CPF: ${this.#psicologo.getCPF()}` }, { text: '  '}, { text: '  '},
      { text: this.#psicologo.getEndereco() || '' },
      { text: `${this.#psicologo.getNome()} - ${this.#psicologo.getAtuacao()} - ${this.#psicologo.getTelefone()}` },
      { text: `${this.#psicologo.getContato()}}` }
    ].map((item) => { !item.style ? item.style = 'default' : ''; return item });
  }
}