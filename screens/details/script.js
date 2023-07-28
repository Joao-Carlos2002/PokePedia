fetch(`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('pokemon')}`)
    .then(response => response.json())
    .then(data => console.log(data))