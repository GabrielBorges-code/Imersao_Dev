var numeroAleatorio = (Math.random() * 10).toFixed();
var tentativas = 3;
var pontos = 0;

// console.log("Número aleatorio " + numeroAleatorio);

for (var i = 0; i < tentativas; i++){
    var chute = parseInt(window.prompt("digite um valor"));

    if(chute == numeroAleatorio){
        // window.alert("você acertou");
        console.log("você acertou");

        if(i == 0){
            pontos = 3
        }else if (i == 1){
            pontos = 2;
        }else if (i == 2){
            pontos = 1;
        }

        break;
    
    }else if (chute < numeroAleatorio){
        console.log("O número é maior");
    
    }else if (chute > numeroAleatorio){
        console.log("O número é menor");
    
    }
}

if(chute != numeroAleatorio){
    // window.alert("você errou!");
    window.alert("Suas tentativas acabaram. O numero era: " + numeroAleatorio);
}

if(chute == numeroAleatorio){
   
}

document.write("<h2> Seus pontos: " + pontos + "</h2>");


