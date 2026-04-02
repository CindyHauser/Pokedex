function renderPokemonTemplates(pokemonDetails) {
    return `<div class="show_main_content">
                <h2>${pokemonDetails.name}</h2>
                <img src="${pokemonDetails.sprites.front_default}" alt="Pokemon">
                </div>`;
};