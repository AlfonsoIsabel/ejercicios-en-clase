// dado 3 numeros indicar   el mayor, 
// y el segundo mayor
const name = "dayana";
const msjM = document.querySelector(".js-msjM");
const msjSm = document.querySelector(".js-msjSm");

const a = 370;
const b = 550;
const c = 210;


if (a > b && a > c) {
  msjM.innerHTML ="el mayor es el numero" + a;
  if (b > c) {
    msjSm.innerHTML = "el segundo mayor es " + b;
  } else {
    msjSm.innerHTML = "el segundo mayor es " + c;
  }
}
else if (b > a && b > c) {
  msjM.innerHTML ="el mayor es " + b;
  if (a > c) {
    msjSm.innerHTML = "el segundo mayor es " + a;
  }
  else {
    msjSm.innerHTML = "el segundo mayor es " + c;
  }
}
else {
  msjM.innerHTML ="el mayor es " + c;
  if (a > b) {
    msjSm.innerHTML = "el segundo mayor es " + a;
  } else {
    msjSm.innerHTML = "el segundo mayor es " + b;
  }
}
