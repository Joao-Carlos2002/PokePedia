
document.addEventListener('resultApi', event => {
    let arrayHtml = []
    event.detail.map((gen) => {
        createHtml(gen, arrayHtml)
        document.getElementById('menu').innerHTML = arrayHtml.join('')
        translateButtons(document.getElementsByClassName('titles'))
    })
})



function createHtml(data, array) {
    array.push(`<button class="html-redirect">
        <p class="titles" id=${data.url}>${data.name}</p>
    </button >`)
}

function translateButtons(button) {
    const paragraph = Array.from(button)
    paragraph.forEach(element => {
        element.addEventListener('click', (event) => {
            window.location.href = './screens/pokedex/pokedex.html'
            localStorage.setItem('link', event.target.id)
            localStorage.setItem('geracao', event.target.innerText)
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