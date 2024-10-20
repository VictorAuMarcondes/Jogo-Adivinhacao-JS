alert('Boas vindas ao jogo do número secreto!');
let numeroDesafio;
numeroDesafio = prompt('Dígite a quantidade de números totais do jogo:');
let numeroSecreto = parseInt(Math.random()*numeroDesafio+1);
let chute;
let tentativas = 1;


while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroDesafio}:`);
    if ( chute == numeroSecreto){
        break;
        }else{
            if(chute > numeroSecreto){
             alert(`O número secreto é menor que ${chute}`);
             }else{
                 alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
}
}
/*if(tentativas >1) {
    alert(`Você acertou o numero secreto: ${numeroSecreto} com ${tentativas} tentativas`);
}
else{
    alert(`Você acertou o numero secreto: ${numeroSecreto} com ${tentativas} tentativa`);
}*/
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!!!`);
