translateButtons(document.getElementsByClassName('titles'))

function translateButtons(button) {
    const paragraph = Array.from(button)
    paragraph.forEach(element => {
        element.addEventListener('click', (ev) => {
            localStorage.setItem('region', ev.target.id)
            localStorage.setItem('geracao', ev.target.innerText)
        })

        switch (element.innerText) {
            case ('generation-i'):
                element.innerText = 'Kanto';
                break;
            case ('generation-ii'):
                element.innerText = 'Johto'
                break;
            case ('generation-iii'):
                element.innerText = 'Hoenn'
                break;
            case ('generation-iv'):
                element.innerText = 'Sinnoh'
                break;
            case ('generation-v'):
                element.innerText = 'Unova'
                break;
            case ('generation-vi'):
                element.innerText = 'Kalos'
                break;
            case ('generation-vii'):
                element.innerText = 'Alola'
                break;
            case ('generation-viii'):
                element.innerText = 'Galar'
                break;
            case ('generation-ix'):
                element.innerText = 'Paldea'
                break;
        }
    })
}

localStorage.setItem('link', 'https://pokeapi.co/api/v2/generation/')
