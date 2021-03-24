var opcao = window.prompt("Escolho o que você quer converter, a temperatura do tempo ou os valores das moedas [tempo / moeda]");

if(opcao == "moeda"){
    var tipoMoeda = window.prompt("Escolha a moeda que você quer converter [Dolar U$ / Real R$ / Libra E$]");
    
    if(tipoMoeda == "dolar"){
        var moeda = window.prompt("Digite o valor em U$ ");
        var resultado = moeda * 5.51; 
        window.alert("O " + tipoMoeda + ", o valor U$ " + moeda + " ta valendo em R$ " + resultado.toFixed(2));
    
    
    }else if (tipoMoeda == "real"){
       var moeda = window.prompt("Digite o valor em R$ ");
       var resultado = moeda / 5.51; 
       window.alert("O " + tipoMoeda + ", o valor R$ " + moeda + " ta valendo em U$ " + resultado.toFixed(2));
    
    
    }else if (tipoMoeda == "libra"){
        var moeda = window.prompt("Digite o valor em E$ ");
        var resultado = moeda * 1.37; 
        window.alert("O " + tipoMoeda + ", o valor E$ " + moeda + " ta valendo em U$ " + resultado.toFixed(2));
     
    }else {
        window.alert("Valor digitado inválido!");
    }

}else if (opcao == "tempo"){
    var tipoTemp = window.prompt("Digite a conversão de temperatura que você deseja [[Celsius] para Fahrenheit / [Fahrenheit] para Celsius]");

    if(tipoTemp == "celsius"){
        var cel = window.prompt("Digite a temperatura em Celsius ");
        var resultado = (cel * 1.8) + 32;
        window.alert("A temperatura de Celsius para Fahrenheit ficou " + resultado.toFixed(2));


    }else if(tipoTemp == "fahrenheit") {
        var fahr = window.prompt("Digite a temperatura em Fahrenheit ");
        var resultado = (fahr - 32) / 1.8;
        window.alert("A temperatura de Fahrenheit para Celsius ficou " + resultado.toFixed(2));

    }else {
        window.alert("valor digitao inválido");

    }

}else{
    window.alert("Valor digita é inválido");
}
