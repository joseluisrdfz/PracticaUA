var electro = new Electro();

electro.on("connect", function () { // Esparar a que la librería se conecte con la horno
    console.log("Ya estoy conectado con la horno!!")
    console.log("Con este hay " + electro.clientes + " clientes conectados");

    // Actualizar el reloj
    electro.on("reloj", function (hora) {
        document.getElementById("hora").innerHTML = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
    });

    // Con la presencia del usuario muestro los controles de cocinado
    electro.on("presencia", function (presente) {
        if (presente) {
            document.getElementById("controles").style.display = "block";
        } else {
            document.getElementById("controles").style.display = "none";
        }
    });

    var cocinar = document.getElementById("cocinar");
    var tiempo = document.getElementById("tiempo");
    var resistenciaSuperior = document.getElementById("resistenciaSuperior");
    var resistenciaInferior = document.getElementById("resistenciaInferior");
    var gratinador = document.getElementById("gratinador");
    var ventilador = document.getElementById("ventilador");

    electro.on("puertaAbierta", function (abierta) {
        cocinar.disabled = abierta;
    });


    // Cocinar
    cocinar.addEventListener("click", function () {
        console.log("Comienzo a cocinar. Tiempo:", tiempo.value);
        // Bloquear controles
        cocinar.disabled = true;
        tiempo.disabled = true;
        temperatura.disabled = true;
        resistenciaSuperior.disabled = true;
        resistenciaInferior.disabled = true;
        gratinador.disabled = true;
        ventilador.disabled = true;

        // Ventilador?
        if (ventilador.checked) electro.ventilador = true;

        // Termostato del horno
        function termostato (t) {
            if (t < temperatura.value) { // si no he alcanzado la temperatura objetivo mantener las resistencias activadas
                if (resistenciaSuperior.checked) electro.resistenciaSuperior = true;
                if (resistenciaInferior.checked) electro.resistenciaInferior = true;
                if (gratinador.checked) electro.gratinador = true;
            } else { // si ya tengo la temperatura objetivo apagar las resistencias
                electro.resistenciaSuperior = false;
                electro.resistenciaInferior = false;
                electro.gratinador = false;
            }
        }
        electro.on("temperaturaInterior", termostato);

        setTimeout(function () {
            console.log("Fin del cocinado (tiempo cumplido)")

            electro.off("temperaturaInterior", termostato);

            // Desbloquear los controles
            cocinar.disabled = false;
            tiempo.disabled = false;
            temperatura.disabled = false;
            resistenciaSuperior.disabled = false;
            resistenciaInferior.disabled = false;
            gratinador.disabled = false;
            ventilador.disabled = false;

            // Apagar elementos
            electro.resistenciaSuperior = electro.resistenciaInferior = electro.gratinador = electro.ventilador = false;
        }, tiempo.value * 1000);
    });
});
