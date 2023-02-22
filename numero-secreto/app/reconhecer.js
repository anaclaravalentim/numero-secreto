const elemento_chute = document.getElementById('chute')//busca caixinha de chute

//Usando o Web Speech API 
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; //Alimenta os objetos corretos no Chrome e quaisquer implementações futuras

const recognition = new SpeechRecognition(); //Define uma instância de reconhecimento de fala para controlar o reconhecimento 
recognition.lang = 'pt-Br'  //língua em português
recognition.start()         //liga o microfone

recognition.addEventListener('result', onSpeak)//ao falar algo...

function onSpeak(e){
    chute = e.results[0][0].transcript //exibe evento, dentro do evento buscar pelo o que foi dito no último array
    exibe_chute(chute) //chama função que exibe o chute na tela
    verifica_valor_valido(chute)
}

function exibe_chute(chute){ //altera o que existe na tela com o que foi dito
    elemento_chute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start()) //ao falar, fazer com que ele continue escutando

