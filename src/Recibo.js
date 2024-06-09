import Usuario from './Usuario.js';
import Psicologo from './Psicologo.js';
import Util from './Util.js';

export default class Recibo {
  static #countID = 0;
  #id;
  #usuario;
  #dataEmissao;
  #psicologo;

  /**
   * Construtor da classe Recibo
   * @param {Usuario} usuario
   * @param {number} valorTotal
   * @param {number} dataEmissao
   * @param {Psicologo} idPsicologo
   */
  constructor(usuario, dataEmissao, psicologo) {
    this.#id = Recibo.#countID++;
    this.#dataEmissao = dataEmissao;

    if (usuario instanceof Usuario) {
      this.#usuario = Usuario.getID();
    } else {
      throw new Error('O usuário informado não é válido.');
    }

    if (usuario instanceof Usuario) {
      this.#usuario = Usuario;
    } else {
      throw new Error('O usuário informado não é válido.');
    }

    if (psicologo instanceof Psicologo) {
      this.#psicologo = Psicologo;
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
    return `
      Recebi de <b>${this.#usuario.getNome()}</b>, CPF: <b>${this.#usuario.getCPF()}</b>, a quantia de R$ <b>${Util.transformaMoeda(this.#usuario.getValorSecoes())}</b> referente a ${this.#usuario.getQuantidadeSecoes() > 0 ? this.#usuario.getQuantidadeSecoes() + ' sessões de terapia realizadas no período de ' + this.#usuario.getDatasSecoes().map((d) => Util.transformaData(d)).join(', ') : '1 sessão de terapia realizada no dia de ' + Util.transformaData(this.#usuario.getDatasSecoes()[0])}.

      ${this.#psicologo.getCidade()}, ${Util.transformaData(this.#dataEmissao, 'e')}

      <br><br><br>
      <b>${this.#psicologo.getNome()}</b>
      CRP: ${this.#psicologo.getCRP()}
      CPF: ${this.#psicologo.getCPF()}

      <br><br><br>
      ${this.#psicologo.getEndereco()}
      ${this.#psicologo.getNome()} - ${this.#psicologo.getAtuacao()} - ${this.#psicologo.getTelefone()}
      ${this.#psicologo.getEmail()} - ${this.#psicologo.getSite()} - ${this.#psicologo.getNickRedes()}
    `
  }
}