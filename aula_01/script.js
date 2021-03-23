var tipoMoeda = window.prompt("Escolha a moeda que você quer converter [Dolar U$ / Real R$]");

if(tipoMoeda == "dolar"){
    var moeda = window.prompt("Digite o valor em U$ ");
    var resultado = moeda * 5.51; 
    window.alert("O " + tipoMoeda + ", o valor U$ " + moeda + " ta valendo em R$ " + resultado.toFixed(2));


}else if (tipoMoeda == "real"){
   var moeda = window.prompt("Digite o valor em R$ ");
   var resultado = moeda / 5.51; 
   window.alert("O " + tipoMoeda + ", o valor R$ " + moeda + " ta valendo em U$ " + resultado.toFixed(2));


}else {
    window.alert("Valor digitado inválido!");
}



