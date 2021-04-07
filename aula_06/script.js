var paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 3,
    pontos: 0
}

var rafa = {
    nome: "Rafa",
    vitorias: 5,
    empates: 5,
    derrotas: 0,
    pontos: 0
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

// console.log(paulo);

// console.log(rafa);

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

var jogadores = [rafa, paulo];

exibirJogadores(jogadores);

function exibirJogadores(jogadores){
    var html = "";

    for(var i = 0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";

        html += "<td><button onClick='adicionarVitoria(" + i + " )'>Vitória</button></td>";
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";

    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i){
    jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);
}

function adicionarEmpate(i){
    jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);

}

function adicionarDerrota(i){
    jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);

}