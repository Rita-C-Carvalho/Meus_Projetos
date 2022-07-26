function validaEmail(){ //a função validaEmail*()está linkada ao evento onblur no HTML
    var email = document.querySelector('input.email');
    var erro = document.querySelector('.erro-email');

    if(!email.checkValidity()){ // a função checkValidity() servepara verificar se o elemento a ser validado está correto, nesse caso o nosso elemento é o email.
        erro.innerHTML = 'E-mail inválido';
        //Nesse caso o if está dizendo Se(o email não for validado), mostre a mesagem 'E-mail inválido'
    }
}

function redefinirMsg(){ // A função redefinirMsg() está linkada ao evento onfocus no HTML.
    var erro = document.querySelector('.erro-email');
    if(erro.innerHTML == "E-mail inválido"){
        erro.innerHTML = "";
    }
    // Nesse caso o if ligado a função redefinirMsg() está dizendo que se a mensagem escrita em erro.innerHTML for igual a 'E-mail inválido', quando eu voltar o foco dentro do formulário ele limpar a mensagem de erro para eu poder tentar digitar um e-mail válido novamente.
}


function validar(){ // a função validar nesse códigos serve para se apertar o botão entrar sem digitar nada no e-mail ou nada na senha aparacer um alerta informando que precisa digitar algo.
    var email = document.querySelector('input.email');
    var senha = document.querySelector('input.senha');
    var senha = document.querySelector('input.senha');
    var erroSenha = document.querySelector('.erro-senha');
    if(email.value.length == 0){
        window.alert("E-mail não informado.");
        email.focus()
    }else if(senha.value.length == 0){
        window.alert("Senha não informada.");
        senha.focus()
    }else if(senha.value.length < 6){
        erroSenha.innerHTML = 'A senha precisa ter 6 ou mais dígitos';
    }else{
        window.location.href = "bemvindo.html";
    }
    
}


function redefinirMsgSenha(){
    var erroSenha = document.querySelector('.erro-senha');
    if(erroSenha.innerHTML =='A senha precisa ter 6 ou mais dígitos'){
        erroSenha.innerHTML = "";
    }
}