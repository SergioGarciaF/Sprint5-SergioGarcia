

function mostrarAcudit() {

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch("https://icanhazdadjoke.com", options)
        .then(res => res.json())
        .then(response => console.log(response.joke));
}
