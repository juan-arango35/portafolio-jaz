let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

const container = document.querySelector(".containerluvia");
const rain =()=>{
    let i = 0;
    while(i < 80){
        let gout = document.createElement("i");
        gout.classList.add('gota');
        let x = innerWidth * Math.random();
        let time = 1*Math.random()
        gout.style.animationDuration = time <= 1 ? (time + 1) + "s": time + "s";
        gout.style.animationDelay = time + "s";
        gout.style.left = x + "px";
        container.appendChild(gout);
        i++
    }
}
rain()

const togleThemeButtons =document.querySelector("#theme-toggle");
const seccion = document.querySelector(".contenedor-header");
const sobremi =document.querySelector(".sobremi");
const skill = document.querySelector(".skills");
const curriculum = document.querySelector(".curriculum");
const portafolio = document.querySelector(".portfolio");
const contacto=document.querySelector(".contacto");
const footer=document.querySelector(".footer");

togleThemeButtons.addEventListener("click", ()=>{
seccion.classList.toggle("dark-mode")
sobremi.classList.toggle("dark-mode")
skill.classList.toggle("dark-mode")
curriculum.classList.toggle("dark-mode")
portafolio.classList.toggle("dark-mode")
contacto.classList.toggle("dark-mode")
footer.classList.toggle("dark-mode")    
})

