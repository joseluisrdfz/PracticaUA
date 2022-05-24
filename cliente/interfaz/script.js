var electro = new Electro();

electro.on("connect", function() { // Esparar a que la librería se conecte con la horno
    console.log("Ya estoy conectado con la horno!!")
    console.log("Con este hay " + electro.clientes + " clientes conectados");

    // Actualizar el reloj
    /*electro.on("reloj", function (hora) {
        document.getElementById("hora").innerHTML = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
    });*/

    // Con la presencia del usuario muestro los controles de cocinado
    electro.on("presencia", function(presente) {
        if (presente) {
            //document.getElementById("controles").style.display = "block";
            pantallaiddle();
        } else {
            //document.getElementById("controles").style.display = "none";
            pantallaAusente();
        }
    });

    //var cocinar = document.getElementById("cocinar");
    if (document.getElementById("cocinar") != undefined) var cocinar = document.getElementById("cocinar");
    console.log(cocinar);
    var tiempo = document.getElementById("tiempo");
    var resistenciaSuperior = document.getElementById("resistenciaSuperior");
    var resistenciaInferior = document.getElementById("resistenciaInferior");
    var gratinador = document.getElementById("gratinador");
    var ventilador = document.getElementById("ventilador");


    electro.on("puertaAbierta", function(abierta) {
        cocinar.disabled = abierta;
    });

    // Cocinar
    cocinar.addEventListener("click", function() {
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
        //if (ventilador.checked) electro.ventilador = true;
        if (ventiladorActivado == true) electro.ventilador = true;

        // Termostato del horno
        function termostato(t) {
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

        setTimeout(function() {
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



// Creacion de arrays y variables globales a medida para la seleccion de distintos idiomas

var chino = [];
var espanyol = [];
var ingles = [];
var hindi = [];
var arabe = [];
var portugues = [];
var ruso = [];
var urdu = [];
var bengali = [];
var frances = [];
var aleman = [];
var italiano = [];
//comprobar si es la primera vez que el usuario usa el horno usando cookies y localstorage
var idioma;
var microfono = "icon-desmuteado";
var volumen = "50" + "%";
var horastemp = 00;
var minutostemp = 00;
var temperatura = "0" + 'º';
var sonda = "Activar Sonda";

//Variables de comprobacion de activaciones del horno
var temperaturaActivada = false;
var sondaActivada = false;
var temporizadorActivado = false;
var ventiladorActivado = false;
var resistenciaSuperiorActivada = false;
var resistenciaInferiorActivada = false;
var luzInteriorActivada = false;
var gratinadorActivado = false;

//Variables para distribución y conexión con el emulador




function vaciarCuerpo() {
    document.body.innerHTML = '';
}

function pantallaAusente() {
    document.body.innerHTML = '<div id="logo_div"><img src="./recursos/logo.png" id="logo" alt="logo"></img></div>';
}

function main(x) {
    //document.cookie = "visitado=si" ;
    if (x == 0) {
        document.body.innerHTML = '<div id="logo_div"><img src="./recursos/logo.png" id="logo" alt="logo"></img></div>';
        setTimeout(() => {
            vaciarCuerpo();
        }, 3000);

        setTimeout(() => {
            pantallaIdiomas();
        }, 3020);

    } else if (x == 1) {
        //el usuario ya ha utilizado el horno anteriormente
        document.body.innerHTML = '<div id="logo_div"><img src="./recursos/logo.png" id="logo" alt="logo"></img></div>';
        setTimeout(() => {
            vaciarCuerpo();
        }, 3000);

        setTimeout(() => {
            pantallaiddle();
        }, 3500);
    }

    //resto de codigo para una ejecucion normal
}


function idiomaSeleccionado(idiomaSeleccionado) {
    idioma = idiomaSeleccionado;
    console.log(idioma);
}


function pantallaIdiomas() {
    document.body.innerHTML = `
    <div id="divIdiomas">
        <span class="icon-abajo arrowdown"></span>
        <div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(0)' class ="idiomas" id ="chino"><p>普通话</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(1)' class = "idiomas" id ="espanyol"><p>Español</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(2)' class = "idiomas" id ="ingles"><p>English</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(3)' class = "idiomas" id ="hindi"><p>भारतीय</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(4)' class = "idiomas" id ="arabe"><p>عرب</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(5)' class = "idiomas" id ="portugues"><p>Português</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(6)' class = "idiomas" id ="ruso"><p>pyccкий</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(7)' class = "idiomas" id ="urdu"><p>اردو</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(8)' class = "idiomas" id ="bengali"><p>বাংলা</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(9)' class = "idiomas" id ="frances"><p>Français</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(10)' class = "idiomas" id ="aleman"><p>Deutsch</p></div>
            <div onclick = 'pantallaiddle(), idiomaSeleccionado(11)' class = "idiomas" id ="italiano"><p>Italiano</p></div>
        </div>
        <span class="icon-arriba arrowup"></span>
    </div>`;
}

function pantallaEscanearQr() {
    document.body.innerHTML = `
    <div id="wifi">
    <div>
    <p>Escanea el código QR y sigue los pasos en la App</p>
    <span onclick = "pantallaConexionEstablecida();" class="icon-qr"></span>
    </div>
    
    <div onclick = "pantallaAjustes();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>`;
}

function pantallaConexionEstablecida() {

    document.body.innerHTML = ` <div id="wifi2"><h1>Red_Wifi_1</h1>
    <span><h2>Conexión establecida</h2>
    <span class="icon-correcto"></span></span></div>`;
    setTimeout(() => {
        pantallaAjustes();
    }, 3500);
}

function pantallaAjustes() {
    document.body.innerHTML = `
    <div id="divajustes">
    <div onclick = "pantallaEscanearQr();" class="opcion">
        <p>WIFI</p>
        <span class="icon-wifi"></span>
    </div>
    <div onclick = "pantalla_definir_volumen();" class="opcion">
        <p>VOLUMEN</p>
        <span class="icon-convolumen"></span>
    </div>
    <div onclick = "microfonoActivadoDesactivado(this);" class="opcion micro">
        <p>MICRÓFONO</p>
        <span id = "mic" class="` + microfono + `"></span>
    </div>
    <div onclick = "pantallaDatosHorno()"  class="opcion">
        <p>ACERCA</p>
        <span class="icon-informacion"></span>
    </div>
    <div onclick = "pantallaIdiomas();" class="opcion">
        <p>IDOMA</p>
        <span class="icon-idioma"></span>
    </div>
    <div onclick = "pantallaControles();" class="opcion">
        <p>CONTROLES</p>
        <span class="icon-mano"></span>
    </div>
    <div onclick = "pantallaiddle()" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div> 
    
      `;
}

function pantallaControles() {
    document.body.innerHTML = `
    <div id = "divcontroles">
        <div onclick = "pantallaInformacionResistenciaSuperior();" class="opcioncontroles">
            <span id = "res_sup" class="icon-menos"></span>
        </div>
        <div onclick = "pantallaInformacionResistenciaInferior();" class="opcioncontroles">
            <span id = "res_inf" class="icon-menos"></span>
        </div>
        <div onclick = "pantallaInformacionGratinar();" class="opcioncontroles">
            <span class="icon-hola"></span>
        </div>
        <div onclick = "pantallaInformacionAjustes();" class="opcioncontroles">
            <span class="icon-ajustes"></span>
        </div>
        <div onclick = "pantallaInformacionTemperatura();" class="opcioncontroles">
            <span class="icon-grados"></span>
        </div>
        <div onclick = "pantallaInformacionLuz();" class="opcioncontroles">
            <span class="icon-bombilla"></span>
        </div>
        <div onclick = "pantallaInformacionVentilador();" class="opcioncontroles">
            <span class="icon-ventilador"></span>
        </div>
        <div onclick = "pantallaInformacionReloj();" class="opcioncontroles">
        <span class="icon-reloj"></span>
        </div>
        <div onclick = "pantallaAjustes();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>
   
        `;
}

function pantallaInformacionLuz() {
    document.body.innerHTML = `
    <div class="info">
        <div>
        <span class="icon-bombilla"></span>
        <p>La función seleccionada permite encender o apagar la luz del electrodoméstico.</p>
        </div>
        <div onclick = "pantallaControles();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>
    
    `;
}

function pantallaInformacionTemperatura() {
    document.body.innerHTML = `
    <div class="info">
        <div>
        <span class="icon-grados"></span>
        <p>La función seleccionada permite escoger la temperatura de horneado deseada.</p>
        </div>
        <div onclick = "pantallaControles();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>
    
    `;
}

function pantallaInformacionResistenciaInferior() {
    document.body.innerHTML = `
    <div class="info">
       <div>
       <span class="icon-menos"></span>
       <p>La función seleccionada activa la resistencia inferior del horno.</p>
       </div>
       <div onclick = "pantallaControles();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>
    
    `;
}

function pantallaInformacionResistenciaSuperior() {
    document.body.innerHTML = `
    <div class="info">
       <div>
       <span class="icon-menos"></span>
       <p>La función seleccionada activa la resistencia superior del horno.</p>
        </div>
        <div onclick = "pantallaControles();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>
   
    `;
}

function pantallaInformacionGratinar() {
    document.body.innerHTML = `
    <div class="info">
        <div>
        <span class="icon-hola"></span>
        <p>La función seleccionada activa el modo para gratinar del horno.</p>
        </div>
        <div onclick = "pantallaControles();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>
   
    `;
}

function pantallaInformacionVentilador() {
    document.body.innerHTML = `
    <div class="info">
       <div>
       <span class="icon-ventilador"></span>
       <p>La función seleccionada activa el ventilador interior del horno.</p>
       </div>
       <div onclick = "pantallaControles();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>
   
    `;
}

function pantallaInformacionAjustes() {
    document.body.innerHTML = `
    <div class="info">
        <div>
        <span class="icon-ajustes"></span>
        <p>La función seleccionada permite acceder a las opciones de configuración del horno.</p>
        </div>
        <div onclick = "pantallaControles();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>
    `;
}

function pantallaInformacionReloj() {
    document.body.innerHTML = `
    <div class="info">
        <div>
        <span class="icon-reloj"></span>
        <p>La función seleccionada permite establecer temporizadores para hornear.</p>
        </div>
        <div onclick = "pantallaControles();" id="width100" class="SmallButton"><span>VOLVER</span></div>
    </div>
   
    `;
}

function pantallaDatosHorno() {
    document.body.innerHTML = `
    <div id="datoshorno"> 
    <ul class="datoshorno">
        <li>
            <b>Fabricante:</b>
            <p>Hornos Paco Sl</p>
        </li>
        <li>
            <b>Modelo:</b>
            <p>Paco5000</p>
        </li>
        <li>
            <b>Origen:</b>
            <p>Alicante, España</p>
        </li>
        <li>
            <b>Etiquetado Energético:</b>
            <p>A</p>
        </li>
        <li>
            <b>Fecha de fabricación:</b>
            <p>2022</p>
        </li>
    </ul>
    <div onclick = "pantallaAjustes()" id="width100" class="SmallButton">
        <span>VOLVER</span>
    </div>
    </div>`;
}

function cambiardown(element, idcirculo) {

    content = element.innerHTML;

    console.log("click\n");
    console.log(content);

    //document.getElementById("down").innerHTML = content;
    if (element.className == "Relojhorno") {}

    if (idcirculo != 'a') {
        if (document.getElementById(idcirculo).style.background == "" || document.getElementById(idcirculo).style.background.includes('white')) {
            document.getElementById(idcirculo).style.background = 'green';
        } else {
            document.getElementById(idcirculo).style.background = 'white';
        }
    }

}


function pantallaiddle() {

    //añadir un funcion que recoja todas lasvariables del horno true, luz puerta y tal y añadir a una variable, quiza array que construya el carousel

    document.body.innerHTML = `<section class="hornoiddle">
    <section class="lateral">
        <div id="circulo-grados" class="circulo"></div>
        <article onclick="cambiardown(this,'circulo-grados'), pantallaCambioTemperatura();" class="buttonhorno"><span class="icon-grados"></span></article>
        <div id="circulo-luz" class = "circulo"></div>
        <article onclick="cambiardown(this,'circulo-luz'), luzInteriorActivadaDesactivada();" class="buttonhorno"><span class="icon-bombilla"></span></article>
        <div id="circulo-ventilador" class = "circulo"></div>
        <article onclick="cambiardown(this,'circulo-ventilador'), ventiladorActivadoDesactivado();" class="buttonhorno"><span class="icon-ventilador"></span></article>
    </section>
    <section class="centro">
        <div id="up">
            <article onclick="cambiardown(this,'a'), pantallaCambioHora();" class="buttonhorno"><span class="icon-reloj"></span></article>
            <article id = "hora"  onload = "` + setInterval(muestraReloj, 20) + `" class="Relojhorno hora"></article>
            <article onclick="pantallaAjustes();" class="buttonhorno"><span class="icon-ajustes"></span></article>
        </div>
        <div id="down">

            <div class="owl-carousel owl-theme owl-loaded">
                <div class="owl-stage-outer">
                    <div class="owl-stage">
                        <div class="owl-item">evento1</div>
                        <div class="owl-item">evento2</div>
                        <div class="owl-item">evento3</div>
                        <div class="owl-item">evento4</div>
                        <div class="owl-item">evento5</div>
                    </div>
                </div>
            </div>

            <button id = "cocinar" >Iniciar cocinado</button>
            
        </div>
    </section>
    <section class="lateral">
    <div id="circulo-supres" class = "circulo"></div>
        <article onclick="cambiardown(this,'circulo-supres') , resistenciaSuperiorActivadaDesactivada();" class="buttonhorno" id="calor_arriba"><span class="icon-menos"></article>
        <div id="circulo-infres" class = "circulo"></div>
        <article onclick="cambiardown(this,'circulo-infres'), resistenciaInferiorActivadaDesactivada();" class="buttonhorno" id="calor_abajo"><span class="icon-menos"></article>
        <div id="circulo-gratinar" class = "circulo"></div>
        <article onclick="cambiardown(this,'circulo-gratinar'), gratinadorActivadoDesactivado();" class="buttonhorno"><span class="icon-hola"></article>
    </section>
</section>`;


}

function pantalla_definir_volumen() {

    document.body.innerHTML = `
    <div id="volumen_d">
    <section id="sec_vol1">
        <div>
            <span onclick = "menosvol();" class = "control_vol icon-sinvolumen"></span>
            <div id="volumen_ext">
                <div id="volumen_int" style = "width : ` + volumen + `;">
                </div>
            </div>
            <span onclick = "masvol();" class = "control_vol icon-convolumen"></span>
        </div>
        <div>
            <p id="volumen">` + volumen + `</p>
        </div>
    </section>
    <section id="sec_vol2">
        <div onclick="pantallaAjustes();" class="SmallButton">
            <p>Volver</p>
        </div>
    </section>
    </div>
    `;
}

function pantallaCambioHora() {
    document.body.innerHTML = `
    <div id = "temporizador">
        <section>
        <p class = "hora" id = "hora" onload = "` + setInterval(muestraReloj, 20) + `"></p>
        </section>
        <section>
            <div id = "borde_temp">
                <p id = "temp_valor">` + horastemp + ":" + minutostemp + `</p>      
            </div>
            
        </section>
        <div id = "temp_masmenos">
            <p id = "pmenos" class = "p_temp" onclick = "establecerTemporizador(0);" >-</p>
            <p id = "pmas" class = "p_temp" onclick = "establecerTemporizador(1);" >+</p>
        </div>
        <section id = "sec_vol2">
            <div onclick="temporizadorActivadoDesactivado(0);" class = "SmallButton">
                <p>Cancelar</p>
            </div>
            <div onclick="temporizadorActivadoDesactivado(1), cuentaRegresiva(), pantallaiddle();" class = "SmallButton">
                <p>Aceptar</p>
            </div>
        </section>    
    </div>
    `;
}

function pantallaCambioTemperatura() {
    document.body.innerHTML = `
    <div id = "temperatura">
        <section id = "sec_sonda" onclick = "activarDesactivarSonda(), sondaActivadaDesactivada();">
        <p class = "sonda" id = "sonda" >` + sonda + `</p>
        </section>
        <section>
            <div id = "temperatura_div">
                <p id = "temperatura_valor"> ` + temperatura + `</p>      
            </div>
            
        </section>
        <div id = "temperatura_masmenos">
            <p id = "ptempmenos" class = "p_temperatura" onclick = "establecerTemperatura(0);" >-</p>
            <p id = "ptempmas" class = "p_temperatura" onclick = "establecerTemperatura(1);" >+</p>
        </div>
        <section id = "sec_vol2">
            <div onclick=" temperaturaActivadaDesactivada(0);" class = "SmallButton">
                <p>Cancelar</p>
            </div>
            <div onclick="temperaturaActivadaDesactivada(1), pantallaiddle();" class = "SmallButton">
                <p>Aceptar</p>
            </div>
        </section>    
    </div>
    `;


}

function menosvol() {
    valorvol = parseInt(document.getElementById("volumen").innerHTML);
    if (valorvol != 0) {
        valorvol -= 10;
        document.getElementById("volumen").innerHTML = valorvol + "%";
        document.getElementById("volumen_int").style.width = valorvol + "%";
        localStorage.setItem("vol", valorvol + "%");
    }
    volumen = localStorage.getItem("vol");
}

function masvol() {
    valorvol = parseInt(document.getElementById("volumen").innerHTML);
    if (valorvol != 100) {
        valorvol += 10;
        document.getElementById("volumen").innerHTML = valorvol + "%";
        document.getElementById("volumen_int").style.width = valorvol + "%";
        localStorage.setItem("vol", valorvol + "%");
    }
    volumen = localStorage.getItem("vol");
}

function microfonoActivadoDesactivado() {
    doc = document.getElementById("mic");
    estado = doc.className;
    localStorage.setItem("mic", estado);
    if (mut = document.querySelector(".micro")) {
        if (mut.lastElementChild.className == "icon-desmuteado" && localStorage.getItem("mic") == "icon-desmuteado") {
            mut.lastElementChild.className = "icon-muteado";
            localStorage.setItem("mic", "icon-muteado");
        } else if (mut.lastElementChild.className == "icon-muteado" && localStorage.getItem("mic") == "icon-muteado") {
            mut.lastElementChild.className = "icon-desmuteado";
            localStorage.setItem("mic", "icon-desmuteado");
        }
    }
    microfono = localStorage.getItem("mic");

}

function muestraReloj() {
    caracteristicasAlCargar();
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (document.getElementById("hora"))
        document.getElementById("hora").innerHTML = horas + ':' + minutos;
}

function establecerTemporizador(entrada) {
    //Hay que guardar los valores en el localStorage para cuando se vuelva a mter el usuario o cuando se reinicie desde la funcion temporizadorActivadoDesactivado (IMPORTANTE)
    if (entrada == 0 && horastemp != -1) {

        if (minutostemp <= 0) {
            minutostemp = 60;
            horastemp -= 1;
        }
        minutostemp -= 5;
    } else if (entrada == 1) {
        minutostemp += 5;
        if (minutostemp >= 60) {
            horastemp += 1;
            minutostemp = 0;
        }
    }

    if (horastemp == -1) {
        minutostemp = 0;
        horastemp = 0;
        document.getElementById("temp_valor").innerHTML = '0' + minutostemp + ':' + '0' + horastemp;
    } else {
        if (horastemp < 10 && minutostemp < 10) {
            document.getElementById("temp_valor").innerHTML = '0' + horastemp + ':' + '0' + minutostemp;
        } else if (horastemp < 10) {
            document.getElementById("temp_valor").innerHTML = '0' + horastemp + ':' + minutostemp;
        } else if (minutostemp) {
            document.getElementById("temp_valor").innerHTML = horastemp + ':' + '0' + minutostemp;
        } else {
            document.getElementById("temp_valor").innerHTML = horastemp + ':' + minutostemp;
        }
    }

}

function temporizadorActivadoDesactivado(entrada) {
    if (entrada == 0) {
        document.getElementById("temp_valor").innerHTML = '0' + 0 + ':' + '0' + 0;
        temporizadorActivado = false;
        localStorage.setItem("temporizadorActivado", temporizadorActivado);
    } else if (entrada == 1 && minutostemp > 0) {
        temporizadorActivado = true;
        localStorage.setItem("temporizadorActivado", temporizadorActivado);
    }
    temporizadorActivado = localStorage.getItem("temporizadorActivado");
}

//FALTA POR HACER!!!
function cuentaRegresiva() {
    let aux = document.getElementById("temp_valor").innerHTML;
}

function establecerTemperatura(entrada) {

    valortemp = parseInt(document.getElementById("temperatura_valor").innerHTML);
    if (valortemp > 0 && entrada == 0) {
        valortemp -= 25;
        document.getElementById("temperatura_valor").innerHTML = valortemp + "º";
        localStorage.setItem("temperatura", valortemp + "º");
    } else if (valortemp < 500 && entrada == 1) {
        valortemp += 25;
        document.getElementById("temperatura_valor").innerHTML = valortemp + "º";
        localStorage.setItem("temperatura", valortemp + "º");
    }
    temperatura = localStorage.getItem("temperatura");

}

function activarDesactivarSonda() {

    let des = "Desactivar Sonda";
    let act = "Activar Sonda";

    son = document.getElementById("sonda").innerHTML;
    if (son == act) {
        document.getElementById("sonda").innerHTML = des;
        localStorage.setItem("sonda", des);
    } else if (son == des) {
        document.getElementById("sonda").innerHTML = act;
        localStorage.setItem("sonda", act);
    }
    sonda = localStorage.getItem("sonda");
}

function temperaturaActivadaDesactivada(entrada) {
    valortemp = parseInt(document.getElementById("temperatura_valor").innerHTML);
    if (entrada == 0) {
        temperaturaActivada = false;
        document.getElementById("temperatura_valor").innerHTML = 0 + "º";
        localStorage.setItem("temperaturaActivada", temperaturaActivada);
        localStorage.setItem("temperatura", 0 + "º");
    } else if (entrada == 1 && valortemp > 0) {
        temperaturaActivada = true;
        localStorage.setItem("temperaturaActivada", temperaturaActivada);
    }
    temperatura = localStorage.getItem("temperatura");
    temperaturaActivada = localStorage.getItem("temperaturaActivada");

}

function sondaActivadaDesactivada() {

    let des = "Desactivar Sonda";
    let act = "Activar Sonda";
    son = document.getElementById("sonda").innerHTML;
    if (son == act) {
        sondaActivada = false;
        localStorage.setItem("sondaActivada", sondaActivada);
    } else if (son == des) {
        sondaActivada = true;
        localStorage.setItem("sondaActivada", sondaActivada);
    }
    sondaActivada = localStorage.getItem("sondaActivada");
}

function resistenciaSuperiorActivadaDesactivada() {
    let res = document.getElementById("circulo-supres").style.background;
    if (res.includes('white')) {
        resistenciaSuperiorActivada = false;
        localStorage.setItem("resistenciaSuperiorActivada", resistenciaSuperiorActivada);
    } else if (res.includes('green')) {
        resistenciaSuperiorActivada = true;
        localStorage.setItem("resistenciaSuperiorActivada", resistenciaSuperiorActivada);

    }
    resistenciaSuperiorActivada = localStorage.getItem("resistenciaSuperiorActivada");
}

function resistenciaInferiorActivadaDesactivada() {
    let res = document.getElementById("circulo-infres").style.background;
    if (res.includes('white')) {
        resistenciaInferiorActivada = false;
        localStorage.setItem("resistenciaInferiorActivada", resistenciaInferiorActivada);
    } else if (res.includes('green')) {
        resistenciaInferiorActivada = true;
        localStorage.setItem("resistenciaInferiorActivada", resistenciaInferiorActivada);

    }
    resistenciaInferiorActivada = localStorage.getItem("resistenciaInferiorActivada");
    console.log(res);
}

function luzInteriorActivadaDesactivada() {
    let res = document.getElementById("circulo-luz").style.background;
    if (res.includes('white')) {
        luzInteriorActivada = false;
        localStorage.setItem("luzInteriorActivada", luzInteriorActivada);
    } else if (res.includes('green')) {
        luzInteriorActivada = true;
        localStorage.setItem("luzInteriorActivada", luzInteriorActivada);

    }
    luzInteriorActivada = localStorage.getItem("luzInteriorActivada");
    console.log(res);
}

function gratinadorActivadoDesactivado() {
    let res = document.getElementById("circulo-gratinar").style.background;
    if (res.includes('white')) {
        gratinadorActivado = false;
        localStorage.setItem("gratinadorActivado", gratinadorActivado);
    } else if (res.includes('green')) {
        gratinadorActivado = true;
        localStorage.setItem("gratinadorActivado", gratinadorActivado);

    }
    gratinadorActivado = localStorage.getItem("gratinadorActivado");
    console.log(res);
}

function ventiladorActivadoDesactivado() {
    let res = document.getElementById("circulo-ventilador").style.background;
    if (res.includes('white')) {
        ventiladorActivado = false;
        localStorage.setItem("ventiladorActivado", ventiladorActivado);
    } else if (res.includes('green')) {
        ventiladorActivado = true;
        localStorage.setItem("ventiladorActivado", ventiladorActivado);

    }
    ventiladorActivado = localStorage.getItem("ventiladorActivado");
    console.log(res);
}




function caracteristicasAlCargar() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
    });

    if (document.getElementById('circulo-supres') != null) {
        if (localStorage.getItem("resistenciaSuperiorActivada") == "true") {
            document.getElementById('circulo-supres').style.background = 'green';
        } else {
            document.getElementById('circulo-supres').style.background = 'white';
        }
    }

    if (document.getElementById('circulo-infres') != null) {
        if (localStorage.getItem("resistenciaInferiorActivada") == "true") {
            document.getElementById('circulo-infres').style.background = 'green';
        } else {
            document.getElementById('circulo-infres').style.background = 'white';
        }
    }

    if (document.getElementById('circulo-luz') != null) {
        if (localStorage.getItem("luzInteriorActivada") == "true") {
            document.getElementById('circulo-luz').style.background = 'green';
        } else {
            document.getElementById('circulo-luz').style.background = 'white';
        }
    }

    if (document.getElementById('circulo-ventilador') != null) {
        if (localStorage.getItem("ventiladorActivado") == "true") {
            document.getElementById('circulo-ventilador').style.background = 'green';
        } else {
            document.getElementById('circulo-ventilador').style.background = 'white';
        }
    }

    if (document.getElementById('circulo-gratinar') != null) {
        if (localStorage.getItem("gratinadorActivado") == "true") {
            document.getElementById('circulo-gratinar').style.background = 'green';
        } else {
            document.getElementById('circulo-gratinar').style.background = 'white';
        }
    }
}