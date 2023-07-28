const menuPokemons = document.getElementById('menu-pokemons');
const link = localStorage.getItem('link');
const spriteLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

document.title = `Pokedex - ${localStorage.getItem('geracao')}`

fetch(link)
    .then(Response => Response.json())
    .then(data => {
        fetchLink(data.pokemon_species)
    })

async function fetchLink(pokemons) {
    await pokemons.map((pokemon) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(response => response.json())
            .then(data => createHtml(menuPokemons, data, spriteLink))
    })
}

async function createHtml(section, { types, name, id }, spriteLink) {
    const boxPokemons = document.createElement('div');
    boxPokemons.className = `box-pokemons ${types[0].type.name}`

    const namePokemons = document.createElement('h3');
    namePokemons.className = 'name-pokemons'
    namePokemons.innerText = name

    const image = document.createElement('img');
    image.src = `${spriteLink}${id}.png`
    image.className = 'image-pokemons'
    const menuType = document.createElement('div');
    menuType.className = 'menu-type'
    types.map((type) => {
        const typePokemon = document.createElement('p')
        typePokemon.innerText = type.type.name
        typePokemon.className = `type-pokemons ${type.type.name}`
        menuType.appendChild(typePokemon)
    })

    boxPokemons.appendChild(namePokemons)
    boxPokemons.appendChild(image)
    boxPokemons.appendChild(menuType)
    section.append(boxPokemons)
}