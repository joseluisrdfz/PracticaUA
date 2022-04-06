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

function vaciarCuerpo() {
    document.body.innerHTML = '';
}

function main(x) {
    if (x == 0) {
        document.body.innerHTML = '<img src="./recursos/logo.png" id="logo" alt="logo"></img>';
        setTimeout(() => {
            vaciarCuerpo();
        }, 3000);

        setTimeout(() => {
            pantallaIdiomas();
        }, 3500);

    } else {
        //el usuario ya ha utilizado el horno anteriormente
    }

    //resto de codigo para una ejecucion normal
}


function idiomaSeleccionado(idiomaSeleccionado){
    idioma = idiomaSeleccionado;
    console.log(idioma);
}


function pantallaIdiomas(){
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

function pantallaEscanearQr(){
    document.body.innerHTML = `
    <p>Escanea el código QR y sigue los pasos en la App</p>
    <span onclick = "pantallaConexionEstablecida();" class="icon-qr"></span>
    <div onclick = "pantallaAjustes();" class="SmallButton">VOLVER</div>`;
}
function pantallaConexionEstablecida() {
    document.body.innerHTML = ` <h1>Red_Wifi_1</h1>
    <h2>Conexión establecida</h2>
    <span class="icon-correcto"></span>`;
    setTimeout(() => {
        pantallaAjustes();
    }, 3500);
}

function pantallaAjustes() {
    document.body.innerHTML = `
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
        <span id = "mic" class="`+microfono+`"></span>
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
    <div onclick = "pantallaiddle()" class="SmallButton">VOLVER</div>
      `;
}

function pantallaControles() {
    document.body.innerHTML = `
    <div onclick = "pantallaInformacionResistenciaSuperior();" class="opcioncontroles">
        <span class="icon-menos"></span>
    </div>
    <div onclick = "pantallaInformacionResistenciaInferior();" class="opcioncontroles">
        <span class="icon-menos"></span>
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
        <img src = "./recursos/ventilador.png">
    </div>
    <div onclick = "pantallaInformacionReloj();" class="opcioncontroles">
    <span class="icon-reloj"></span>
    </div>
    <div onclick = "pantallaAjustes();" class="SmallButton">VOLVER</div>
        `;
}

function pantallaInformacionLuz() {
    document.body.innerHTML = `
    <div class="info">
        <span class="icon-bombilla"></span>
        <p>La función seleccionada permite encender o apagar la luz del electrodoméstico.</p>
    </div>
    <div onclick = "pantallaControles();" class="SmallButton">VOLVER</div>
    `;
}

function pantallaInformacionTemperatura() {
    document.body.innerHTML = `
    <div class="info">
        <span class="icon-grados"></span>
        <p>La función seleccionada permite seleccionar la temperatura de horneado deseada.</p>
    </div>
    <div onclick = "pantallaControles();" class="SmallButton">VOLVER</div>
    `;
}

function pantallaInformacionResistenciaInferior() {
    document.body.innerHTML = `
    <div class="info">
        <span class="icon-menos"></span>
        <p>La función seleccionada activa la resistencia inferior del horno.</p>
    </div>
    <div onclick = "pantallaControles();" class="SmallButton">VOLVER</div>
    `;
}

function pantallaInformacionResistenciaSuperior() {
    document.body.innerHTML = `
    <div class="info">
        <span class="icon-menos"></span>
        <p>La función seleccionada activa la resistencia superior del horno.</p>
    </div>
    <div onclick = "pantallaControles();" class="SmallButton">VOLVER</div>
    `;
}

function pantallaInformacionGratinar() {
    document.body.innerHTML = `
    <div class="info">
        <span class="icon-hola"></span>
        <p>La función seleccionada activa el modo para gratinar del horno.</p>
    </div>
    <div onclick = "pantallaControles();" class="SmallButton">VOLVER</div>
    `;
}

function pantallaInformacionVentilador() {
    document.body.innerHTML = `
    <div class="info">
        <img src = "./recursos/ventilador.png">
        <p>La función seleccionada activa enciende el ventilador interior del horno.</p>
    </div>
    <div onclick = "pantallaControles();" class="SmallButton">VOLVER</div>
    `;
}

function pantallaInformacionAjustes() {
    document.body.innerHTML = `
    <div class="info">
        <span class="icon-ajustes"></span>
        <p>La función seleccionada seleccionada permite acceder a las opciones de configuración del horno.</p>
    </div>
    <div onclick = "pantallaControles();" class="SmallButton">VOLVER</div>
    `;
}

function pantallaInformacionReloj() {
    document.body.innerHTML = `
    <div class="info">
        <span class="icon-reloj"></span>
        <p>La función seleccionada permite establecer temporizadores para hornear.</p>
    </div>
    <div onclick = "pantallaControles();" class="SmallButton">VOLVER</div>
    `;
}

function pantallaDatosHorno() {
    document.body.innerHTML = ` 
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
    <div onclick = "pantallaAjustes()" class="SmallButton">
        <p>Volver</p>
    </div>`;
}

function cambiardown(element) {

    content = element.innerHTML;

    console.log("click\n");
    console.log(content);

    document.getElementById("down").innerHTML = content;
    if (element.className == "Relojhorno") {
        document.getElementById("down").innerHTML = "jaja has mirao";
    }

}


function pantallaiddle() {
    document.body.innerHTML = `<section class="hornoiddle">
    <section class="lateral">
        <article onclick="cambiardown(this);" class="buttonhorno">a</article>
        <article onclick="cambiardown(this);" class="buttonhorno">b</article>
        <article onclick="cambiardown(this);" class="buttonhorno">c</article>
    </section>
    <section class="centro">
        <div id="up">
            <article onclick="cambiardown(this);" class="buttonhorno">c</article>
            <article onclick="cambiardown(this);" class="Relojhorno">12:00</article>
            <article onclick="pantallaAjustes();" class="buttonhorno">d</article>
        </div>
        <div id="down">

        </div>
    </section>
    <section class="lateral">
        <article onclick="cambiardown(this);" class="buttonhorno">e</article>
        <article onclick="cambiardown(this);" class="buttonhorno">f</article>
        <article onclick="cambiardown(this);" class="buttonhorno">g</article>
    </section>
</section>`;
}

function pantalla_definir_volumen() {
    document.body.innerHTML = `
    <section id="sec_vol1">
        <div>
            <span onclick = "menosvol();" class = "control_vol icon-sinvolumen"></span>
            <div id="volumen_ext">
                <div id="volumen_int" style = "width : `+volumen+`;">
                </div>
            </div>
            <span onclick = "masvol();" class = "control_vol icon-convolumen"></span>
        </div>
        <div>
            <p id="volumen">`+volumen+`</p>
        </div>
    </section>
    <section id="sec_vol2">
        <div onclick="pantallaAjustes();" class="SmallButton">
            <p>Cancelar</p>
        </div>
        <div onclick="pantallaAjustes();" class="SmallButton">
            <p>Aceptar</p>
        </div>
    </section>
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

function microfonoActivadoDesactivado(){
    doc = document.getElementById("mic");
    estado = doc.className;
    localStorage.setItem("mic",estado);
    if(mut = document.querySelector(".micro")){
        if(mut.lastElementChild.className == "icon-desmuteado" && localStorage.getItem("mic") == "icon-desmuteado"){
            mut.lastElementChild.className = "icon-muteado";
            localStorage.setItem("mic","icon-muteado");
        }else if(mut.lastElementChild.className == "icon-muteado" && localStorage.getItem("mic") == "icon-muteado"){
            mut.lastElementChild.className = "icon-desmuteado";
            localStorage.setItem("mic","icon-desmuteado");
        }
    }
    microfono = localStorage.getItem("mic");

}