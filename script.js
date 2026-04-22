let pokemonNames = [];
let allPokemons = [];
let begin = 0;
let showNaviBtn = true;

function init() {
    fetchPokemon();
    getPokemonNames();
};

//show pokemon and show onclick-button for the next 20:

async function fetchPokemon() {
    let loaderRef = document.getElementById('loader');
    loaderRef.classList.add('active');
    let BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=0&offset=${begin}`;
    let response = await fetch(BASE_URL);
    let responseToJson = await response.json();

    for (let index = 0; index < responseToJson.results.length; index++) {
        let pokemon = responseToJson.results[index];
        let detailResponse = await fetch(pokemon.url);
        let pokemonDetails = await detailResponse.json();
        allPokemons.push(pokemonDetails);
        renderPokemons(pokemonDetails);
    };
    loaderRef.classList.remove('active');
};

function renderPokemons(pokemonDetails) {
    let mainContentRef = document.getElementById('mainContent');
    mainContentRef.innerHTML += renderPokemonTemplates(pokemonDetails);
    nextButton();
};

async function showNext20() {
    begin += 20;
    fetchPokemon();
};

//input-field to search for pokemon:

function navigationButtons() {
    let btnLeftRef = document.getElementById('btnLeft');
    let btnRightRef = document.getElementById('btnRight');

    if (showNaviBtn == false) {
        btnLeftRef.classList.add("d_none");
        btnRightRef.classList.add("d_none");
    } else {
        btnLeftRef.classList.remove('d_none');
        btnRightRef.classList.remove('d_none');
    };
};

function nextButton() {
    let next20BtnRef = document.getElementById('next20Btn');
    if (showNaviBtn == false) {
        next20BtnRef.classList.add("d_none");
    } else {
        next20BtnRef.classList.remove('d_none');
    }
}

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
    let tooShortRef = document.getElementById('tooShort');
    tooShortRef.innerHTML = "";
    if (inputPokemonRef.value.length >= 3) {
        let resultNames = pokemonNames.filter(name => name.toLowerCase().startsWith(inputPokemonRef.value.toLowerCase()));
        if (resultNames.length > 0) {
            inputPokemonRef.value = "";
            showPokemonDetails(resultNames);
        };
    } else {
        tooShortRef.innerHTML = "Enter at least 3 letters.";
    };
};

async function showPokemonDetails(resultNames) {
    let loaderRef = document.getElementById('loader');
    loaderRef.classList.add('active');
    let mainContentRef = document.getElementById('mainContent');
    mainContentRef.innerHTML = "";
    showNaviBtn = false;
    for (let i = 0; i < resultNames.length; i++) {
        let responseDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${resultNames[i]}`);
        let pokemonDetails = await responseDetails.json();
        allPokemons.push(pokemonDetails);
        mainContentRef.innerHTML += renderPokemonTemplates(pokemonDetails);
        nextButton();
    };
    loaderRef.classList.remove('active');
};

function resetWebsite() {
    let inputPokemonRef = document.getElementById('inputPokemon');
    let tooShortRef = document.getElementById('tooShort');
    inputPokemonRef.value = '';
    tooShortRef.innerHTML = "";
    allPokemons = [];
    showNaviBtn = true;
    document.getElementById('mainContent').innerHTML = "";
    begin = 0;
    fetchPokemon();
};