const endDate="26 August 2023 12:50 AM";
document.getElementById("end-date").innerHTML=endDate;
const inputs=document.querySelector("date");

// var date=0;
function clock(){
    const end=new Date(endDate);
    const now =new Date();
    const diff=(end-now)/1000;
    if(end<now ){
       
    alert('time is passed/input valid date/time');
    return 0;
    }
var days=Math.floor(diff/3600/24);
document.getElementById("date").textContent=days;
// console.log(Math.floor(diff/3600%24));
 var hour=Math.floor(diff/3600)%24;
document.getElementById("hours").textContent=hour;
var minute=Math.floor(diff/60)%60;
document.getElementById("minutes").textContent=minute;
var seconds=Math.floor(diff)%60;
document.getElementById("second").textContent=seconds;
 
}

clock();

setInterval(() => {
    clock();
}, 1000);