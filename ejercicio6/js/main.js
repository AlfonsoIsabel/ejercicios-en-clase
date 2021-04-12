const age = [70,500,80,200,90];
const text = document.querySelector(".text");
/*acum= 0;
= 20 + 0 = 20
= 30 + 20  = 50
= 25 + 50 = 75
= 36 +75 = 111
= 37 + 111 = 148 */ 

//ciclo FOR, iterativas,bucles,ciclos,
// index++     =>   index = index +2

for (let index = 0; index <= age.length -1; index++) {
  console.log(age[index]);
}

function avg(arrayAge){
  let acum = 0;
  for(let i = 0; i < arrayAge.length; i++ ){
    //acum = arrayAge[i] + acum;
    acum += arrayAge[i];
  }
  const prom = acum / arrayAge.length;
  return prom;
}


function msj(){
  const promAge = avg(age); 
  if(promAge < 0 || promAge > 100){
    text.innerHTML = "debe corregir las edad";
  }
  else if (promAge < 30){
    text.innerHTML = "tiene descuento 10%";
  }else if( promAge > 60){
    text.innerHTML = "Tiene el producto gratis";
  }
  else{
    text.innerHTML = "tiene descuento 50%";
  }
  console.log("funcion msj " + promAge);
}
// una vez tenga prom, msj prom <30 tiene descuento 10%
// prom  30 y 60 descuento de 50%
// prom > 60   producto sale gratis

msj();
//console.log("promedio de edades ");