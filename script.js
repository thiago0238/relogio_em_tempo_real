/*var relogio = document.getElementById('relogio');
var currentTime = new Date();
relogio.innerHTML= currentTime.toLocaleTimeString();*/
// Função para formatar 1 em 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

// Cria intervalo
const interval = setInterval(() => {// o metodo setInterval(() quem faz a contagem ficar em tempo real 
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const data = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear();
    const HORA =  zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds())

    // Exibe na tela usando a div#data-hora
    document.getElementById('data').innerHTML = data;
    document.getElementById('relogio').innerHTML = HORA;
}, 1000);