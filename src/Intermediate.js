export default class Intermediate {
  static selectedDays = [];
  static valorSessao = null;
  static reactElementValorTotal = null;
  static mesSessao = null;
  static valorTotal = null;

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