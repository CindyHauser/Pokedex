let pokemonNames = [];
let allPokemons = [];

let begin = 0;

function init() {
    fetchPokemon();
    getPokemonNames();
};

//show pokemon and onclick-button for the next 20:

async function fetchPokemon() {
    let BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=0&offset=${begin}`;
    let response = await fetch(BASE_URL);
    let responseToJson = await response.json();

    for (let index = 0; index < responseToJson.results.length; index++) {
        let pokemon = responseToJson.results[index];
        let detailResponse = await fetch(pokemon.url);
        let pokemonDetails = await detailResponse.json();
        allPokemons.push(pokemonDetails);
        console.log(allPokemons);
        
        renderPokemons(pokemonDetails);       
    };
};

function renderPokemons(pokemonDetails) {
    let mainContentRef = document.getElementById('mainContent');
    mainContentRef.innerHTML += renderPokemonTemplates(pokemonDetails);
};

async function showNext20() {
    begin += 20;
    fetchPokemon();
};

//input-field to search for pokemon:

async function getPokemonNames() {
    let BASE_URL_NAMES = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    let responseName = await fetch(BASE_URL_NAMES);
    let responseNameToJson = await responseName.json();

    for (let indexName = 0; indexName < responseNameToJson.results.length; indexName++) {
        let pokemonNamesRef = responseNameToJson.results[indexName];
        pokemonNames.push(pokemonNamesRef.name);
    };
};

function searchPokemon() {
    let inputPokemonRef = document.getElementById('inputPokemon');
    if (inputPokemonRef.value.length >= 3) {
        let resultNames = pokemonNames.filter(name => name.toLowerCase().startsWith(inputPokemonRef.value.toLowerCase()));
        if (resultNames.length > 0) {
            showPokemonDetails(resultNames);
        };
    };
};

async function showPokemonDetails(resultNames) {
    let mainContentRef = document.getElementById('mainContent');
    mainContentRef.innerHTML = "";

    for (let i = 0; i < resultNames.length; i++) {
        let responseDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${resultNames[i]}`);
        let searchedPokemons = await responseDetails.json();
        mainContentRef.innerHTML += renderSearchedPokemonsTemplate(searchedPokemons);
    };
};