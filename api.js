const apiFetch = async () => {
    try {
        await fetch('https://pokeapi.co/api/v2/generation/')
            .then(res => res.json())
            .then(data => apiresults(data.results))

    } catch (error) {
        console.error(error)
    }
}

function apiresults(data) {
    const evento = new CustomEvent('resultApi', { detail: data });
    document.dispatchEvent(evento);
}

apiFetch()