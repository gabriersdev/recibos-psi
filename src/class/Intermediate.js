export default class Intermediate {
  static selectedDays = [];
  static valorSessao = null;
  static reactElementValorTotal = null;
  static mesSessao = null;
  static valorTotal = null;

  // Para confirmação e impressão
  static data;

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

  valoresSalvos = {
    patient: {
      name: '',
      CPF: '',
      valorSessao: '',
    },
  }

  // Verificando e capturando dados salvos em localStorage
  // TODO - isso não fica bom aqui
  verificarDadosSalvos() {
    let saved;

    try {
      saved = JSON.parse(localStorage.getItem('recibos-psi'));
      let rec;
      
      if (saved && Object.getOwnPropertyNames(saved).length > 0) {
        if (saved.psychologist) rec = saved;
        else rec = null;
      }

      // Altera nomes das propriedades para corresponder ao preench dos inputs
      if (rec) {
        let psychologist;

        try {
          psychologist = JSON.parse(rec.psychologist)
        } catch (error) {
          psychologist = rec.psychologist
        }

        this.valoresSalvos.psychologist = {
          name: psychologist.nome || '',
          email: psychologist.contato.email || '',
          phone: psychologist.contato.telefone || '',
          atuacao: psychologist.atuacao || '',
          CRP: psychologist.CRP || '',
          CPF: psychologist.CPF || '',
          endereco: psychologist.endereco.completo || '',
          nickRedes: psychologist.contato.nickRede || ''
        }
      }

    } catch (error) {
      console.log(error);
      localStorage.setItem('recibos-psi', JSON.stringify({}));
      return null;
    }
  }

  getValue(user, key) {
    if (this.modo === 1) {
      try {
        return this.valoresSalvos[user][key]
      } catch (error) {
        // console.log(error);
        return '';
      }
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
    return `0${parseInt(Intermediate.mesSessao) + 1}`.slice(-2);
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

  static setData(data) {
    Intermediate.data = data
  }

  static getData() {
    return Intermediate.data;
  }
}
