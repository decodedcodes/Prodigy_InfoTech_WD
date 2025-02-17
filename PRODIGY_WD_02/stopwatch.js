let hour = min = sec = ms ="0"+ 0,
startTimer;
let lap_num = 0;
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const ResetBtn = document.querySelector('.reset-btn');
const LapBtn =document.querySelector('.lap-btn');
let container = document.querySelector('.container');
let lap_container = document.querySelector('.lap-container');

function start(){
    startTimer = setInterval(()=>{
        ms++
        ms = ms<10 ? "0" + ms : ms;
        if(ms == 100){
            sec++;
            ms = "0" + 0;
            sec = sec < 10 ? "0" + sec : sec;
        }
        if(sec == 60){
            min++;
            sec = 0;
            min = min < 10? "0" + min : min;
        }
        if(min == 60){
            hour++;
            min = 0;
            hour = hour < 10 ? "0" + hour : hour;
        }
        putValue();
    },10);
    startBtn.style.display ="none";
    stopBtn.style.display ="block";
    ResetBtn.style.display="none";
    LapBtn.style.display="block";
};

function stop(){
    clearInterval(startTimer);
    startBtn.style.display ="block";
    stopBtn.style.display ="none";
    ResetBtn.style.display="block";
    LapBtn.style.display="none";
}

function reset(){
    clearInterval(startTimer);
    hour = min = sec = ms ="0"+ 0;
    putValue();
    lap_container.innerHTML = '';
    container.style.height ='310px';
    lap_container.style.display ="none";
    lap_num = 0;
}
function lap(){
    let lap_time = lap_container.appendChild(document.createElement("li"));
    lap_num++;
    lap_time.innerHTML = `<span class="lap_label">Lap ${lap_num}</span> ` +
    `<span class ="lap_time">${hour} : ${min} : ${sec} : ${ms}</span>`;
    container.style.height = '500px';
    lap_container.style.display ="block";
}

function putValue(){
    document.querySelector('.millisecond').innerHTML = ms;
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min;
};