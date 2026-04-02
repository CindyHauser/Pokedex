let pokemons = [];

let BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

function init() {
    fetchPokemon()
}

async function fetchPokemon() {
    let response = await fetch(BASE_URL);
    let responseToJson = await response.json();

    for (let index = 0; index < responseToJson.results.length; index++) {
        let pokemon = responseToJson.results[index];
        let detailResponse = await fetch(pokemon.url);
        let pokemonDetails = await detailResponse.json();

        renderPokemons(pokemonDetails);
    };
};

function renderPokemons(pokemonDetails) {
    let mainContentRef = document.getElementById('mainContent');
    mainContentRef.innerHTML += renderPokemonTemplates(pokemonDetails);
};
