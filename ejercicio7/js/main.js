'use strict';
const btn = document.querySelector(".js-item");
const btn1 = document.querySelector(".js-item2");

const menu = document.querySelector(".menu");

function handlerClick(e){
    console.log(e);
    console.log("hola");
    this.classList.add("orange");
}

function handlerClick2(e){
   console.log(e.target);
   const text = document.querySelector(".texto");
   text.classList.toggle("hidden");
   /* el elemento sobre el que realice la accion o el evento*/
   e.target.classList.toggle("blue"); 
}

btn.addEventListener("click", handlerClick);
btn1.addEventListener("click", handlerClick2);

const  handlerMenu = (ev) =>{
    console.log(ev);
    console.log(ev.currentTarget);
    console.log(ev.target)
}
menu.addEventListener("click",handlerMenu);

