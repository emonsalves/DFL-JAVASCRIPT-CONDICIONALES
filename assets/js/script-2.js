window.onload = function () {
    console.log("Esta cargado el HTML");
}
let resultadoSuma = 0;
const resultadoRespuesta = document.querySelector("#resultado-respuesta")

function stickerCheck()
{
console.log("Entra funcion stickerCheck")
const stickerOne = Number(document.querySelector("#input-1").value);
const stickerTwo = Number(document.querySelector("#input-2").value);
const stickerThree = Number(document.querySelector("#input-3").value);
resultadoSuma = stickerOne + stickerTwo + stickerThree;


if (resultadoSuma <= 10 ) {
    console.log("Entra if <=10")
    resultadoRespuesta.innerHTML = `Llevas : ${resultadoSuma} Stickers` ;
}
else {
    console.log("Entra Else")
    resultadoRespuesta.innerHTML = `LLevas demasiados stickers`
}

}
// Asignacion Funcion a Boton
let clickBtn = document.querySelector("#btn-verificar");
clickBtn.addEventListener("click", stickerCheck);