// Creacion de arrays globales a medida para la seleccion de distintos idiomas
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



function pantallaIdiomas() {
    document.body.innerHTML = `<div class ="idiomas" id ="chino"><p>普通话</p></div>
    <div class = "idiomas" id ="espanyol"><p>Español</p></div>
    <div class = "idiomas" id ="ingles"><p>English</p></div>
    <div class = "idiomas" id ="hindi"><p>भारतीय</p></div>
    <div class = "idiomas" id ="arabe"><p>عرب</p></div>
    <div class = "idiomas" id ="portugues"><p>Português</p></div>
    <div class = "idiomas" id ="ruso"><p>pусский</p></div>
    <div class = "idiomas" id ="urdu"><p>اردو</p></div>
    <div class = "idiomas" id ="bengali"><p>বাংলা</p></div>
    <div class = "idiomas" id ="frances"><p>Français</p></div>
    <div class = "idiomas" id ="aleman"><p>Deutsch</p></div>
    <div class = "idiomas" id ="italiano"><p>Italiano</p></div>
    <span class="icon-abajo arrowdown"></span>
    <span class="icon-arriba arrowup"></span>` ;
}

function pantallaConexionEstablecida(){
    document.body.innerHTML = ` <h1>Red_Wifi_1</h1>
    <h2>Conexión establecida</h2>
    <span class="icon-correcto"></span>`;
}

function pantallaAjustes(){
    document.body.innerHTML =  ` 
    <div class="opcion">
        <p>WIFI</p>
        <span class="icon-wifi"></span>
    </div>
    <div class="opcion"></div>
    <div class="opcion"></div>
    <div class="opcion"></div>
    <div class="opcion"></div>
    <div class="opcion"></div>  `;
}

function pantallaDatosHorno() {
    document.body.innerHTML = ` <ul class="datoshorno">
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
                                <div class="SmallButton">
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
            <article onclick="cambiardown(this);" class="buttonhorno">d</article>
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