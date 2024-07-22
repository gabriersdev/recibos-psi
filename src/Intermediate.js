export default class Intermediate {
  static selectedDays = [];
  static valorSessao = null;
  static reactElementValorTotal = null;
  static mesSessao = null;
  static valorTotal = null;

  // TODO Separar em uma class de armaenamento de dados
  // 0 - Desenvolvimento | 1 - Produção
  modo = 1;

  valoresTeste = {
    patient: {
      name: 'Roberto',
      CPF: '123.456.789-09',
      valorSessao: '1.000,00',
    },
    psychologist: {
      name: 'Ricardo',
      email: 'ricardo@email.com',
      phone: '(31) 99999-9999',
      atuacao: 'Psicólogo clínico',
      CRP: '123456',
      CPF: '123.456.789-09',
      endereco: 'Rua dos Bobos, nº 0, Bairro dos Bobos, Cidade dos Bobos, Estado dos Bobos, CEP: 12345-678',
      nickRedes: '@ricardo_psicologo'
    }
  }

  getValue(user, key) {
    if (this.modo === 1) {
      // TODO Implementar a lógica para pegar os valores do localStorage
      return '';
    } else {
      try { return this.valoresTeste[user][key];
      } catch (error) { console.log(error); return ''; }
    }
  }

  static getSelectDays() {
    return Intermediate.selectedDays;
  }

  static setSelectDays(days) {
    Intermediate.selectedDays = days;
  } 

  static getValorSessao() {
    return Intermediate.valorSessao;
  }

  static setValorSessao(valor) {
    Intermediate.valorSessao = valor;
  }

  static getReactElementValorTotal() {
    return Intermediate.reactElementValorTotal;
  }

  static setReactElementValorTotal(element) {
    Intermediate.reactElementValorTotal = element;
  }

  static getMesSessao() {
    return Intermediate.mesSessao;
  }

  static setMesSessao(mes) {
    Intermediate.mesSessao = ('0' + mes).slice(-2);
  }

  static getValorTotal() {
    return Intermediate.valorTotal;
  }

  static setValorTotal(valor) {
    Intermediate.valorTotal = valor;
  }
}