function createHtml({ types, name, id, stats, weight }) {
    document.title = `Detalhes - ${localStorage.getItem('pokemon')}`
    return `<header>
                <a href="../../index.html">
                <h1>PokePedia</h1>
                </a>
            </header>
            <a class="home" href="../pokedex/pokedex.html">
                <i class="fa-solid fa-chevron-left"></i>
            </a>
            <main class="pokemon-details ${types[0].type.name}">
                <section class="image-container">
                    <h1 class="pokemon-name">${name}</h1>
                    <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png">    
                </section>
                <section class="health-container">
                    <p class="life">Vida: ${stats[0].base_stat}</p>
                    <p class="weight">Peso: ${weight}</p>
                </section>
                <section class="status-container">
                    <h3>Status</h3>
                    <div class="status">
                    <p>Ataque: ${stats[1].base_stat}</p>
                    <p>Velocidade: ${stats[5].base_stat}</p>
                    <p>Defesa: ${stats[2].base_stat}</p>
                    <p>Sp Ataque: ${stats[3].base_stat}</p>
                    <p>Sp Defesa: ${stats[4].base_stat}</p>
                    </div>
                </section>
            </main>`
}

let array = []
fetch(`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('pokemon')}`)
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = createHtml(data)
    })
    .catch(error => console.log(error))
