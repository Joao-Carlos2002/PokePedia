function createHtml({ types, name, id, stats, weight }) {
    const pokemonDetails = document.querySelector('.pokemon-details');
    pokemonDetails.className = `pokemon-details ${types[0].type.name}`

    const imageContainer = document.createElement('section');
    imageContainer.className = 'image-container'

    const pokemonName = document.createElement('h1');
    pokemonName.className = 'pokemon-name'
    pokemonName.innerText = name

    const pokemonImage = document.createElement('img');
    pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    pokemonImage.className = 'pokemon-image'

    imageContainer.appendChild(pokemonName)
    imageContainer.appendChild(pokemonImage)
    pokemonDetails.appendChild(imageContainer)

    const healthContainer = document.createElement('section');
    healthContainer.className = 'health-container'
    const life = document.createElement('p');
    life.innerText = `Vida: ${stats[0].base_stat}`
    life.className = 'life'
    const weightHtml = document.createElement('p');
    weightHtml.innerText = `Peso: ${weight}`
    weightHtml.className = 'weight'

    healthContainer.appendChild(life)
    healthContainer.appendChild(weightHtml)
    pokemonDetails.appendChild(healthContainer)

    const statusContainer = document.createElement('section');
    statusContainer.className = 'status-container'
    const statusTitle = document.createElement('h3');
    statusTitle.innerText = 'Status'

    const statusDiv = document.createElement('div');
    statusDiv.className = 'status'
    const attack = document.createElement('p');
    attack.innerText = `Ataque: ${stats[1].base_stat}`
    const velocity = document.createElement('p');
    velocity.innerText = `Velocidade: ${stats[5].base_stat}`
    const defense = document.createElement('p');
    defense.innerText = `Defesa: ${stats[2].base_stat}`
    const spAttack = document.createElement('p');
    spAttack.innerText = `Sp Ataque: ${stats[3].base_stat}`
    const spDefense = document.createElement('p');
    spDefense.innerText = `Sp Defesa: ${stats[4].base_stat}`

    statusContainer.appendChild(statusTitle)
    statusDiv.appendChild(attack)
    statusDiv.appendChild(defense)
    statusDiv.appendChild(spAttack)
    statusDiv.appendChild(spDefense)
    statusDiv.appendChild(velocity)
    statusContainer.appendChild(statusDiv)
    pokemonDetails.appendChild(statusContainer)
}

fetch(`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('pokemon')}`)
    .then(response => response.json())
    .then(data => createHtml(data))

document.title = `Detalhes - ${localStorage.getItem('pokemon')}`