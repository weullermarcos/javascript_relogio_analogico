
//selecionando a div do relogio digital
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//função para atualizar o relogio
function updateClock(){

    //pega a data atual
    let now = new Date();
    //pega a hora
    let hour = now.getHours();
    //pega os minutos
    let minute = now.getMinutes();
    //pega os segundos
    let seconds = now.getSeconds();

    //seta o relogio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)}`;

    //calcula quantos graus cada segundo/minuto/hora deve rotacionar
    let sDeg = ((360 / 60) * seconds) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    //rotaciona
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){

    //concatenando com 0 caso seja menor do que 10
    return (time < 10) ? `0`+time : time;
}

//setinterval é uma função que executa a cada determinado tempo - no caso a cada 1 segundo
setInterval(updateClock, 1000);
updateClock(); //rodando a função a primeira vez - evita o delay inicial
