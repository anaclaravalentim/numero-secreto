function verifica_valor_valido(chute){
    const numero = +chute //transforma em número inteiro
        
    //Verifica se é numérico
    if (chute_invalido(numero)){ //se for um valor inválido

        if (chute.toUpperCase() === "GAME OVER") { //se o chute for game over
            
            //altera documento para encerrar e botão de jogar novamente
            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
            return //não executar mais nada após erro
        }
    }

    if (maior_maior_permitido(numero)){ //se maior ou menor que valores permitidos
        elemento_chute.innerHTML += `<div> Valor fora do intervalo válido!</div></br> 
        <div>O número precisa estar entre ${menor_valor} 
        e ${maior_valor}</div>` //mostra mensagem de erro na tela

        return //não executar mais nada após erro
    }

    if (numero == numero_secreto){ //se acertar, altera todo o conteúdo do body e informa acerto
        document.body.innerHTML = ` 
        <h2> Você acertou!! </h2>
        <h3> O número secreto era ${numero_secreto} </h3>

        <button id='jogar-novamente' class='btn-jogar'> Jogar novamente</button> 
        `
    } else{ //se for válido e diferente de um acerto, passar as dicas
        if (numero > numero_secreto){//se o número informado for maior que o número secreto, somar com o que existe o novo html de dica
        elemento_chute.innerHTML += 
        `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
        }else{//se o número informado for menor que o número secreto, somar com o que existe o novo html de dica
        
        elemento_chute.innerHTML += 
        `    
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
        }
    }



}

function chute_invalido(numero) {
    return Number.isNaN(numero)
}

function maior_maior_permitido(numero){
    return numero > maior_valor || numero < menor_valor //se numero maior que maior valor permitido OU numero menor que o menor valor permitido
}

//acessa todo o documento/página para recarrefar
document.body.addEventListener('click', e => { //se houver click
    if(e.target.id == 'jogar-novamente'){ //se o click for no id de jogar novamente
        window.location.reload() //recarregar tela e jogo
    }
})