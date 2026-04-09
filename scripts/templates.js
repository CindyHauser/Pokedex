function renderPokemonTemplates(pokemonDetails) {
    return `<div class="show_main_content">
                <h2>${pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h2>
                <img src="${pokemonDetails?.sprites?.other?.home?.front_default 
                                     ?? pokemonDetails.sprites.other["official-artwork"].front_default}" alt="Pokemon">
                </div>`;
};

function renderSearchedPokemonsTemplate(searchedPokemons){
        return `<div class="show_main_content">
                <h2>${searchedPokemons.name}</h2>
                <img src="${searchedPokemons?.sprites?.other?.home?.front_default 
                                     ?? searchedPokemons.sprites.other["official-artwork"].front_default}" alt="Pokemon">
                </div>`;
};