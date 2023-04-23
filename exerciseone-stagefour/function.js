let writeNumber = true
while(writeNumber){
  let numberOne = Number(prompt("Insira um número inteiro:"))
  let numberTwo = Number(prompt("Insira outro número inteiro:"))
  alert(` A soma dos números é igual a: ${numberOne + numberTwo}  
  A subtração dos números é igual a: ${numberOne - numberTwo}
  A multiplicação dos números é igual a: ${numberOne * numberTwo}
  A divisão dos números é igual a: ${numberOne / numberTwo}
  O resto de divisão dos números é igual a: ${numberOne % numberTwo}
  A soma dos números é : ${(numberOne+numberTwo) % 2 === 0 ? "par" : "impar"}
  Os números são: ${numberOne === numberTwo ? "Iguais" : "Diferentes"}`);
  let choice = prompt("Digite SIM para continuar ou SAIR para encerrar: ").toLowerCase();
  switch(choice) {
    case "sim":
      continue
    case "sair":
      writeNumber = false;
      break;
    default:
     alert("Digite uma opção válida");
  }
}