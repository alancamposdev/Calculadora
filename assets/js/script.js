function calcular(tipo, num, acao) {
  let tela = document.querySelector(".tela");
  if (tipo == "num") {
      tela.value += num;
  }

  if (tipo == "acao") {
    if (num == "c") {
      tela.value = " ";
    }
    if (num == "+" || num == "-" || num == "*" || num == "/" || num == ".") {
      num = tela.value += num;
      document.querySelector("tela").value = num;
    }
    if (num == "=") {
      resultado = eval(tela.value);
      tela.value = resultado;
    }
  }
}
calcular();
