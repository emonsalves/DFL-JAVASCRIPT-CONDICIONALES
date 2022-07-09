window.onload = function () {
    console.log("Esta cargado el HTML");
}

// Variable border le ingresamos la imagen de luffy por id
let borde = document.querySelector("#img-luffy");
console.log("Inicializada variable border");

// Funcion para verificar borde
function borderCheck() {
    console.log("Entra funcion checkBorder");
    if (borde.style.border != "2px solid red") {
        borde.style.border = "2px solid red";
        console.log("Entra true");
    }
    else {
        borde.style.border = null;
        console.log("Entra false");
    }
    console.log("Salida funcion checkBorder");
}

// Asignacion Funcion a Boton
let clickImg = document.querySelector("#img-luffy")
clickImg.addEventListener("click", borderCheck);






