function renderPokemonTemplates(pokemonDetails) {
    return `<div class="show_main_content">
                <h2>${pokemonDetails.name}</h2>
                <img src="${pokemonDetails.sprites.other.home.front_default}" alt="Pokemon">
                </div>`;
};
