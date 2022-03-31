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

function vaciarCuerpo(){
    document.body.innerHTML = '';
}
function main(x){
    if(x == 0){
        document.body.innerHTML=  '<img src="./recursos/logo.png" id="logo" alt="logo"></img>';
        setTimeout(() => {
            vaciarCuerpo();
        }, 3000);

        setTimeout(() => {
            pantallaIdiomas();
        }, 3500);
         
    }else{
        //el usuario ya ha utilizado el horno anteriormente
    }

    //resto de codigo para una ejecucion normal
}


function pantallaIdiomas(){
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
    <span class="icon-down-outline arrowdown"></span>
    <span class="icon-up-outline arrowup"></span>` ;
}