export default class Psicologo {
  static #countID = 0;
  #id;
  #nome;
  #CPF;
  #CRP;
  #atuacao;
  #ocupacao;
  #endereco = {
    completo: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: ''
  };
  #contato = {
    email: '',
    nickRede: '',
    site: '',
    telefone: ''
  };
  
  /**
  * Construtor da classe Psicologo
  * @param {string} nome
  * @param {string} CPF
  * @param {string} CRP
  * @param {string} atuacao
  * @param {string} ocupacao
  * @param {object} endereco
  * @param {object} contato
  */
  constructor(nome, CPF, CRP, atuacao, ocupacao, endereco, contato) {
    this.#id = Psicologo.#countID++;
    this.#nome = nome;
    this.#CPF = CPF;
    this.#CRP = CRP;
    this.#atuacao = atuacao;
    this.#ocupacao = ocupacao;
    this.#endereco = endereco;
    this.#contato = contato;
  }

  getNome() {
    return this.#nome;
  }

  getCPF() {
    return this.#CPF;
  }

  getCRP() {
    return this.#CRP;
  }

  getAtuacao() {
    return this.#atuacao;
  }

  getOcupacao() {
    return this.#ocupacao;
  }

  getEndereco() {
    if (this.#endereco.completo) return this.#endereco.completo;

    return `${this.#endereco.logradouro}, ${this.#endereco.numero}, ${this.#endereco.complemento}, ${this.#endereco.bairro}, ${this.#endereco.cidade}, ${this.#endereco.estado}, ${this.#endereco.cep}`;
  }

  getEmail() {
    return this.#contato.email;
  }

  getNickRedes() {
    return this.#contato.nickRede;
  }

  getSite() {
    return this.#contato.site;
  }

  getTelefone() {
    return this.#contato.telefone;
  }

  getCidade() {
    return this.#endereco.cidade;
  }

  getContato() {
    if (this.#contato.email && this.#contato.site && this.#contato.nickRede) return `E-mail: ${this.#contato.email} - Site: ${this.#contato.site} - Redes sociais: ${this.#contato.nickRede}`;
    else if (this.#contato.email && this.#contato.nickRede) return `E-mail: ${this.#contato.email} - Redes sociais: ${this.#contato.nickRede}`;
    return '';
  }
}
