window.onload = function () {
    console.log("Esta cargado el HTML");
}

function passwordCheck() {
    console.log("Entra funcion passwordCheck")
    const digito1 = document.querySelector("#select-one").value;
    const digito2 = document.querySelector("#select-two").value;
    const digito3 = document.querySelector("#select-three").value;

    const password = digito1 + digito2 + digito3;

    if (password === "911") {
        console.log("Entra al if === 911")
        const respuesta = document.querySelector("#respuesta-final");
        respuesta.innerHTML = "Password 1 Correcto";
    }
    else if (password === "714") {
        console.log("Entra al else if === 714")
        const respuesta = document.querySelector("#respuesta-final");
        respuesta.innerHTML = "Password 2 Correcto";
    }
    else {
        console.log("Entra al else")
        const respuesta = document.querySelector("#respuesta-final");
        respuesta.innerHTML = "Password Incorrecto";
    }
}

let btnIngresar = document.querySelector("#btn-ingresar")
btnIngresar.addEventListener("click", passwordCheck)