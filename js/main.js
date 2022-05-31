 function theClock()
    {
        let today = new Date();
        let divClock = document.getElementById("divClock");
        let apm = today.getHours();
        if(apm < 12)
        {apm = "AM";}
        else
        {apm = "PM";}
        
        let innerHTML = "Earth : " + apm + today.getHours() + ":";
        innerHTML += today.getMinutes() + ":";
        innerHTML += today.getSeconds();
        
        divClock.innerText = innerHTML;
        
        setTimeout(theClock,1000);

    }

var today = new Date();
document.getElementById('divDate').innerHTML = today.getFullYear();
document.getElementById('divDate').innerHTML = today.getMonth()+1;
document.getElementById('divDate').innerHTML = today.getDate();

document.getElementById('divDate').innerHTML = today.getFullYear() + ' / ' + (today.getMonth()+1) + ' / ' + today.getDate();

function changebg1() {
    document.getElementById("background").style.backgroundImage =
    "url(image/2.jpg)";
}

function changebg2() {
    document.getElementById("background").style.backgroundImage =
    "url(image/1.jpg)";
}

function changebg3() {
    document.getElementById("background").style.backgroundImage =
    "url(image/3.png)";
}