export default class Intermediate {
  static selectedDays = [];
  static valorSessao = null;
  static reactElementValorTotal = null;

  static getSelectDays() {
    return Intermediate.selectedDays;
  }

  static setSelectDays(days) {
    Intermediate.selectedDays = days;
    Intermediate.calculateTotal();
  } 

  static getValorSessao() {
    return Intermediate.valorSessao;
  }

  static setValorSessao(valor) {
    Intermediate.valorSessao = valor;
    Intermediate.calculateTotal();
  }

  static getReactElementValorTotal() {
    return Intermediate.reactElementValorTotal;
  }

  static setReactElementValorTotal(element) {
    Intermediate.reactElementValorTotal = element;
    Intermediate.calculateTotal();
  }

  static calculateTotal() {
    console.log(Intermediate.valorSessao, Intermediate.selectedDays, Intermediate.getReactElementValorTotal());
    if (Intermediate.valorSessao !== null && Intermediate.selectedDays.length > 0 && Intermediate.reactElementValorTotal !== null) {
      let total = 0;
      Intermediate.selectedDays.forEach(() => {
        total += parseFloat(Intermediate.valorSessao);
      });
      console.log(total);
    }
  }
}