//countdown timer

const countDownDate = new Date("Apr 19, 2024 00:00:00").getTime()

const x = setInterval( function(){
    let now = new Date().getTime()

    let distance = countDownDate - now 

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // document.getElementById("countdown").innerHTML = `${days}  ${hours} 
    //  ${minutes}  ${seconds}`;

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
},)







