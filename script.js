document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
function abrirImagen(src){

document.getElementById("visor").style.display="flex";

document.getElementById("imagenGrande").src=src;

}

function cerrarImagen(){

document.getElementById("visor").style.display="none";

}

window.addEventListener('scroll',()=>{
 const h=document.querySelector('header');
 if(!h) return;
 h.classList.toggle('encogido',window.scrollY>80);
});
function abrirVideo(ruta){

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoGrande");

    video.src = ruta;

    modal.style.display = "flex";

    video.play();

}

function cerrarVideo(){

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoGrande");

    video.pause();

    video.currentTime = 0;

    modal.style.display = "none";

    video.src = "";

}

// Animaciones al hacer scroll

const elementos = document.querySelectorAll(
".card, .destacado, .estadistica, .galeria img, #historia, #servicios"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

},{threshold:0.15});

elementos.forEach(el=>{

    el.classList.add("oculto");

    observer.observe(el);

});

// Carrusel automático del fondo principal

const hero = document.querySelector(".hero");

const fondos = [
    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg",
    "img/foto4.jpg"
];

let fondoActual = 0;

function cambiarFondo(){

    hero.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url('${fondos[fondoActual]}')`;

    fondoActual++;

    if(fondoActual>=fondos.length){

        fondoActual=0;

    }

}

cambiarFondo();

setInterval(cambiarFondo,5000);

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("preloader").classList.add("ocultar");

    }, 1200);

});

// ===== PREGUNTAS FRECUENTES =====

const preguntas = document.querySelectorAll(".faq-question");

preguntas.forEach((pregunta) => {
    pregunta.addEventListener("click", () => {
        const item = pregunta.parentElement;
        item.classList.toggle("active");
    });
});

