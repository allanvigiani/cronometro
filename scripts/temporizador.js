let start = 0

let timer_hour = 0;
let timer_minute = 0;
let timer_second = 0;

function startTimer() {
    document.querySelector('#timer').style.display = 'inline';
    
    //Mostrar ou não botões
    document.querySelector('#btn_start').style.display = 'none';
    document.querySelector('#btn_stop').style.display = 'inline';   
    
    //Valores recebidos do usuário
    let hours = document.getElementById('hours').value;
    let minutes = document.getElementById('minutes').value;
    let seconds = document.getElementById('seconds').value;

    //Valores do temporizador
    let timer_hour = document.querySelector('#timer_hour');
    let timer_minute = document.querySelector('#timer_minute');
    let timer_second = document.querySelector('#timer_second');
    
    timer_hour.innerHTML = (hours < 9) ? '0' + hours : hours;
    timer_minute.innerHTML = (minutes < 9) ? '0' + minutes : minutes;
    timer_second.innerHTML = (seconds < 9) ? '0' + seconds : seconds;
    
    start = setInterval(function() {
        
        timer_hour.innerHTML = (hours <= 9) ? '0' + hours : hours;
        timer_minute.innerHTML = (minutes <= 9) ? '0' + minutes : minutes;
        timer_second.innerHTML = (seconds <= 9) ? '0' + seconds : seconds;

        if(seconds > 0) {
            seconds--;
        }else if(seconds == 0 && minutes > 0) {
            seconds = 59
            minutes--;
        }else if(minutes == 0 && seconds == 0 && hours > 0 ) {
            seconds = 59;
            minutes = 59;
            hours--;
        }else {
            clearInterval(start);
        }
        
    }, 1000);

}

function stopTimer() {
    //Mostrar ou não botões
    document.querySelector('#btn_start').style.display = 'inline';
    document.querySelector('#btn_stop').style.display = 'none';

    document.querySelector('#timer_hour').innerHTML = '00';
    document.querySelector('#timer_minute').innerHTML = '00';
    document.querySelector('#timer_second').innerHTML = '00';

    clearInterval(start);

    timer_hour.innerHTML = 0;
    timer_minute.innerHTML = 0;
    timer_second.innerHTML = 0;
}