// function showTime(){
//     let now = new Date();

//     let hours = now.getHours();
//     hours = String(hours).padStart(2, "0");
//     console.log(hours);
//     let minutes = now.getMinutes();
//     hours = String(minutes).padStart(2, "0");
//     console.log(minutes);
//     let seconds = now.getSeconds();
//     hours = String(seconds).padStart(2, "0");
//     console.log(seconds);

//     document.getElementById("clock").innerText = `${hours} : ${minutes} : ${seconds}`;
// }
// showTime();
// setInterval(showTime,1000);
function showTime() {
    let now = new Date();

    let hours = now.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";

    if (hours > 12) {
        hours = hours - 12;

        //0 hour => 12 AM
    }
    if (hours === 0) {// Mid night controler 12 Am
        hours = 12;
    }
    hours = String(hours).padStart(2, "0");
    let minutes = now.getMinutes();
    minutes = String(minutes).padStart(2, "0");
    let seconds = now.getSeconds();
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").innerText =
        `${hours}:${minutes}:${seconds} ${ampm}`;

        let originalHours = now.getHours();
        let greeting = "";

        if(originalHours <12){
            greeting = "Good Morning";
        }
        else if(originalHours > 12){
            greeting = "Good Noon";
        }
        else{
            greeting = "Good Night";
        }
        document.getElementById("greeting").innerText = greeting;
}
function showDate() {
    let now = new Date();

    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let year = now.getFullYear();

    document.getElementById("date").innerText =
        `${day}/${month}/${year}`;
}
function showDay() {
    let now = new Date();

    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = day[now.getDay()];

    document.getElementById("day").innerText = currentDay;


}
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        btn.innerText = "change to dark theme ";
    }else{
        btn.innerText = "change to light theme ";
    }
})

showDate();
showTime();
showDay();
setInterval(showTime, 1000);