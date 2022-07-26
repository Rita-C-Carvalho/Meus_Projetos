const player1 = "X"; /*definição do jogador com X */
const player2 = "Bola"; /*definição do jogador com O */

var playTime = player1; /*variável para definir a vez do jogador*/
var gameOver = false; /* variável patra ver se o jogo já acabou*/

atualizaMostrador();
inicializarEspacos();


function atualizaMostrador(){
    if(gameOver){
        return;
    }
    if(playTime == player1){
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/x.png", border="0", height="80");
    }else{
            var player = document.querySelectorAll("div#mostrador img")[0];
            player.setAttribute("src", "imagens/bola.png", border="0", height="80");
    }

}

function inicializarEspacos(){
    var espacos = document.getElementsByClassName('espaco');
    for(var i = 0; i < espacos.length; i++){
        espacos[i].addEventListener("click", function(){ //os espaços do tabuleiro estão recebendo o evento clicar, ou seja quando clicar em cada espaço, irá acontecer o que for definido pela função.
            if(gameOver) {
                return;
            }
            if(this.getElementsByTagName('img').length == 0){ //em cada elemento imagem igual a vazio
                if(playTime == player1){ // se o jogador for o jogador 1
                    this.innerHTML = "<img src='imagens/x.png', border='0', height='80'>"; //coloque a imagem x no espaço que receber o clique
                    this.setAttribute("Jogada", player1);   
                    playTime = player2; //mudar para o jogador 2
                }else{
                    this.innerHTML = "<img src='imagens/bola.png', border='0', height='80'>";
                    this.setAttribute("Jogada", player2);
                    playTime = player1;
                }

                atualizaMostrador();
                verificarVencedor();
            }
        });
    }
function verificarVencedor(){
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var escrever = document.querySelector('div.escrever');
    
    var vencedor = "";

    if(((a1 == b1 && a1 == c1) || (a1 == b2 && a1 == c3) || (a1 == a2 && a1 == a3)) && a1 != ""){
        vencedor = a1;
    }else if(((b2 ==b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1)) && b2 != ""){
        vencedor = b2;
    }else if(((c3 == a3 && c3 == b3) || (c3 == c1 && c3 == c2))&& c3 != ""){
        vencedor = c3;
    }
    

    if(vencedor != ""){
        gameOver = true;
        document.querySelector('div.escrever').style.backgroundColor = "rgba(255, 20, 145, 0.497)";
        document.querySelector('div.escrever').style.borderRadius = '30px';
        escrever.innerHTML = `O jogador '${vencedor}' venceu.<br> Parabéns!!!<br>`;
        escrever.innerHTML += `<a href="jdv.html">Jogar novamente</a>`;
    }else if(a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != ""){
        gameOver = true;
        document.querySelector('div.escrever').style.backgroundColor = "rgba(255, 20, 145, 0.497)";
        document.querySelector('div.escrever').style.borderRadius = '30px';
        document.querySelector('div.escrever').style.color = 'black';
        document.querySelector('div.escrever').style.fontSize = '1em';
        escrever.innerHTML = "GAME OVER <br> Não houve ganhador.<br>"
        escrever.innerHTML += `<a href="jdv.html">Jogar novamente</a>`;
    }

   
   
    

    if((a1 == b1 && a1 == c1) && a1 != ""){
        document.getElementById('a1').style.backgroundColor = "deeppink";
        document.getElementById('b1').style.backgroundColor = "deeppink";
        document.getElementById('c1').style.backgroundColor = "deeppink";
    }
    
    if((a1 == b2 && a1 == c3) && a1 != ""){
        document.getElementById('a1').style.backgroundColor = "deeppink";
        document.getElementById('b2').style.backgroundColor = "deeppink";
        document.getElementById('c3').style.backgroundColor = "deeppink";
    }

    if((a1 == a2 && a1 == a3) && a1 != ""){
        document.getElementById('a1').style.backgroundColor = "deeppink";
        document.getElementById('a2').style.backgroundColor = "deeppink";
        document.getElementById('a3').style.backgroundColor = "deeppink";
    }



    if((b2 ==b1 && b2 == b3) && b2 != ""){
        document.getElementById('b2').style.backgroundColor = "deeppink";
        document.getElementById('b1').style.backgroundColor = "deeppink";
        document.getElementById('b3').style.backgroundColor = "deeppink";
    }

    if((b2 == a2 && b2 == c2) && b2 != ""){
        document.getElementById('b2').style.backgroundColor = "deeppink";
        document.getElementById('a2').style.backgroundColor = "deeppink";
        document.getElementById('c2').style.backgroundColor = "deeppink";
    }

    if((b2 == a3 && b2 == c1) && b2 != ""){
        document.getElementById('b2').style.backgroundColor = "deeppink";
        document.getElementById('a3').style.backgroundColor = "deeppink";
        document.getElementById('c1').style.backgroundColor = "deeppink";
    }

    

    if((c3 == a3 && c3 == b3) && c3 != ""){
        document.getElementById('c3').style.backgroundColor = "deeppink";
        document.getElementById('a3').style.backgroundColor = "deeppink";
        document.getElementById('b3').style.backgroundColor = "deeppink";
    }

    if((c3 == c1 && c3 == c2) && c3 != ""){
        document.getElementById('c3').style.backgroundColor = "deeppink";
        document.getElementById('c1').style.backgroundColor = "deeppink";
        document.getElementById('c2').style.backgroundColor = "deeppink";
    }
}
}