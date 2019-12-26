function persona(nome, numero) {
    this.nome = nome;
    this.numero = numero;
}
var nomi = [new persona("Amella Alessandro", 1), new persona("Bigliardi Laura", 2), new persona("Carnevali Lorenzo", 3), new persona("Caselli Silvia", 4),
new persona("Casolari Asia", 5), new persona("Cassanelli Sebastiano", 6), new persona("Castillo Kiara", 7), new persona("Cerulli Francesco", 8),
    new persona("Chiurazzi Lorenzo", 9), new persona("Costetti Bianca", 10), new persona("Fava Alessio", 11), new persona("Fazioli Filippo", 12), new persona("Manno Lorenzo", 13),
    new persona("Mecugni Davide", 14), new persona("Oliva Christian", 15), new persona("Palotti Maxim", 16), new persona("Pavlik Yaroslav", 17),
    new persona("Sergiano Francesco", 18), new persona("Soli Fatima", 19), new persona("Vitale Leonardo", 20)];

function generaNumero() {
    var num = Math.floor(Math.random() * (nomi.length)) + 1;
    return num;
    };

$("button").on("click", function () {

    checkbox = document.getElementById("remove");
    var numGenerato;
    var iniziatoNum = 0;
    var casuale = setInterval(persone, 130);
    function eliminami(tempo) {
        if (iniziatoNum == 1) {
            setTimeout(function () {
                if (checkbox.checked == true) {
                    function displayError(msg){
                        $("h1").css("font-size", "12vh");
                        $("h1").text(msg);
                        setTimeout(function(){
                            $("h1").text("3F");
                            $("h1").css("font-size", "18vh");
                        }, 10000);
                        $("#remove").prop("disabled", true);
                        checkbox.checked = false;
                        iniziatoNum = 0;
                    }
                    if(nomi.length == 1){
                        displayError("Rimane solo una persona!");
                    } else if(nomi.length < 1){
                        displayError("C'è un problema con i nomi, ne rimane meno di uno... Ricarica la pagina!");
                    } else {
                        var levami = numGenerato - 1;
                        nomi.splice(levami, 1);
                    }
                }
                console.log("***********************\nPersone rimanenti (" + nomi.length + "):");
                for (i = 0; i < nomi.length; i++) {
                    console.log("Nome: " + nomi[i].nome + ", Numero: " + nomi[i].numero + ".");
                };
                iniziatoNum = 0;
                $("button").prop("disabled", false);
                $("button").css("background-color", "#f4511e");
            }, tempo);
        }
    };
    function persone() {
        iniziatoNum++;
        $("button").prop("disabled", true);
        $("button").css("background-color", "#4a4a4a");
        var timer = Math.floor(Math.random() * 2000) + 1000;
        numGenerato = generaNumero();
        eliminami(timer);
        $("#numero").addClass("animated zoomIn");
        $("#nome").addClass("animated zoomIn");
        $("#numero").text(nomi[(numGenerato - 1)].numero);
        $("#nome").text(nomi[(numGenerato - 1)].nome);
        setTimeout(function () {
            clearInterval(casuale);
        }, timer);
    };

});