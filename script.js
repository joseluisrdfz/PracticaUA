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
    document.body.innerHTML = '<div> <a>Jaja has mirao</a> </div>';
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