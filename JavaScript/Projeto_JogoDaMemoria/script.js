let carta = document.querySelectorAll('.carta');
let cartaVirada = false
let primeiraCarta, segundaCarta;
let trancarTabuleiro = false;

function virarCarta(){
    if(trancarTabuleiro) return;
    if(this === primeiraCarta) return;


    this.classList.add('virar');
    if(!cartaVirada){ /*Se a carta não estiver virada*/
        cartaVirada = true;
        primeiraCarta = this; // a carta clicada será aberta
        return;
    }
    segundaCarta = this; // a carta clicada será aberta
    cartaVirada = false;
    check();
}
function check(){
    if(primeiraCarta.dataset.carta === segundaCarta.dataset.carta){
        disabitarCartas();
        return;
    }else{destravarCarta();}    
}

function desabilitarCartas(){
    primeiraCarta.removeEventListener('click', cartaVirada);
    segundaCarta.removeEventListener('click', cartaVirada);
    reset();
}

function destravarCarta(){
    trancarTabuleiro = true //se escolher errado o tabuleiro fica bloqueado

    setTimeout(() =>{ // setTimeout recebe uma função e um tempo.
        primeiraCarta.classList.remove('virar');
        segundaCarta.classList.remove('virar');

        trancarTabuleiro = false;
        reset();
    }, 1500);
}

function reset(){
    [virarCarta, trancarTabuleiro] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

/*Embaralhar as cartas*/

(function embaralhar() {
    carta.forEach((carta) => {
        let posicaoAleatoria = Math.floor(Math.random()*12); //Math.random, vai srtear posições aleatórias para as cartas, math.floor, é para arrendondar o resultado da conta.
        carta.style.order = posicaoAleatoria; /* esse comando é para que sempre que começar o jogo as cartas tenham posoções diferentes, no caso embaralhar.*/
    })
}) ();

carta.forEach((carta) => {
    carta.addEventListener('click', virarCarta)   
})