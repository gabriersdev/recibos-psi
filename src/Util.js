const moment = {};

export default class Util{
  static validaCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[\s.-]*/gim, '');
    if (cpf.length !== 11) return false;
    if (cpf === '00000000000') return false;
    console.log(cpf, typeof cpf);
    if (cpf.split('').every((v) => v === cpf.split[0])) return false;
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
  
  static validaEmail(email) {
    if (typeof email !== 'string') return false;
    if (email.length < 5) return false;
    if (email.indexOf('@') === -1) return false;
    if (email.indexOf('.') === -1) return false;
    return true;
  }
  
  static validaTelefone(telefone) {
    if (typeof telefone !== 'string') return false;
    telefone = telefone.replace(/[\s()-]*/gim, '');
    if (telefone.length < 10) return false;
    if (telefone.length > 11) return false;
    if (telefone.length === 11 && telefone[2] !== '9') return false;
    return true;
  }
  
  static validaCEP(cep) {
    if (typeof cep !== 'string') return false;
    cep = cep.replace(/[\s.-]*/gim, '');
    if (cep.length !== 8) return false;
    return true;
  }
  
  static validaCRP(crp) {
    if (typeof crp !== 'string') return false;
    if (crp.length < 5) return false;
    return true;
  }

  static transformaData(data, transform) {
    if (transform === 'e') return `${new moment(data).get('date')} de ${new moment(data).locale('pt-br').format('MMMM')} de ${new moment(data).get('year')}`;
    return new moment(data).format('DD/MM/YYYY');
  }

  static transformaMoeda(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
}
