"use strict"

const reportJokes = []!;
function mostrarAcudit() {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };

    fetch("https://icanhazdadjoke.com", options)
        .then(res => res.json())
        .then(response => {
            const chiste = document.getElementById("acudit")!;
            chiste.textContent = response.joke;

            // Obtener una referencia al elemento <section>
            const areaBotones = document.querySelector(".buttons");

            //Cada vez que le demos click al botón este borrará los botones mostrados anteriormente
            areaBotones!.innerHTML = "";

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
            areaBotones!.appendChild(button1);
            areaBotones!.appendChild(button2);
            areaBotones!.appendChild(button3);

            /*Agregamos addEventListeners  a cada boton para guardar el valor de cada botón
            y poder agregarlo al array reportJokes*/

            button1.addEventListener("click", () => puntuacionUsuario(response.joke, 1))
            button2.addEventListener("click", () => puntuacionUsuario(response.joke, 2))
            button3.addEventListener("click", () => puntuacionUsuario(response.joke, 3))
        });
}

//Creamos una función para agregar chiste, puntuacion y fecha al array reportJokes
function puntuacionUsuario (joke, puntuacion){
    const agregarDatos = {
        joke: joke,
        score: puntuacion
        date: new Date()
    };

    reportJokes.push(agregarDatos);
    console.log("Report jokes: ", reportJokes);
}
