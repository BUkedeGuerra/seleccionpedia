"use strict";

/////////////////////////// CAMBIAR ENLACES RELATIVOS A ABSOLUTOS //////////////////////
const links = document.querySelectorAll("[href^='/']:not([href^='//'])");
console.log(links);

for (const link of links) {
  const ruta = link.getAttribute("href");
  /* console.log(ruta); */
  link.setAttribute("href", "http://wikipedia.org" + ruta);
}

const enlaces = document.querySelectorAll("a");
console.log(enlaces);
for (const enlace of enlaces) {
  enlace.setAttribute("target", "_blank");
}

///////////////////////////////// ANIMACIÓN LETRAS //////////////////
const titulos = document.querySelectorAll("h2, h3");
console.log(titulos);

function movimiento(elemento) {
  const letras = elemento.textContent.split("");
  elemento.textContent = "";
  for (let i = 0; i < letras.length; i++) {
    const span = document.createElement("span");
    span.textContent = letras[i];
    span.classList.add("movimiento");
    span.style.animationDelay = i / 5 + "s";
    elemento.append(span);
  }
}

for (let titulo of titulos) {
  movimiento(titulo);
}

////////////////////////// IMÁGENES DEL FONDO :) ///////////////////////////////

function getData(url) {
  return fetch(url).then((response) => response.json());
}

async function imagenesfondo() {
  const sections = document.querySelectorAll("section.section");
  const imagenes = await getData(
    `https://api.unsplash.com/photos/random?query=soccer&count=${sections.length}&client_id=kghnmDRzhGa5m6V1Sg4v7W0r0BgX4JOvSdnOnApn4ok`
  );
  for (let i = 0; i < sections.length; i++) {
    console.log(imagenes[i].urls.raw);
    const image = imagenes[i].urls.raw;
    sections[i].style.backgroundImage = `url(${image})`;
  }
}

/* imagenesfondo(); */
