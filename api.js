const apiFetch = async () => {
    await fetch('https://pokeapi.co/api/v2/generation/')
        .then(res => res.json())
        .then(data => apiresults(data.results))
}

function apiresults(data) {
    const evento = new CustomEvent('resultApi', { detail: data });
    document.dispatchEvent(evento);
    urlRedirect(data)
}

function urlRedirect(data) {
    const genRedirect = new CustomEvent('genRedirect', { detail: data })
    document.dispatchEvent(genRedirect)
}

document.addEventListener('urlRedirect', event => {
    console.log(event)
})

apiFetch()