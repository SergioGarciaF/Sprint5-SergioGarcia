

function mostrarAcudit() {

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch("https://icanhazdadjoke.com", options)
        .then(res => res.json())
        .then(response => {
            const acuditEl = document.getElementById("acudit");
            acuditEl.textContent = response.joke;
        });
}
