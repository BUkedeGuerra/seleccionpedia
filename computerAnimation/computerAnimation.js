/*!
 * fullPage 3.1.1
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */



function movimiento(elemento) {
    const letras = elemento.textContent.split("");
    elemento.textContent = "";
    for (let i = 0; i < letras.length; i++) {
      const span = document.createElement("span");
      span.textContent = letras[i];
      span.classList.add("movimiento");
      span.style.animationDelay = i / 5 + 1 + "s";
      elemento.append(span);
    }
  }
  
  for (let titulo of titulos) {
    titulo.style.opacity = 0;
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) movimiento(entry.target);
      });
    };
  
    let observer = new IntersectionObserver(callback);
  
    observer.observe(titulo);
    titulo.style.opacity = 1;
  }