
/* Quando clica no botao de parar a funcao e chamada para pausar o cronometro */
document.getElementById("parar-btn").addEventListener("click", parar);

/* Atualiza a cada 1s */
let tempo = 1000;

let timer;

/* Setando para comecar em 0 */
let minutos = 0;
let segundos = 0;
let horas = 0;

/* Tudo vai comecar nessa funcao, pois isso esta definido no meu html, quando clicar no botao essa funcao e ativada */
function iniciar() {
    timer = setInterval(cronometro, tempo);
}

function display() {

    let min;
    let hor;
    let seg;

    /* Configurando a parte visual, de como o 0 vai ser exibido */

    /* Horas */
    if(horas < 10) 
        hor = '0' + horas;
    else 
        hor = horas;

    /* Minutos */
    if(minutos < 10) 
        min = '0' + minutos;
    else 
        min = minutos;
    
    /* Segundos */
    if(segundos < 10) 
        seg = '0' + segundos;
    else 
        seg = segundos;

    /* Colocando na tela finalmente */
    let format = hor + ":" + min + ":" + seg;
    document.getElementById("timer").innerHTML = format
}

function cronometro() {

    /* Sempre aumenta os segundos e verifica quando deu 1 minuto e quando deu 1 hora */
    segundos++;

    if(minutos === 60) {
        minutos = 0;
        segundos = 0;
        horas++;
    }

    if(segundos === 60) {
        segundos = 0;
        minutos++;
    }

    /* Chama a funcao que vai colocar essas informacoes na tela */
    display();

}

/* O cronometro para, se iniciar novamente ele continua de onde parou */
function parar() {
    clearInterval(timer);
}