function calculaImcUsuario(params) {

    var nome = prompt("Informe o seu nome")
    var peso = prompt(nome + ", informe o seu peso");
    var altura = prompt(nome + ", informe a sua altura");

    imc = calculaImc(peso, altura);

    mostra(nome + ", o seu IMC é " + imc + ".");
    pulaLinha();

    if (imc < 18.5) {
        mostra(nome + ", o seu IMC está abaixo do recomendado.");
    }
    if (imc > 35) {
        mostra("Você está acima do recomendado.");
    }
    if (imc < 18.5) {
        mostra("Você está abaixo do recomendado.");
    }
    if (imc >= 18.5 && imc <= 35) {
        mostra("Seu IMC está exclente!");
    }
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

function mostra(frase) {
    document.write(frase);
}

function pulaLinha(params) {
    document.write("<br>");
}

