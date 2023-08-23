"use strict";
const reportJokes = [];
//API para recibir el tiempo
fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08001")
    .then(res => res.json())
    .then(data => {
    const weather = document.getElementById("weather");
    const stateDescription = data.stateSky.description; // Accede a la descripción del estado del cielo
    weather.textContent = stateDescription;
});
function mostrarAcudit() {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    //Agregamos options a la segunda API
    const options2 = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/chucknorris',
        headers: { 'X-Api-Key': 'gMYvkibOftXUIEQXQjIQeg==m2Q9gBPEjg0QpKln' },
        contentType: 'application/json'
    };
    //API para recibir chistes
    //Juntamos APIS y sus opciones en un array de objetos
    const urlsApis = [
        { url: "https://icanhazdadjoke.com", options: options },
        { url: "https://api.api-ninjas.com/v1/chucknorris", options: options2 }
    ];
    //Creamos constante para que elija urls aleatorias
    const indice = Math.floor(Math.random() * urlsApis.length);
    //Creamos constantes para las urls y las opciones
    const urlAleatoria = urlsApis[indice];
    const apiAleatoria = urlsApis[indice];
    //Hacemos fetch con las ultimas constantes para acceder a APIS
    fetch(urlAleatoria.url, apiAleatoria.options)
        .then(res => res.json())
        .then(response => {
        const chiste = document.getElementById("acudit");
        chiste.textContent = response.joke;
        // Obtener una referencia al elemento <section>
        const areaBotones = document.querySelector(".buttons");
        //Cada vez que le demos click al botón este borrará los botones mostrados anteriormente
        areaBotones.innerHTML = "";
        const button1 = document.createElement("button");
        const button2 = document.createElement("button");
        const button3 = document.createElement("button");
        //Añadimos propiedades bootstrap a los botones mediante .className
        button1.className = "btn btn-secondary mt-2 mx-2";
        button2.className = "btn btn-secondary mt-2 mx-2";
        button3.className = "btn btn-secondary mt-2 mx-2";
        //Le damos un contenido a los botones
        button1.textContent = "Score: 1";
        button2.textContent = "Score: 2";
        button3.textContent = "Score: 3";
        // Agregar los botones dentro del DOM
        areaBotones.appendChild(button1);
        areaBotones.appendChild(button2);
        areaBotones.appendChild(button3);
        /*Agregamos addEventListeners  a cada boton para guardar el valor de cada botón
        y poder agregarlo al array reportJokes*/
        button1.addEventListener("click", () => puntuacionUsuario(response.joke, 1));
        button2.addEventListener("click", () => puntuacionUsuario(response.joke, 2));
        button3.addEventListener("click", () => puntuacionUsuario(response.joke, 3));
    });
}
//Creamos una función para agregar chiste, puntuacion y fecha al array reportJokes
function puntuacionUsuario(joke, puntuacion) {
    const agregarDatos = {
        joke: joke,
        score: puntuacion,
        date: new Date()
    };
    reportJokes.push(agregarDatos);
    console.log("Report jokes: ", reportJokes);
}
