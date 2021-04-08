const month = document.querySelector(".month");
const msj = document.querySelector(".msj");
/*function mensaje(){
  console.log("llamó a la funcion");
  console.log(month.value);
  const value= parseInt(month.value);
   if (value === 1 || value === 3 || value === 3 || value === 5 || 
    value === 7 || value === 10 || value === 12){
    msj.innerHTML = "el mes tiene 31 dias";
   }
   else if(value === 2){
    msj.innerHTML = "el mes tiene 28 o 29 dias";
   }
   else{
     /*if(value === 0){
      msj.innerHTML = "seleccione un mes";
     }
     else{
      msj.innerHTML = "el mes tiene 30 dias";
     }*/
// msj.innerHTML = (value === 0)? "seleccione un mes": "el mes tiene 30 dias"
//  }
//}

const mensaje = () => {
  const value = parseInt(month.value);
  if (value === 1 || value === 3 || value === 3 || value === 5 ||
    value === 7 || value === 10 || value === 12) {
    msj.innerHTML = "el mes tiene 31 dias";
  }
  else if (value === 2) {
    msj.innerHTML = "el mes tiene 28 o 29 dias";
  }
  else {
    msj.innerHTML = (value === 0)? "seleccione un mes": "el mes tiene 30 dias"
   }
}
month.addEventListener("change", mensaje);