
function displayTime(){
    let dateTime=new Date()
    let hours=dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    let sessions = hours>=12 ? "PM": "AM"

    if(hours>=12){
        hours=hours-12;
    }


 document.getElementById("dClock").innerHTML=`${hours}: ${minutes}: ${seconds} : ${sessions}`;
    
}

setInterval(displayTime, 10); 