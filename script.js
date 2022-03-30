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
    document.body.innerHTML = '<div> <a>Jaja has mirao</a> </div>';
}