const liga = document.querySelector("#liga");
const desliga = document.querySelector("#desliga");
const lamp = document.querySelector("#lamp");

function padrao () {
    return lamp.src.indexOf ( 'quebrado' ) > -1
}

function ligado () {
    if (!padrao()) {
        lamp.src =  'ligado.jpeg';
    }
}

function desligado () {
    if (!padrao()) {
        lamp.src = 'desligado.jpeg'
    }
}

function quebrado () {
    lamp.src = 'quebrado.jpeg';
}

liga.addEventListener('click', ligado);
desliga.addEventListener('click', desligado);
lamp.addEventListener('mouseover', ligado);
lamp.addEventListener('mouseleave', desligado);
lamp.addEventListener('dblclick', quebrado);  