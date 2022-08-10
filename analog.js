var hour = document.querySelector(".hh");
var min = document.querySelector(".mh");
var sec = document.querySelector(".sh");

function start() {


    var time = new Date();
    // var secondhand = time.getSeconds() / 60 * 360 - 90;
    // var minutehand = time.getMinutes() / 60 * 360 - 90;
    // var hourhand = time.getHours() / 12 * 360 - 90;

    var secondhand = time.getSeconds();
    var minutehand = time.getMinutes();
    var hourhand = time.getHours()

    var hd = ((hourhand/12)*360)+((minutehand/60)*30)-90;
    var md = minutehand / 60 * 360 - 90;
    var sd = secondhand / 60 * 360 - 90;

    sec.style.transform = `rotate(${sd}deg)`;
    min.style.transform = `rotate(${md}deg)`;
    hour.style.transform = `rotate(${hd}deg)`;


    // sec.style.transform = `rotate(${secondhand}deg)`;
    // min.style.transform = `rotate(${minutehand}deg)`;
    // hour.style.transform = `rotate(${hourhand}deg)`;

    setInterval(start, 1000)

}
start();

