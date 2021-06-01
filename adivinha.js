var readline = require("readline");
var numeroSorteado = geraAleatorio();
var vidas = 10;
var numeroDeTentativas = 0;
var lifeEmote = ["💓", "💓", "💗", "🤍", "🤍", "🤍", "💚", "💚", "💚", "💚"];
var humorEmote = ["😱", "😳", "😬", "😩", "😶", "😐", "🙃", "😊", "😄", "🤓"];
console.log(numeroSorteado)

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("===============================ADIVINHA?=====================================")
console.log("=============================  ¯\_(ツ)_/¯  ===================================\n")
console.log("Este programa gera um número aleatório maior do que 1 e menor do que 100.\nTente adivinhá-lo com até 10 tentativas.\n")
console.log("========================== DIGITE 0 PARA SAIR ===============================")
console.log("=============================================================================")
display();

perguntar();

function perguntar() {

    rl.question("\nInforme seu palpite: ", function (numero) {
        var palpite = parseInt(numero);

        calcularTentativa(palpite);

    });
}

function errou(palpite) {

    console.log("Vidas: " + vidas);
    console.log("Tentativa: " + numeroDeTentativas);
    console.log();
    console.log(" ✘           🤷           ㋡\n");
    console.log()
    console.log("Você ERROU.");
    exibeMensagem(palpite);
    perguntar();

}

function perdeu(palpite) {

    console.log("Vidas: " + vidas);
    console.log("Tentativa: " + numeroDeTentativas);
    console.log()
    console.log(" ❌           🤷           🚧\n")
    console.log()
    console.log("Que pena! Você PERDEU.");
    console.log("Mais sorte na próxima ☘");
    sair();

}

function ganhou(palpite) {

    console.log("Vidas: " + vidas);
    console.log("Tentativa: " + numeroDeTentativas);
    console.log()
    console.log(" ✔         (▀̿̿Ĺ̯̿▀̿ ̿)          👑")
    console.log()
    console.log("Parabéns! Você acertou, sortudo. 🍀");
    console.log("O número sorteado era mesmo " + numeroSorteado + "!")
    exibeMensagem(palpite);
    sair();
}
function geraAleatorio() {

    var numeroSorteado = parseInt((Math.random() * 100));

    while ((numeroSorteado === 0) || (numeroSorteado === 100)) {
        numeroSorteado = geraAleatorio();
    }
    return numeroSorteado;
}

function mostraVidasEmote() {
    console.log(lifeEmote.join(' '));
}

function mostrahumorEmote() {
    console.log(humorEmote.join(' '));
}

function display() {
    mostraVidasEmote();
    mostrahumorEmote();
}

function sair() {
    rl.close();
}

function exibeMensagem(palpite) {

    if (numeroSorteado < palpite) {
        console.log("O número procurado é menor do que " + palpite);
    } else if (numeroSorteado > palpite) {
        console.log("O Número procurado é maior do que " + palpite);
    }
}

function calcularTentativa(palpite) {
    vidas--;
    numeroDeTentativas++;
    lifeEmote.pop();
    humorEmote.pop();
    display();
    if (palpite == numeroSorteado) {
        ganhou(palpite);
    } else if ((palpite !== numeroSorteado) && (vidas > 0)) {
        errou(palpite);
    } else if ((palpite !== numeroSorteado) && (vidas == 0)) {
        perdeu(palpite);
    }

}
