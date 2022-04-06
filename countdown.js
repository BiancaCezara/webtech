let intervalID = 1;

function countdown(){
    const endDate = new Date("October 1, 2022, 00:00:00");
    var currentDate = new Date();
    var leftTime = endDate.getTime() - currentDate.getTime();
    var left_days = Math.floor(leftTime / 1000 / 60 / 60/ 24);
    var current_hour = currentDate.getHours();
    var left_hours = 24 - current_hour;
    var current_minutes = currentDate.getMinutes();
    var current_seconds = currentDate.getSeconds();
    var left_minutes = 60 - current_minutes;
    var left_seconds = 60 - current_seconds;
    if(left_seconds == 60) left_seconds = '00';
    const elem = document.getElementById("countdown-item-content");
    elem.innerHTML = left_days + "d" + ":\n" + left_hours + "h" + ":\n" + left_minutes +"m" + ":\n" + left_seconds +"s\n" ;
    if(currentDate === endDate) clearInterval(intervalID);
}

     intervalID = setInterval(countdown,200);

