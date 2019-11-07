var nomi = ["Amella Alessandro", "Bigliardi Laura", "Carnevali Lorenzo", "Caselli Silvia",
"Casolari Asia", "Cassanelli Sebastiano", "Castillo Kiara", "Cerulli Francesco",
"Chiurazzi Lorenzo", "Costetti Bianca", "Fava Alessio", "Fazioli Filippo", "Manno Lorenzo",
"Mecugni Davide", "Oliva Christian", "Palotti Maxim", "Pavlik Yaroslav",
"Sergiano Francesco", "Soli Fatima", "Vitale Leonardo"];

function generaNumero(){
    var num = Math.floor(Math.random()*(nomi.length)) + 1;
    return num;
};


$("button").on("click", function(){
    var casuale = setInterval(persone, 130)
    function persone(){
        var timer = Math.floor(Math.random()*2000) + 1000;
        var numGenerato = generaNumero();
        $("#numero").addClass("animated zoomIn");
        $("#nome").addClass("animated zoomIn");
        $("#numero").text(numGenerato);
        $("#nome").text(nomi[(numGenerato - 1)]);
        setTimeout(function(){
            clearInterval(casuale);
            document.body.style.backgroundColor = "black";
        }, timer)
    };

});
