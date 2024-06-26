export default class Intermediate {
  static selectedDays = [];
  static valorSessao = null;
  static reactElementValorTotal = null;

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
}