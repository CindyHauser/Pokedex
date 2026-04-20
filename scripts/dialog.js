const DIALOG_WINDOW = document.getElementById('dialog_window');

function toggleDialog(name) {
    if (DIALOG_WINDOW.open) {
        DIALOG_WINDOW.close();
    } else {
        DIALOG_WINDOW.showModal();
        showDialogPokemons(name);
        navigationButtons();
    };
};

function stopPropagationFunction(event) {
    event.stopPropagation();
};

function showDialogPokemons(name) {
    let dialogContentRef = document.getElementById('dialogContent');
    let pokemon = allPokemons.find(pokemon => pokemon.name === name);
    dialogContentRef.innerHTML = showDialogPokemonsTemplate(pokemon);
};

function switchToLeftPokemon(pokemonID) {
    let dialogContentRef = document.getElementById('dialogContent');
    let nextLeftPokemonID = pokemonID - 2;
    let nextLeftPokemon = allPokemons[nextLeftPokemonID];
    if (nextLeftPokemonID >= 0) {
        dialogContentRef.innerHTML = showDialogPokemonsTemplate(nextLeftPokemon);
    };
};

function switchToRightPokemon(pokemonID) {
    let dialogContentRef = document.getElementById('dialogContent');
    let nextRightPokemon = allPokemons[pokemonID];
    if (pokemonID >= 0 && pokemonID < allPokemons.length) {
        dialogContentRef.innerHTML = showDialogPokemonsTemplate(nextRightPokemon);
    } else {
        showNext20();
    };
};