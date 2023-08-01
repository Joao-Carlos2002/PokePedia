const spriteLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

document.title = `Pokedex - ${localStorage.getItem('geracao')}`

fetch(localStorage.getItem('link'))
    .then(Response => Response.json())
    .then(data => {
        fetchLink(data.pokemon_species)
    })
    .catch(error => console.error(error))

function fetchLink(pokemons) {
    let array = []
    pokemons.map((pokemon) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(response => response.json())
            .then(data => {
                createHtml(array, data, spriteLink)
                document.getElementById('menu-pokemons').innerHTML = array.join('')
                addHref(document.getElementsByClassName('box-pokemons'))
            })
    })
}

function createHtml(array, { types, name, id }, spriteLink) {
    array.push(
        `<a href="../details/details.html">
            <button class="box-pokemons ${types[0].type.name}" value="${name}" href="../details/details.html">
                <h3 class="name-pokemons">${name}</h3>
                <p class="id-pokemons">#${id}</p>
                <img class="image-pokemons" src="${spriteLink}${id}.png" alt="${name}">
                <div class="menu-type">${types.map((type) => `<p class="type-pokemons ${type.type.name}">${type.type.name}</p>`).join('')}</div>    
            </button>
        </a>`)
}

function addHref(items) {
    const boxPokemons = Array.from(items)
    boxPokemons.forEach(element => {
        element.addEventListener('click', () => {
            localStorage.setItem('pokemon', element.value)
        })
    })
}