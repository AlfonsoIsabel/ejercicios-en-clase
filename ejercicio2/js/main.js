const age = document.querySelector(".js-age");
const ageNew = parseInt(age.value);
const name = "dayana";

const msj = document.querySelector(".js-msj");

console.log(age.value);
//estructura de control de flujo de datos, condicional
// Operadores compracion ===, >=, <= !=, ==,
// Operadores logicos   && (and),  || (or)
/*if(ageNew >= 18){
  console.log("Bienvenido");
}
else{
  console.log("debes esparar unos añitos");
}
*/

if(ageNew < 0){
  console.log("no puede ser negativo");
}
else if(ageNew < 18){
  console.log("debes esperar unos añitos");
}
else if(ageNew >=18 && ageNew <=70){
        console.log("bienvenido");
    }
    else if(ageNew >100){
      console.log("no acepto edades mayor que 100");
    }
    else{
      console.log("tiene un descuento de 50%");
    }

msj.innerHTML = ageNew >=18 ? "bienvenido": "debe esperar unos años";

if(name === "dayana"){
   console.log("nombre");
}

if(ageNew == 50){
  console.log("entro en el if ==");
}