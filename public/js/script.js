function Persona(nome, numero) {
    this.nome = nome;
    this.numero = numero;
}
var nomi = [
    new Persona("Amella Alessandro", 1),
    new Persona("Bigliardi Laura", 2),
    new Persona("Carnevali Lorenzo", 3),
    new Persona("Caselli Silvia", 4),
    new Persona("Casolari Asia", 5),
    new Persona("Cassanelli Sebastiano", 6),
    new Persona("Castillo Kiara", 7),
    new Persona("Chiurazzi Lorenzo", 8),
    new Persona("Costetti Bianca", 9),
    new Persona("Fava Alessio", 10),
    new Persona("Fazioli Filippo", 11),
    new Persona("Manno Lorenzo", 12),
    new Persona("Mecugni Davide", 13),
    new Persona("Oliva Christian", 14),
    new Persona("Palotti Maxim", 15),
    new Persona("Pavlik Yaroslav", 16),
    new Persona("Sergiano Francesco", 17),
    new Persona("Soli Fatima", 18),
    new Persona("Vitale Leonardo", 19)
];

function generaNumero() {
    var num = Math.floor(Math.random() * nomi.length) + 1;
    return num;
}

$("button").on("click", function () {
    checkbox = document.getElementById("remove");
    var numGenerato;
    var iniziatoNum = 0;
    var casuale = setInterval(persone, 130);
    function eliminami(tempo) {
        if (iniziatoNum == 1) {
            setTimeout(function () {
                if (checkbox.checked == true) {
                    function displayError(msg) {
                        $("h1").css("font-size", "12vh");
                        $("h1").text(msg);
                        setTimeout(function () {
                            $("h1").text("3F");
                            $("h1").css("font-size", "18vh");
                        }, 10000);
                        $("#remove").prop("disabled", true);
                        checkbox.checked = false;
                        iniziatoNum = 0;
                    }
                    if (nomi.length == 1) {
                        displayError("Rimane solo una Persona!");
                    } else if (nomi.length < 1) {
                        displayError(
                            "C'è un problema con i nomi, ne rimane meno di uno... Ricarica la pagina!"
                        );
                    } else {
                        var levami = numGenerato - 1;
                        nomi.splice(levami, 1);
                    }
                }
                console.log(
                    "***********************\nPersone rimanenti (" +
                        nomi.length +
                        "):"
                );
                for (i = 0; i < nomi.length; i++) {
                    console.log(
                        "Nome: " +
                            nomi[i].nome +
                            ", Numero: " +
                            nomi[i].numero +
                            "."
                    );
                }
                iniziatoNum = 0;
                $("button").prop("disabled", false);
                $("button").css("background-color", "#f4511e");
            }, tempo);
        }
    }
    function persone() {
        iniziatoNum++;
        $("button").prop("disabled", true);
        $("button").css("background-color", "#4a4a4a");
        var timer = Math.floor(Math.random() * 2000) + 1000;
        numGenerato = generaNumero();
        eliminami(timer);
        $("#numero").addClass("animated zoomIn");
        $("#nome").addClass("animated zoomIn");
        $("#numero").text(nomi[numGenerato - 1].numero);
        $("#nome").text(nomi[numGenerato - 1].nome);
        setTimeout(function () {
            clearInterval(casuale);
        }, timer);
    }
});
