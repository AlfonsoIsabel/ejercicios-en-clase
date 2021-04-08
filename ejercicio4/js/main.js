//vat = iva
const msj = document.querySelector(".js-text");

function vat (price){
  /*let iva = 0;
  if(price > 500){
    iva = price * 0.21;
  }*/
  let iva = (price > 500) ?  price * 0.21 : 0;
  return iva;
}

function total(pr){
  const pagoTotal  = pr + vat(pr);
  return pagoTotal;
}

const iva = vat(520);
msj.innerHTML =  "iva "+ iva + " precio total es " + total(520) ;
//console.log(iva+ " main");

const suma = (num1,num2) => { 
  const total = num1+ num2;
  return total;
}
console.log( suma( 50,75) );