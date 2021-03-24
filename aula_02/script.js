var primeiroValor = parseInt(window.prompt("digite o primeiro valor: "));
var operacao = window.prompt("escolha a a operação [+ - * /]");
var segundoValor = parseInt(window.prompt("digite o segundo valor: "));
var resultado = 0;

if (operacao == "+"){
    resultado = primeiroValor + segundoValor;

}else if (operacao == "-"){
    resultado = primeiroValor - segundoValor;

}else if (operacao == "*"){
    resultado = primeiroValor * segundoValor;

}else if (operacao == "/"){
    resultado = primeiroValor / segundoValor;

}else{
    window.alert("Digite uma operação válida");
}


document.write("<h2>" + primeiroValor + " " + operacao + " "+ segundoValor + " = " + resultado + "</h2>");

