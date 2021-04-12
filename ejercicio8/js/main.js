"use strict";
/*
1.- Definimos  variable (series,favoritos array vacio,)
2.- escuchar evento.
3.- funcion añadirá al array de favoritos una vez hemos
 hecho click
4.- pintar en html el array de favoritos
*/

const series = document.querySelectorAll(".serie");
const fav = [];
const listFav = document.querySelector(".fav");

function paintfav(favoritos){
  listFav.innerHTML = "";
  for (const fav of favoritos) {
      /*listFav.innerHTML += "<li>"+fav+"</li>";*/
      listFav.innerHTML += `<li> ${fav} </li>`;
  }
}
const handlerSeries = (ev) =>{
    /* añado elementos al array de favoritos*/
    fav.push(ev.target.innerHTML);
    console.log(fav);
    /*pintar en el html lo que hay en el array de favoritos*/
    paintfav(fav);
}
for (let i = 0; i < series.length; i++) {
    series[i].addEventListener("click",handlerSeries);
}

