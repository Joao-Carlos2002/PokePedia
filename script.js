document.addEventListener('resultApi', event => {
    const result = event.detail;
    result.map((gen) => {
        const button = document.createElement('button');
        button.className = 'html-redirect'

        const paragraph = document.createElement('p');
        paragraph.id = gen.url;
        paragraph.className = 'titles'
        paragraph.innerText = gen.name

        const menu = document.getElementById('menu');

        button.appendChild(paragraph);
        menu.appendChild(button);
    })

    const paragraph = document.getElementsByClassName('titles');
    const paragraphArray = Array.from(paragraph)


    paragraphArray.forEach(element => {
        if (element.innerText == 'generation-i') {
            element.innerText = 'Primeira Geração'
        } if (element.innerText == 'generation-ii') {
            element.innerText = 'Segunda Geração'
        } if (element.innerText == 'generation-iii') {
            element.innerText = 'Terça Geração'
        } if (element.innerText == 'generation-iv') {
            element.innerText = 'Quarta Geração'
        } if (element.innerText == 'generation-v') {
            element.innerText = 'Quinta Geração'
        } if (element.innerText == 'generation-vi') {
            element.innerText = 'Sexta Geração'
        } if (element.innerText == 'generation-vii') {
            element.innerText = 'Sétima Geração'
        } if (element.innerText == 'generation-viii') {
            element.innerText = 'Oitava Geração'
        } if (element.innerText == 'generation-ix') {
            element.innerText = 'Nona Geração'
        }
    })

    paragraphArray.forEach(element => {
        element.addEventListener('click', (event) => {
            window.location.href = './screens/pokedex/pokedex.html'
            localStorage.setItem('link', event.target.id)
            localStorage.setItem('geracao', event.target.innerText)
        })
    });

})