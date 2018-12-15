var countDownDate = new Date("Dec 25, 2018 23:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = days + " dias " + hours + " horas "
    + minutes + " minutos " + seconds + " segundos ";
    
  
    if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = "ENIGMA EXPIRADO";
		var el = document.getElementById( 'img' );
		el.parentNode.removeChild( el );
    }
}, 1000);

document.oncontextmenu = new Function("return false");